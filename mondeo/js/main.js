/**
 * Created by luhao on 2017/4/17.
 */
(function(){
    var host = 'http://api.bjczxda.com/api/';
    var http = new Http(host);
    var validate = new InputUtil();
    var flag = 'MONDEO_20170501';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var store = {
        lives:0, //直播人气数
        audiences:0, //同时在线人数
        tricyclic_turns:0, //三环圈数
        tetracyclic_turns:0, //四环圈数
        pentacyclic_turns:0, //五环圈数
        used_gasoline:0, // 三环已使用油量
        used_gasonline_tera:0, // 四环已使用油量
        used_gasonline_penta:0, // 五环已使用油量
        used_time_tri:0, // 已挑战时间
        support:0, //支持挑战成功人数
        nonsupport:0, //不支持人数
        active_state:0 // 活动状态 0：活动前期 1：活动中期（直播） 2：活动后期（直播结束）
    };

    /**
     * videojs 对象
     * @type {null}
     */
    var  player= null;

    /**
     * websocket server address
     * @type {string}
     */
    var websocket_url =  'ws://node.bjczxda.com';
    var socket = null;
    /**
     * 主swiper对象
     * @type {null}
     */
    var mainSwiper = null;
    /**
     * 网友评论swiper对象
     * @type {null}
     */
    var commentSwiper = null;
    /**
     * 活动规则的iscroll对象
     * @type {null}
     */
    var ruleScroller = null;


    /**
     * 忽略部分ajax请求
     * @type {{ajax: {ignoreURLs: *[]}}}
     */
    Pace.options = {
        ajax: {
            ignoreURLs: [host+'h5/storeComment'
                , host+'h5/storeProposer']
        }
    }
    var loadInterval = null;

    Pace.once('start',function(){
        loadInterval = setInterval(function(){
            var load = $('.pace-progress').attr('data-progress-text');
            $('.percent').html(load);
        },100);

        /**
         * 获取网页评论
         */
        http.ajaxRequest({
            type:'GET',
            uri:'h5/getComments?flag='+flag,
            success:function(json){
                var comments = json.data.data;
                var dom = $('#commentSwiper').find('.swiper-wrapper');
                var htmlStr = '';
                for(var i =0; i < comments.length; i++){
                    var comment = comments[i];
                    htmlStr += '<div class="swiper-slide swiper-no-swiping">';
                    htmlStr += '<p style="font-weight: bolder">' + comment.name+'&nbsp;:</p>';
                    htmlStr += '<p><span class="topic">#新蒙迪欧HEV#</span>'+ comment.comment +'</p>';
                    htmlStr += '</div>';
                }
                $(dom).html(htmlStr);
            },
            error:function(e){
                if(e.responseJSON){
                    alert(e.responseJSON.message);
                }else
                    alert('您已参加活动，请继续浏览后续内容!');
            }
        });

        /**
         * 初始化页面数据
         */
        http.ajaxRequest({type:'GET',uri:'h5/getInitDatas?flag='+flag,success:function(json){
            var data = json.data;
            if(data){
                store.lives = data.lives;
                store.audiences = data.audiences;
                store.tricyclic_turns = data.tricyclic_turns;
                store.tetracyclic_turns = data.tetracyclic_turns;
                store.pentacyclic_turns = data.pentacyclic_turns;
                store.used_gasoline = data.used_gasoline;
                store.used_gasonline_tera  = data.used_gasonline_tera;
                store.used_gasonline_penta = data.used_gasonline_penta;
                store.used_time_tri = data.used_time_tri;
                store.support = data.support;
                store.nonsupport = data.nonsupport;

                $('#lives').html(store.lives);
                $('#audiences').html(store.audiences);

                $('#tricyclic_turns').html(store.tricyclic_turns + '圈');
                $('#tetracyclic_turns').html(store.tetracyclic_turns + '圈');
                $('#pentacyclic_turns').html(store.pentacyclic_turns + '圈');

                $('#used_gasoline').html(store.used_gasoline + 'L');
                $('#used_gasonline_tera').html(store.used_gasonline_tera + 'L');
                $('#used_gasonline_penta').html(store.used_gasonline_penta + 'L');

                $('#support-num').html(store.support);
                $('#nonsupport-num').html(store.nonsupport);

                store.active_state = parseInt(data.active_state);
            }
        }});
    });

    /**
     * 常量 页面索引
     * @type {number}
     */
    var FIRST_PAGE = 0; //首页
    var SECOND_PAGE = 1; //故事一
    var THIRD_PAGE = 2; //故事二
    var FOURTH_PAGE = 3; //故事三
    var FIFTH_PAGE = 4; //故事四
    var SIXTH_PAGE = 5;  //按钮页
    var SEVENTH_PAGE = 6; //站队页
    var EIGHTH_PAGE = 7; //报名页
    var NINTH_PAGE = 8; //直播页
    //当前页面索引
    var current_page_index = 0;
    /**
     * 完成加载
     */
    Pace.once('hide', function(e){
        /**
         * stop loading
         */
            setTimeout(function(){
                clearInterval(loadInterval);
                loadInterval = -1;
                $('.loading .superman').removeClass('vibrateAni').addClass('supermanFlyOut');
                //$('.cloud').removeClass('cloudAni');
                //var $cloud = $('.cloud');
                //TweenLite.to($cloud,1,{ opacity :0 });
                $('.loading').addClass('animated delay_1s fadeOut').one(animationEnd,function(){
                    $(this).hide();
                    firstPageAni();
                });
            },1000);

        $('#my-player').width($('.live').width()).height($('.live').height());

        player = videojs('my-player',{
            controls: true,
            autoplay: false,
            loop:true,
            preload: 'auto'
        });

        player.on('error',function(){
            alert('直播信号中断，请稍后再试');
        });

        player.on('ended',function(){
            alert('直播已结束');
        });

        changeVideo(store.active_state);

        clickEventBind();

        submitEventBind();

        // connect websocket server
        socket = io.connect(websocket_url);

        //listen the channel broadcast
        socket.on('live_channel_'+flag , function(data){
            console.log(data);
            data = data.props;
            store.lives = !data.lives ? store.lives :data.lives;
            store.audiences = !data.audiences ?store.audiences : data.audiences;

            store.tricyclic_turns = !data.tricyclic_turns ? store.tricyclic_turns : data.tricyclic_turns;
            store.tetracyclic_turns = !data.tetracyclic_turns ? store.tetracyclic_turns : data.tetracyclic_turns;
            store.pentacyclic_turns = !data.pentacyclic_turns ? store.pentacyclic_turns : data.pentacyclic_turns;

            store.used_gasoline = !data.used_gasoline ? store.used_gasoline : data.used_gasoline;
            store.used_gasonline_tera  = !data.used_gasonline_tera ? store.used_gasonline_tera : data.used_gasonline_tera;
            store.used_gasonline_penta = !data.used_gasonline_penta ? store.used_gasonline_penta : data.used_gasonline_penta;

            $('#lives').html(store.lives);
            $('#audiences').html(store.audiences);

            $('#tricyclic_turns').html(store.tricyclic_turns + '圈');
            $('#tetracyclic_turns').html(store.tetracyclic_turns + '圈');
            $('#pentacyclic_turns').html(store.pentacyclic_turns + '圈');

            $('#used_gasoline').html(store.used_gasoline + 'L');
            $('#used_gasonline_tera').html(store.used_gasonline_tera + 'L');
            $('#used_gasonline_penta').html(store.used_gasonline_penta + 'L');

            store.active_state = parseInt(data.active_state);
            changeVideo(store.active_state);
        });

        /**
         * 初始化主swiper
         * @type {Swiper|Window.Swiper}
         */
        mainSwiper = new Swiper('#mainPage',{
            initialSlide:FIRST_PAGE,
            direction : 'vertical',
            loop: false,
            onInit: function(swiper){
                if(swiper.activeIndex == FIRST_PAGE){
                    swiper.lockSwipeToPrev();
                    swiper.lockSwipeToNext();
                }
            },
            onSlideChangeStart: handlerChangeStart
        });
    });

    var AUTO_PLAY_SPEED = 5000;
    var AUTO_PLAY_SPEED_KOL = 5000;
    var kolSwiper = null;


    function handlerChangeStart(swiper){

        current_page_index = swiper.activeIndex;
        swiper.lockSwipeToPrev();
        swiper.lockSwipeToNext();

        switch (swiper.activeIndex){
            case FIRST_PAGE:
                firstPageAni();
                break;
            case SECOND_PAGE:
                secondPageAni();
                //swiper.unlockSwipeToPrev();
                break;
            case THIRD_PAGE:
                thirdPageAni();
                //swiper.unlockSwipeToPrev();
                break;
            case FOURTH_PAGE:
                fourthPageAni();
                //swiper.unlockSwipeToPrev();
                break;
            case SIXTH_PAGE:
                swiper.unlockSwipeToPrev();
                break;
            case SEVENTH_PAGE:
                if(!commentSwiper)
                    commentSwiper = new Swiper('#commentSwiper',{
                        direction:'horizontal',
                        autoplay :AUTO_PLAY_SPEED,
                        loop:true,
                    });
                if(!kolSwiper)
                    kolSwiper = new Swiper('#kolSwiper',{
                        direction:'horizontal',
                        autoplay :AUTO_PLAY_SPEED_KOL,
                        loop:true,
                    });
                /**
                 * 动画
                 */
                $('#leftHand').addClass('animated bounceInLeft').one(animationEnd,function(){
                    $(this).removeClass('animated bounceInLeft');});
                $('#rightHand').addClass('animated bounceInRight').one(animationEnd,function(){
                    $(this).removeClass('animated bounceInRight');});
                $('#vs').addClass('animated delay_h1s zoomIn').one(animationEnd,function(){
                    $(this).removeClass('animated zoomIn');});
                //$('.seventh-page .banner').addClass('animated delay_1-5s bounceInDown').one(animationEnd,function(){
                //    $(this).removeClass('animated bounceInDown');
                //});
                //swiper.lockSwipeToPrev();
                //swiper.lockSwipeToNext();
                break;
            case EIGHTH_PAGE:
                $('.wantYou').addClass('animated zoomIn_quick').one(animationEnd,function(){
                    $(this).removeClass('animated zoomIn_quick');
                    startPulse();
                });
                $('.eighth-page .banner').addClass('animated delay_h1s fadeIn').one(animationEnd,function(){
                    $(this).removeClass('animated delay_h1s fadeIn');});
                //swiper.lockSwipeToPrev();
                //swiper.lockSwipeToNext();
                break;
            case NINTH_PAGE:
                //swiper.lockSwipeToPrev();
                //swiper.lockSwipeToNext();
                break;
            default:
                swiper.unlockSwipeToNext();
                swiper.unlockSwipeToPrev();
                break;
        }
    }
    /**
     *点击事件绑定
     */
    function clickEventBind (){
        /**
         * 跳转站队页面
         */
        $('#btn-select').click(function(e){
            mainSwiper.unlockSwipeToNext();
            mainSwiper.slideTo(SEVENTH_PAGE);
        });
        /**
         * 跳转报名页面
         */
        $('#btn-join').click(function(e){
            mainSwiper.unlockSwipeToNext();
            mainSwiper.slideTo(EIGHTH_PAGE);
        });
        /**
         * 跳转直播页面
         */
        $('#btn-live').click(function(e){
            mainSwiper.unlockSwipeToNext();
            mainSwiper.slideTo(NINTH_PAGE);
        });

        $('.btn-back').click(function(e){
            mainSwiper.unlockSwipeToPrev();
            mainSwiper.slideTo(SIXTH_PAGE);
        });

        $('#btn-support').click(function(e){
            $('.attitude').css('background-image','url("images/img-pop-support.png")');
            $('input[name="state"]').val(1);
            $('.pop-submit').show();
            $('.pop-content').addClass('animated bounceIn');
        });

        $('#btn-nonsupport').click(function(e){
            $('.attitude').css('background-image','url("images/img-pop-nonsupport.png")');
            $('input[name="state"]').val(2);
            $('.pop-submit').show();
            $('.pop-content').addClass('animated bounceIn');
        });

        /**
         * 打开活动规则弹框
         */
        $('.btn-rule').click(function(e){

            if(current_page_index == SEVENTH_PAGE){
                $('#pop-join').hide();
                $('#pop-select').show();
                $('.pop-title').css('width','5.31rem').css('height','1.65rem').css('background-image','url(images/img-rule-w.png)');
                $('.pop-title img').css('top',0);
                $('.pop-title img').css('right','1rem');

            }else if(current_page_index == EIGHTH_PAGE){

                $('#pop-select').hide();
                $('#pop-join').show();
                $('.pop-title').css('width','4.3rem').css('height','1.48rem').css('background-image','url(images/img-rule-w1.png)');
                $('.pop-title img').css('top','-.2rem');
                $('.pop-title img').css('right','.4rem');
            }

            $('.pop-rule').show();
            $('.pop-content').addClass('animated bounceIn');
            if(ruleScroller == null)
                ruleScroller = new IScroll('#wrapper', { mouseWheel: true });
            else
                ruleScroller.refresh();
        });

        //关闭所以弹窗
        $('.close').click(function(e){
            stopPulse();
            $('.pop').hide();
        });
    }

    /**
     * 绑定提交事件
     */
    function submitEventBind(){
        /**
         * 提交网友留言
         */
        $('#submit-support').hammer().bind('tap',function(e){

            var params = $('#selectForm').serialize();
            var comment = $('textarea[name="comment"]').val();
            var name = $('input[name="name"]').val();
            var mobile = $('input[name="mobile"]').val();

            if(validate.isEmpty(comment)) {
                alert('留言不能为空');
                return false;
            }
            if(comment.length > 30){
                alert('留言不能超过30个字');
                return false;
            }
            if(validate.isEmpty(name)){
                alert('姓名不能为空');
                return false;
            }
            if(name.length > 6){
                alert('昵称不能超过6个字');
                return false;
            }
            if(validate.isEmpty(mobile)){
                alert('手机号不能为空');
                return false;
            }
            if(!validate.isMobile(mobile)){
                alert('请输入手机号');
                return false;
            }
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeComment?' + params + '&flag='+flag,
                success:function(json){
                    var data = json.data;
                    if(data) {
                        window.mobile = $('input[name="mobile"]').val();
                        store.support = data.support;
                        store.nonsupport = data.nonsupport;
                        $('#support-num').html(store.support);
                        $('#nonsupport-num').html(store.nonsupport);
                        alert('提交成功');
                    }
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        alert('您已参加活动，请继续浏览后续内容!');
                }
            });
        });

        /**
         * 提交报名信息
         */
        $('#submit-join').hammer().bind('tap',function(e){
            var params = $('#joinForm').serialize();
            var name = $('#joinForm input[name="name"]').val();
            var mobile = $('#joinForm input[name="mobile"]').val();

            if(validate.isEmpty(name)){
                alert('姓名不能为空');
                return false;
            }

            if(validate.isEmpty(mobile)){
                alert('手机号不能为空');
                return false;
            }
            if(!validate.isMobile(mobile)){
                alert('请输入手机号');
                return false;
            }
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeProposer?' + params + '&flag='+flag,
                success:function(json){
                    window.mobile = $('#joinForm input[name="mobile"]').val();
                    alert('报名成功！');
                    $('#p8-car').addClass('animated fadeOutRight').one(animationEnd,function(){
                        $(this).removeClass('animated fadeOutRight');
                    });
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        alert('您已参加活动，请继续浏览后续内容!');
                }
            });
        });
    }

    function firstPageAni(){
        $('.first-page .superman').addClass('supermanFlyIn').one(animationEnd,function(){
            $(this).removeClass('supermanFlyIn');
        });
        $('#aside-1').addClass('animated delay_2s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_2s bounceIn');
        });
        $('#aside-2').addClass('animated delay_1-5s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1-5s bounceIn');
        });
        $('#aside-3').addClass('animated delay_1s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1s bounceIn');
        });
        $('#aside-4').addClass('animated delay_h1s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_h1s bounceIn');
        });
        $('.older').addClass('animated delay_2-5s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_2-5s bounceIn');
        });
        $('#fp-car').addClass('animated delay_3s carFadeOutRight').one(animationEnd,function(){
            $(this).removeClass('animated delay_3s carFadeOutRight');
            mainSwiper.unlockSwipeToNext();
        });
    }

    function secondPageAni(){
        $('#olderDriver').addClass('animated slideInLeft').one(animationEnd,function(){
            $(this).removeClass('animated slideInLeft');});
        $('#olderDriverAside').addClass('animated delay_h1s fadeIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_h1s fadeIn');});
        $('.p2-hi').addClass('animated delay_1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1s bounceIn');});
        $('#youngAside').addClass('animated delay_1-5s fadeIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1-5s fadeIn');});
        $('.p2-bottom').addClass('animated delay_2s fadeIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_2s fadeIn');});
        $('.p2-bottom .aside').addClass('animated delay_2-5s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_2-5s bounceIn');
            mainSwiper.unlockSwipeToPrev();
            mainSwiper.unlockSwipeToNext();
        });

    }

    function thirdPageAni(){
        $('.third-page  .request').addClass('animated bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated bounceIn');});
        $('.third-page .book').addClass('animated delay_h1s bookRotateInLeft').one(animationEnd,function(){
            $(this).removeClass('animated delay_h1s bookRotateInLeft');});
        $('.third-page .book .superman').addClass('animated delay_1-5s zoomIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1-5s zoomIn');});
        $('.explain').addClass('animated delay_1s fadeIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1s fadeIn');
        });
        $('.explain .car').addClass('animated delay_2s carDisappearRight').one(animationEnd,function(){
            $(this).removeClass('animated delay_2s carDisappearRight');
            mainSwiper.unlockSwipeToPrev();
            mainSwiper.unlockSwipeToNext();
        });
    }

    function fourthPageAni(){
        var tl = new TimelineLite();
        var $lg = $('#leftGif');
        var $rg = $('#rightGif');
        tl.from($lg,.5,{x:-300,opacity:0}).from($rg,.5,{x:300,opacity:0});
        $('.left-dialogue').addClass('animated delay_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_h1s bounceIn');
        });
        $('.right-dialogue').addClass('animated delay_1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1s bounceIn');
        });

        $('.fourth-page .banner').addClass('animated delay_1-5s fadeIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1-5s fadeIn');
            mainSwiper.unlockSwipeToPrev();
            mainSwiper.unlockSwipeToNext();
        });

        //$('#p4-car').addClass('animated delay_2s fadeInLeft').one(animationEnd,function(){
        //    $(this).removeClass('animated delay_2s fadeInLeft');
        //});
        //$('.fourth-page .superman').addClass('animated delay_2s fadeIn').one(animationEnd,function(){
        //    $(this).removeClass('animated delay_2s fadeIn');
        //});

    }

    function changeVideo(state){

        if(state == 0){
            $('#unlive').show();
            $('#my-player').hide();
        }else if(state == 1) {
            $('#unlive').hide();
            $('#my-player').show();
            player.src('http://pili-live-hls.yunmfang.com/ford/mondeo.m3u8');
        }
    }

    /**
     * 监听动画事件
     */
    function listenAniEvent(){

    }


    //==========================================================
    //====== 脉冲改变属性 ======//
    //==========================================================
    var animationPulse,lockPulse=false;
    function stopPulse(){
        lockPulse = true;
        $('.wantYou').data('angle',0);
        clearTimeout(animationPulse);
    }
    function startPulse() {
        lockPulse = false;
        doPulse();
    }
    function doPulse(){
        if(lockPulse) return;
        pulseScaleElem($('.wantYou'),0.1);
        animationPulse = setTimeout(function(){ doPulse(); }, 60);
    }

    var DEG_TO_RAD = Math.PI/180;
    function pulseScaleElem($elem,scale){
        var angle = !$elem.data('angle') ? 0: $elem.data('angle');
        var s = 1+scale*Math.abs(Math.sin(angle*DEG_TO_RAD));
        $elem.css('transform','scale('+s+','+s+')').data('angle',(angle+6));
    }

    var BOX_SUPPORT = 1;
    var BOX_NONSUPPORT = 2;
    var BOX_SHARE = 3;
    var BOX_RULE = 4;
    /**
     * 打开弹出框
     * @param type 弹出框类型
     * type: 1 支持弹出框
     * type: 2 不支持弹出框
     * type: 3 分享弹出框
     * type: 4 活动规则弹出框
     */
    function openPopUpBox(type){
        type = parseInt(type);
        $('.pop-box').show();
        if(type == BOX_SUPPORT){
            $('#submit-pop').show();
            $('#submit-title').removeClass('fail');
            $('#submit-title').addClass('success');
            $('#submit-title').html('挑战成功');
            $('input[name="state"]').val(1);
        }else if(type == BOX_NONSUPPORT){
            $('#submit-pop').show();
            $('#submit-title').removeClass('success');
            $('#submit-title').addClass('fail');
            $('#submit-title').html('挑战失败');
            $('input[name="state"]').val(2);
        }else if(type == BOX_SHARE){
            $('#share-pop').show();
        }else if(type == BOX_RULE){
            $('#rule-pop').show();
            if(!ruleScroller) ruleScroller = new IScroll('#rule-content',{ scrollbars: 'custom'
                ,resizeScrollbars:false });
        }
        $('.pop-content').addClass('animated bounceIn');
    }

    /**
     * 关闭弹出框
     */
    function closePopUpBox(){
        $('.pop-box').hide();
        $('.submit-pop').hide();
        $('.rule-pop').hide();
        $('.share-pop').hide();
    }

    function fillColor(p){
        var total = 14;
        var support = 100 -p;
        /**
         * 计算并填充支持进度条
         */
        var s_step = Math.round((14 * support) / 100);
        var cur_s_doms = $('.support').find('.active');
        var s_dom_size = cur_s_doms.length;
        if(s_step  > s_dom_size){
            var doms = $('.support').find('div');
            for(var i = (s_dom_size -1); i < s_step; i++){
                $(doms[i]).addClass('active');
            }
        }else if(s_step < s_dom_size){
            var w = s_dom_size - s_step;
            while (w > 0){
                $(cur_s_doms[--s_dom_size]).removeClass('active');
                w--;
            }
        }
        /**
         * 计算并填充不支持进度条
         */
        var un_step = Math.round((14 * p) / 100);
        var all_un_doms = $('.unsupport').find('div');
        var cur_un_doms = $('.unsupport').find('.un-active');
        var un_dom_size = cur_un_doms.length;

        if(un_step > un_dom_size){
            var w = un_step - un_dom_size;
            var start = total - un_dom_size;
            while (w > 0){
                $(all_un_doms[--start]).addClass('un-active');
                w--;
            }
        }if(un_step < un_dom_size){
            var start = 0;
            while (un_step < un_dom_size){
                $(cur_un_doms[start++]).removeClass('un-active');
                un_step++;
            }
        }
    }

    function theCircle(p){
        var scale = (225 - 45) / 50;
        p = parseInt(p);
        /**
         * 转动右侧
         */
        var circleR = p < 50 ? ((p * scale) + 45) : 225;
        $('.rightcircle').css('transform','rotate(' + circleR + 'deg)');
        /**
         * 转动左侧
         */
        var circleL = p < 50 ? 45 : (scale * (p - 50) + 45);
        $('.leftcircle').css('transform','rotate('+circleL+'deg)');
    }

    function showError(str){
        $('#error').html(str);
    }

    function bindEvent(){
        /*******************************************************
         *            监听动画
         *******************************************************/
        /**
         * 首页动画
         */
        $('.line-right').on(animationEnd,function(e){
            $(this).removeClass('animated fadeInBiasRightDown');
        });
        $('.line-left').on(animationEnd,function(e){
            $(this).removeClass('animated fadeInBiasLeftUp');
        });
        $('.first-car').on(animationEnd,function(e){
            $(this).removeClass('animated fadeInBiasLeftCar');
        });
        $('.circular').on(animationEnd,function(e){
            $(this).removeClass('circleAn');
        });
        $('#circleCar').on(animationEnd,function(e){
            $(this).removeClass('animated rotateAntiIn');
        });
        $('#slogan').on(animationEnd,function(e){
            $(this).removeClass('titAn');
            $('#dotA').addClass('dotA');
            $('#dotB').addClass('dotB');
            $('#circleCar').addClass('normalRotate');
        });
        $('#location').on(animationEnd,function(e){
            $(this).removeClass('animated fadeIn');
        });
        $('.btn-live').on(animationEnd,function(e){
            $(this).removeClass('animated fadeInBiasRightDown');
        });
        $('.btn-more').on(animationEnd,function(e){
            $(this).removeClass('animated fadeInBiasRightDown');
        });
        /**
         * end 首页动画
         */

        /**
         * 监听表单元素focus事件
         */
        $($('#commentForm').find('input')).focus(function(e){
            $('#error').empty();
        });
        /**
         * 提交网友留言
         */
        $('#submitComment').hammer().bind('tap',function(e){
            var params = $('#commentForm').serialize();
            var comment = $('textarea[name="comment"]').val();
            var name = $('input[name="name"]').val();
            var mobile = $('input[name="mobile"]').val();

            if(validate.isEmpty(comment)) {
                showError('留言不能为空');
                return false;
            }
            if(comment.length > 30){
                showError('留言不能超过30个字');
                return false;
            }
            if(validate.isEmpty(name)){
                showError('姓名不能为空');
                return false;
            }
            if(comment.length > 6){
                showError('昵称不能超过6个字');
                return false;
            }
            if(validate.isEmpty(mobile)){
                showError('手机号不能为空');
                return false;
            }
            if(!validate.isMobile(mobile)){
                showError('请输入手机号');
                return false;
            }
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeComment?' + params + '&flag='+flag,
                success:function(json){
                    var data = json.data;
                    if(data) {
                        window.mobile = $('input[name="mobile"]').val();
                        store.support = data.support;
                        store.nonsupport = data.nonsupport;
                        var nonsupport =Math.round((store.nonsupport / (store.support + store.nonsupport))*100);
                        $('.support-votes').html(store.support + '票');
                        $('.nonsupport-votes').html(store.nonsupport + '票');
                        theCircle(nonsupport);
                        fillColor(nonsupport);
                        $('#commentForm')[0].reset();
                        $('#submit-pop').hide();
                        $('#share-pop').show();
                    }
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        showError('您已参加活动，请继续浏览后续内容!');
                }
            });
        });

        /**
         * 提交报名信息
         */
        $('#submitApply').hammer().bind('tap',function(e){
            var params = $('#applyForm').serialize();
            var name = $('#applyForm input[name="name"]').val();
            var mobile = $('#applyForm input[name="mobile"]').val();
            var sex = $('#applyForm select[name="sex"]').val();

            if(validate.isEmpty(name)){
                alert('姓名不能为空');
                return false;
            }
            if(validate.isEmpty(sex)) {
                alert('性别不能为空');
                return false;
            }
            if(validate.isEmpty(mobile)){
                alert('手机号不能为空');
                return false;
            }
            if(!validate.isMobile(mobile)){
                alert('请输入手机号');
                return false;
            }
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeProposer?' + params + '&flag='+flag,
                success:function(json){
                    window.mobile = $('#applyForm input[name="mobile"]').val();
                    openPopUpBox(BOX_SHARE);
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        alert('您已参加活动，请继续浏览后续内容!');
                }
            });
        });
    }
})($)