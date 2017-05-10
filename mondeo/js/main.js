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
        used_gasonline_penta:0, // 武汉已使用油量
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
        //loadInterval = setInterval(function(){
        //    var load = $('.pace-progress').attr('data-progress-text');
        //    $('#loading').html(load);
        //},100);

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
                    htmlStr += '<p>&nbsp;'+comment.name+'&nbsp;:</p><p>'+ comment.comment +'</p>';
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
                store.used_gasoline = data.used_gasonline_tera;
                store.used_gasonline_penta = data.used_gasonline_penta;
                store.used_time_tri = data.used_time_tri;
                store.support = data.support;
                store.nonsupport = data.nonsupport;
            }
        }});
    });



    /**
     * 完成加载
     */
    Pace.once('hide', function(e){
        /**
         * stop loading
         */
        //setTimeout(function(){
        //    clearInterval(loadInterval);
        //    loadInterval = -1;
        //    $('.loading').addClass('animated fadeOut').one(animationEnd,function(){
        //        /**
        //         * 隐藏加载图片
        //         */
        //        $('#loadingImg').hide();
        //        $(this).hide();});
        //},1000);


        bindEvent();


        //player = videojs('my-player',{
        //    controls: true,
        //    autoplay: false,
        //
        //    loop:true,
        //    preload: 'auto'
        //});

        //player.src('http://vedio.yunmfang.com/K6015-480p-16-9.mp4');
        //player.on('ended',function(){
        //    alert('play ended!');
        //});



        // connect websocket server
        socket = io.connect(websocket_url);

        //listen the channel broadcast
        socket.on('live_channel_'+flag , function(data){
            console.log(data);
            //$('#code').html(data.props);
        });

        /**
         * 初始化主swiper
         * @type {Swiper|Window.Swiper}
         */
        mainSwiper = new Swiper('#mainSwiper',{
            initialSlide:0,
            direction : 'vertical',
            loop: false,
            onSlideChangeStart: function(swiper){
                if(swiper.activeIndex == 0){
                    /**
                     * 首页动画
                     */
                    $('.circular').addClass('circleAn');
                    $('#circleCar').addClass('animated rotateAntiIn');
                    $('#slogan').addClass('titAn');
                    $('#location').addClass('animated delay_3s fadeIn');
                    $('.line-right').addClass('animated fadeInBiasRightDown');
                    $('.line-left').addClass('animated fadeInBiasLeftUp');
                    $('.first-car').addClass('animated fadeInBiasLeftCar');
                    $('.btn-live').addClass('animated fadeInBiasRightDown');
                    $('.btn-more').addClass('animated fadeInBiasRightDown');
                }else if(swiper.activeIndex == 1){
                    /**
                     * 首页动画
                     */
                    $('#dotA').removeClass('dotA');
                    $('#dotB').removeClass('dotB');
                    $('#circleCar').removeClass('normalRotate');

                    if(commentSwiper == null){
                        commentSwiper = new Swiper('#commentSwiper',{
                            autoplay:3000,
                            loop:true,
                            noSwiping:true
                        });
                    }
                    //setInterval(function(){
                    //    unsupported = Math.round(Math.random()* 100);
                    //    console.log(unsupported);
                    //    theCircle(unsupported);
                    //    fillColor(unsupported);
                    //},2000);
                }
            }
        });
    });

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