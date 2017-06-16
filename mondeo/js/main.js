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
        active_state:0, // 活动状态 0：活动前期 1：活动中期（直播） 2：活动后期（直播结束）
        current_time: 0
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


    var liveSchedule = null;
    var audienceSchedule = null;

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

    var currentIndex = -1;

    var scheduleInterval = null;

    var loopInterval = 0;

    Pace.once('start',function(){
        loadInterval = setInterval(function(){
            var load = $('.pace-progress').attr('data-progress-text');
            $('.percent').html(load);
        },100);

        $.getJSON("datas/live.json",function(data){
            liveSchedule = data.lives;
            //audienceSchedule = data.audiences;
           for(var i = 0; i < liveSchedule.length; i++){
               var temp = liveSchedule[i];
               temp.time = dateStringToMillisecond(temp.time);
           }
            //for(var i = 0; i < audienceSchedule.length; i++){
            //    var temp = audienceSchedule[i];
            //    temp.time = dateStringToMillisecond('2017-06-12 '+ temp.time);
            //}
        });

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

                //$('#lives').html(store.lives);
                //$('#audiences').html(store.audiences);

                $('#tricyclic_turns').html(store.tricyclic_turns);
                $('#tetracyclic_turns').html(store.tetracyclic_turns);
                $('#pentacyclic_turns').html(store.pentacyclic_turns);

                $('#used_gasoline').html(store.used_gasoline);
                $('#used_gasonline_tera').html(store.used_gasonline_tera);
                $('#used_gasonline_penta').html(store.used_gasonline_penta);

                $('#support-num').html(store.support);
                $('#nonsupport-num').html(store.nonsupport);
                store.active_state = parseInt(data.active_state);
                //console.log(dateStringToMillisecond(data.current_time));

                var maxCount = parseInt(liveSchedule[liveSchedule.length - 1].count);
                store.lives = parseInt(store.lives);

                if(store.lives != NaN && store.lives > maxCount){
                    $('#lives').html(store.lives);
                }else{
                    store.current_time = dateStringToMillisecond(data.current_time);
                    schedule();
                }
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
                $('.percent').hide();
                //$('.cloud').removeClass('cloudAni');
                //var $cloud = $('.cloud');
                //TweenLite.to($cloud,1,{ opacity :0 });
                $('.loading').addClass('animated delay_1s fadeOut').one(animationEnd,function(){
                    firstPageAni();
                    $(this).hide();
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
            store.lives = parseInt(data.lives)== NaN ? store.lives :data.lives;
            //store.audiences = parseInt(data.audiences)== NaN ?store.audiences : data.audiences;

            store.tricyclic_turns = parseInt(data.tricyclic_turns)== NaN ? store.tricyclic_turns : data.tricyclic_turns;
            store.tetracyclic_turns = parseInt(data.tetracyclic_turns)== NaN ? store.tetracyclic_turns : data.tetracyclic_turns;
            store.pentacyclic_turns = parseInt(data.pentacyclic_turns)== NaN ? store.pentacyclic_turns : data.pentacyclic_turns;

            store.used_gasoline = parseInt(data.used_gasoline)== NaN ? store.used_gasoline : data.used_gasoline;
            store.used_gasonline_tera  = parseInt(data.used_gasonline_tera)== NaN ? store.used_gasonline_tera : data.used_gasonline_tera;
            store.used_gasonline_penta = parseInt(data.used_gasonline_penta)== NaN ? store.used_gasonline_penta : data.used_gasonline_penta;

            //$('#audiences').html(store.audiences);

            $('#tricyclic_turns').html(store.tricyclic_turns);
            $('#tetracyclic_turns').html(store.tetracyclic_turns);
            $('#pentacyclic_turns').html(store.pentacyclic_turns);

            $('#used_gasoline').html(store.used_gasoline);
            $('#used_gasonline_tera').html(store.used_gasonline_tera);
            $('#used_gasonline_penta').html(store.used_gasonline_penta);

            store.active_state = parseInt(data.active_state);

            if(store.active_state == 2){ //直播已结束
                if(scheduleInterval){
                    clearInterval(scheduleInterval);
                    scheduleInterval = null;
                }
                $('#lives').html(store.lives);
            }
            changeVideo(store.active_state);
        });

        /**
         * 初始化主swiper
         * @type {Swiper|Window.Swiper}
         */
        mainSwiper = new Swiper('#mainPage',{
            initialSlide:FIFTH_PAGE,
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
                $('.sixth-page .terminator').addClass('animated bounceIn').one(animationEnd,function(){
                    $(this).removeClass('animated bounceIn');
                });
                $('.sixth-page .superman').addClass('supermanFlyIn delay_h1s').one(animationEnd,function(){
                    $(this).removeClass('supermanFlyIn delay_h1s');
                });
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
            if(current_page_index == SIXTH_PAGE)
                stopPulse();
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
                        $('.pop-submit').hide();
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
        $('#aside-1').addClass('animated delay_2-5s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_2-5s bounceIn');
        });
        $('#aside-2').addClass('animated delay_2s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_2s bounceIn');
        });
        $('#aside-3').addClass('animated delay_1-5s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1-5s bounceIn');
        });
        $('#aside-4').addClass('animated delay_1s duration_h1s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1s bounceIn');
        });
        $('.older').addClass('animated delay_3s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_3s bounceIn');
        });
        $('#fp-car').addClass('animated delay_3-5s carFadeOutRight').one(animationEnd,function(){
            $(this).removeClass('animated delay_3-5s carFadeOutRight');
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
        $('.p2-bottom').addClass('animated delay_1-5s fadeIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_1-5s fadeIn');});
        $('.p2-bottom .aside').addClass('animated delay_2s bounceIn').one(animationEnd,function(){
            $(this).removeClass('animated delay_2s bounceIn');
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
        }else if(state==2){
            $('#unlive').attr('src','images/bg-endLive.jpg');
            $('#unlive').show();
            $('#my-player').hide();
            player.pause();
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

    /******************************************************************************
     * 日期帮助函数
     ******************************************************************************/

    /**
     *
     * @param str YYYY-MM-DD HH:mm:ss
     */
    function dateStringToMillisecond(str){
        str = str.replace(/-/g,"/");
        var date = new Date(str);
        return date.getTime();
    }

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    function schedule(){

        for(var i = 0; i < liveSchedule.length; i++){
            if(liveSchedule[i].time > store.current_time){
                currentIndex = !i ? currentIndex : i;
                loopInterval = liveSchedule[i].time - store.current_time;
                break;
            }
        }

        if(currentIndex < 0) //未开始
            currentIndex = 0;
        else //活动已开始
            $('#lives').html(liveSchedule[currentIndex -1 ].count);

        setTimeout(function(){
            loopInterval = 10 * 60 * 1000;
            $('#lives').html(liveSchedule[currentIndex].count);
            //console.log('当前时间:' + new Date().Format('yyyy-MM-dd hh:mm:ss') + ' 人气数：' + liveSchedule[currentIndex].count);
            currentIndex ++;

            scheduleInterval = setInterval(function(){
                if(currentIndex < liveSchedule.length){
                    $('#lives').html(liveSchedule[currentIndex].count);
                    //console.log('当前时间:' + new Date().Format('yyyy-MM-dd hh:mm:ss') + ' 人气数：' + liveSchedule[currentIndex].count);
                    currentIndex ++;
                }else {
                    $('#lives').html(liveSchedule[currentIndex - 1].count);
                    clearInterval(scheduleInterval);
                    scheduleInterval = null;
                }
            },loopInterval);

        },loopInterval);
    }
})($)