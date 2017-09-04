/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-08-31 16:58:01
 * @version $Id$
 */

var player;
// var STANDARD_WIDTH = 750;
// var STANDARD_HEIGHT = 1206;
// var STANDARD_HEIGHT = 1206;
// var scale = STANDARD_WIDTH/STANDARD_HEIGHT;
var host = 'http://api.bjczxda.com/api/';
var http = new Http(host);
var validate = new InputUtil();
var currentVideo = 0; // 0第一段视频 1 第二段视频
var srcs = ['http://vedio.yunmfang.com/video_1.mp4','media/video_2.mp4'];

//经销商数据
var provinces,cities,dealers;

/*
 *开始加载
 */
Pace.once('start',function(){

    multipleDisplayAdapter();

    //loading 百分比显示
    loadInterval = setInterval(function(){
        var load = $('.pace-progress').attr('data-progress-text');
        $('.percent').html(load);
    },100);

    //初始化经销商列表数据
    //并初始化省份下拉列表
    $.getJSON('data.json',function(json){
        provinces = json.provinces;
        cities = json.cities;
        dealers = json.dealers;

        $('select[name="province"]').empty();
        var option = '<option value="省">省</option>';
        for(var i = 0; i < provinces.length; i++){
            var p = provinces[i];
            option += '<option value="'+ p.province +'">'+ p.province +'</option>';
        }
        $('select[name="province"]').html(option);
    });

});


/**
 * 完成加载
 */
Pace.once('hide', function(e){

    initPage();
    
    if(isVideoCanAutoPlay()){//可以自动播放
        $('.percent').css('visibility','hidden');
        setTimeout(function(){
            $('#loading').hide();
            if(/Android [4-6]/.test(navigator.appVersion))
                $('.fixed').css('display','block');
            else
              $('#video_1').attr('poster','images/bg_video1.png');
            "object" == typeof WeixinJSBridge ? WeixinJSBridge.invoke("WeixinJSBridgeReady", {}, function(i) {
                player.play();
            }) : document.addEventListener("WeixinJSBridgeReady", function(i) {
                player.play();
            }, false);


        },1000);
    }else{//不能自动播放时
        $('.percent').css('visibility','hidden');
        $('.off_clock').css('display','block');
        $('.off_clock').click(function(){
            $('#loading').hide();
            $('.fixed').css('display','block');
            player.play();

        });
    }
});

var chatsScroll;

function initPage(){

    //第一个视频
    player = document.getElementById('video_1');
    player.addEventListener('ended',function(){
        if(currentVideo == 0 ){
            $('#shadow').show();
        }else if(currentVideo == 1){
            $('.btn_jump').hide();
            showChats();
            setTimeout(function(){
                $(this).remove();
            },500);
        }
    });
    player.addEventListener('timeupdate',function(){
        if(this.currentTime > 0.1 && !this.ended && !$('.fixed').is(':hidden')){
            $('.fixed').hide();
            if(currentVideo == 0){
                $('.fixed').attr('src','images/bg_video2.png');
            }
        }
    });

    //解锁音效
    iphone_unlock = document.getElementById('iphone_unlock');

    //解决在android手机下软键盘遮住输入框的问题
    if(/Android [4-6]/.test(navigator.appVersion)) {
        window.addEventListener("resize", function() {
            if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
                window.setTimeout(function() {
                    document.activeElement.scrollIntoViewIfNeeded();
                },0);
            }
        })
    }

    bindEvents();
}

/**
 * [bindEvents 绑定点击或滑动事件]
 * @return void
 */
function bindEvents(){

    $('.btn_jump').click(function(){
        $(this).hide();
        if(!$('#video_1').is(':hidden')){
            player.pause();
            $('#video_1').hide();
        }
        $('.wrapper').hide();
        $('.info').show();
        infoPageAnimate();
    });

    $('#shadow').on('touchstart',function(){
        if(!$('#video_1').is(':hidden')){
            iphone_unlock.play();
            $(this).hide();
            currentVideo = 1;
            player.src =srcs[currentVideo];
            if(/Android [4-6]/.test(navigator.appVersion))
                $('.fixed').css('display','block');
            else
                $('#video_1').attr('poster','images/bg_video2.png');
            player.play();
        }
    });

    $('.btn_toInput').on('tap',function(){
        if(!$('#video_3').is(':hidden')){
            $(this).hide();
            $('.wrapper').hide();
            $('.info').show();
            infoPageAnimate();
        }
    });

    $('#player').click(function(){
        player.play();
        $('#loading').hide();
    });

    //省、市、经销商三级联动
    $('select[name="province"]').on('change',function(){
        var selected = $(this).val();
        $('select[name="city"]').empty();
        $('select[name="city"]').html('<option value="市">市</option>');
        $('select[name="dealer"]').empty();
        $('select[name="dealer"]').html('<option value="经销商">经销商</option>');
        if(selected !='省'){
            for(var i = 0; i < cities.length; i++){
                var city = cities[i];
                if(city.province == $(this).val())
                    $('select[name="city"]').append('<option value="'+ city.city +'">'+ city.city +'</option>');
            }
        }
    });
    //市、经销商二级联动
    $('select[name="city"]').on('change',function(){
        var selected = $(this).val();

        $('select[name="dealer"]').empty();
        $('select[name="dealer"]').append('<option value="经销商">经销商</option>');

        if(selected !='市'){
            for(var i = 0; i < dealers.length; i++){
                var dealer = dealers[i];
                if(dealer.city == $(this).val())
                    $('select[name="dealer"]').append('<option value="'+ dealer.dealer +'">'+ dealer.dealer +'</option>');
            }
        }
    });

    $('#btn_checked').click(function(){
        if(isChecked())
            $($(this).find('img:first')).attr('src','images/icon_un_checked.png');
        else
            $($(this).find('img:first')).attr('src','images/icon_checked.png');
    });

    $('#btn_submit').click(function(){

        var params = $('form:first').serialize();
        var name = $('input[name="name"]').val();
        var mobile = $('input[name="mobile"]').val();
        var province = $('select[name="province"]').val();
        var city = $('select[name="city"]').val();
        var dealer = $('select[name="dealer"]').val();
        // var allow = isChecked()? 1 : 0;
        var allow = 1;

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
        if(province == '省'){
            alert('请选择省');
            return false;
        }
        if(city == '市'){
            alert('请选择市');
            return false;
        }
        if(dealer == '经销商'){
            alert('请选择经销商');
            return false;
        }

        http.ajaxRequest({
            type:'POST',
            uri:'h5/insertLFX2?' + params + '&allow='+allow,
            success:function(json){
                var data = json.data;
                if(json.success){
                    //var winner = (parseInt(data.client_sex) == NaN || parseInt(data.client_sex) == 0)? false : true;
                    //alert(winner ? '留资成功，你获得100元京东电子购物卡':'留资成功');
                    alert( '报名试驾成功');
                }else{
                    alert('重复留资!');
                }
            },
            error:function(e){
                if(e.responseJSON){
                    alert(e.responseJSON.message);
                }else
                    alert('您已参加活动');
            }
        });
    });
}


//判断是否允许经销商联系
//true 允许， false 不允许
function isChecked(){
    return $($('#btn_checked').find('img:first')).attr('src').indexOf('un') == -1;
}

/**
 * [multipleDisplayAdapter description]
 * 基于iphone 6屏幕分辨率375 * 603 进行全屏适配算法
 * @return
 */
function _multipleDisplayAdapter(){
    var bh = document.body.clientHeight;
    var bw = document.body.clientWidth;
    // var vs = document.getElementsByTagName('video');
    var rz = document.getElementsByClassName('resize');
    for(var i = 0; i < rz.length; i++){
        var v = rz[i];
        var h = (1206 * bw ) / 750;
        if(!/Android [4-6]/.test(navigator.appVersion)){
            var y = (bh - h) < 0 ? (bh - h) : 0;
            v.style.height = h + 'px';
            v.style.transform = 'translate(0,' + y + 'px)';
        }
    }
}

/**
 * [multipleDisplayAdapter description]
 * 基于iphone 6屏幕分辨率375 * 603 进行全屏适配算法
 * @return
 */
function multipleDisplayAdapter(){

    var bh = document.body.clientHeight;
    var bw = document.body.clientWidth;
    var rs = document.getElementsByClassName('resize');
    var w = 750,h = 1206;
    //真实高,宽,临时宽，高
    var rh,rw,tw,th;
    var x,y;
    tw = Math.floor((bh * 750) / 1206);
    th = Math.floor((bw * 1206) / 750);

    if(bh <= th){
        rh = th;
        rw = bw;
    } else {
        rh = bh;
        rw = tw;
    }
    x = -((rw - bw) / 2);
    y = -(rh - bh);
    // console.log(x + ' ' + y);
    //alert('bw :' + bw +' bh :' + bh + ' rw:' + rw + ' rh:' + rh);
    for(var i =0; i < rs.length; i++){
        var v = rs[i];
        if(/Android [4-6]/.test(navigator.appVersion)){
            v.style.width = bw + 'px';
            v.style.height = bh + 'px';
        }else {
            v.style.width = rw + 'px';
            v.style.height = rh + 'px';
            v.style.transform = 'translate('+ x + 'px,' + y + 'px)';
        }
    }
    if(/Android [4-6]/.test(navigator.appVersion)){
        var video = document.getElementById('video_1');
        video.style.width = bw + 'px';
        video.style.height = bh + 'px';
    }
}

function showChats(){
    var bw = document.body.clientWidth;
    var bh = document.body.clientHeight;
    var ch = (bw * 1206) / 750;
    //设置聊天记录父窗口的高和位移
    // $('#video_3').height(ch);
    // var y = bh - (1206 * bw ) / 750;
    // $('#video_3').css('transform','translate(0,' + y +'px)');

    $('#chats_cont_wrapper').height((ch * 1115 ) / 1206 );
    $('#chat_input_cont').height((ch * 91 ) / 1206 );
    var H = 5215 * ( $('#parent').width() / 750 );
    var h = $('#chats_cont_wrapper').height();
    var startY = H - h;
    console.log(startY);
    $('.btn_toInput').height($('#chats_cont_wrapper').height()* (337/1115) );
    var top = H *  (5215 - 337) / 5215  ;
    $('.btn_toInput').css('top',top + 'px');
    $('#video_3').show();
    chatsScroll = new IScroll('#chats_cont_wrapper',{ bounce:false , tap:true, startY: -startY });
}

//留资页动画
function infoPageAnimate(){
    $('.car').addClass('carAnimate');
    $('.logo_II').addClass('fadeInAnimate delay_5h');
    $('#gift_w').addClass('fadeInAnimate delay_1_5');
}

var start = 0;
//礼品盒摇动动画
function shakeAnimate(timestamp){
    if(start==0 || Math.floor((timestamp - start)/1000) == 2) {
        console.log(start);
        start = timestamp;
        $('#gift').toggleClass('giftShake');
    }
    requestAnimationFrame(shakeAnimate);
}
















function c() {
    var t = navigator.userAgent,
        i = !! t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return i
}
function l() {
    var t = navigator.userAgent;
    return "MicroMessenger" == t.match(/MicroMessenger/i)
}
function f() {
    var t = navigator.userAgent;
    return "QQ/" == t.match(/QQ\//i)
}
function p() {
    var t = window.navigator.userAgent.toLowerCase(),
        i = "";
    if (t.indexOf("iphone") >= 0) return i = t.indexOf("os 10") >= 0 ? "ios10s" : t.indexOf("os 9") >= 0 ? "ios9s" : t.indexOf("os 8") >= 0 ? "ios8" : "iosOther"
}

function isVideoCanAutoPlay() {
    var t = !1;
    return c() && (l() || f()) && (t = "ios8" != p() || "iosOther" != p()), t
}