<?php
require_once "jssdk/jssdk.php";
$jssdk = new JSSDK("wx91b9ea7e64becfbb", "02cf1693f9f32502170a135989d25088");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>行圆汽车2017新春团拜会</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,shrink-to-fit=no">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <meta content="telephone=no" name="format-detection">
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/styletwo.css"/>
    <script>
        document.addEventListener("WeixinJSBridgeReady", function () {
            audioAutoPlay('musicStar');//给个全局函数
        }, false);
    </script>
</head>
<body>
    <div style="overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;">
        <img src="http://www.qinlinhui.cn/invitation/img/log1.png">
    </div>
<div id="page-box" class="box">
    <!--进度条页面-->
    <div class="page01" id="loadingPage">
        <div class="img-load-now">
            <div class="bird-loading"></div>
            <div class="mask"><span id="img-loading-txt"></span></div>
        </div>
    </div>
    <!--初始页面-->
    <div class="page02">
        <div class="page02-heibai">
            <div class="shangshuzhi-heibai01"></div>
            <div class="chuanghu-heibai01">
                <div class="dachuanqiang">
                    <div class="dachuan-heibai"></div>
                </div>
            </div>
            <div class="shuye-heibai01"></div>
            <div class="table-heibai01"></div>
        </div>
        <div class="page02-new">
            <div class="shangshuzhi">
                <div class="shangshuhua01"></div>
                <div class="shangshuhua02"></div>
                <div class="shangshuhua03"></div>
                <div class="shangshuhua04"></div>
                <div class="shangshuhua05"></div>
                <div class="shangshuhua06"></div>
            </div>
            <div class="wenzi01"></div>
            <div class="wenzi02"></div>
            <div class="chuanghu">
                <div class="taiyang"></div>
                <div class="dachuanqiang">
                    <div class="dachuan"></div>
                </div>
                <div class="chuanghua01"></div>
                <div class="chuanghua02"></div>
                <div class="chuanghua03"></div>
                <div class="chuanghua04"></div>
                <div class="chuanghua05"></div>
                <div class="chuanghuaban01"></div>
                <div class="chuanghuaban02"></div>
                <div class="chuanghuaban03"></div>
            </div>
            <!--<div class="shuye-heibai"></div>-->
            <div class="shuye"></div>
            <!--<div class="table-heibai"></div>-->
            <div class="table">
                <div class="pinghua01"></div>
                <div class="pinghua02"></div>
                <div class="pinghua03"></div>
                <div class="pinghua04"></div>
                <div class="pinghua05"></div>
                <div class="pinghua06"></div>
                <div class="pinghua07"></div>
                <div class="pinghua08"></div>
                <div class="pinghua09"></div>
                <div class="pingya01"></div>
                <div class="pingya02"></div>
                <div class="pingya03"></div>
            </div>
            <div class="slideUp" id="arrowUp"></div>

        </div>
        <div class="bird bird-paused" id="bird" >
            <div class="bird-new" id="birdnew"></div>
        </div>

    </div>
    <!--正文内容页面-->
    <div class="page03">
        <!--<div class="swipe-wrap" id="slip">-->
                <div class="swipe-box" style="background-image:url(img/pic-mail/背景-拷贝.png) ; width: 100%; height: 100%; background-size: 100% 100%;display:block;position: absolute;overflow: hidden">
                    <!--正文内容页面-->
                    <!--<div style="">-->
                        <div class="mailer move1">
                            <img src="img/pic-mail/信封上部.png" style="width: 9.68rem; height: 1.92rem; position: absolute; left: 0.16rem; top:0; z-index: 99;">
                            <img src="img/pic-mail/邀请函文字.png" class="mailtext" style="width: 2.3866666667rem; height:0.5066666667rem; z-index: 99; position: absolute; left:3.6933333333rem; top:0.9333333333rem; "/>
                            <img src="img/pic-mail/信封底.png" id="mailbuttom" style="width: 9.68rem; height: 1.2266666667rem; position: absolute; left: 0.16rem; top: 1.92rem; z-index: 2; opacity: 0;">
                            <img src="img/pic-mail/慢开.gif"  id="openletter"/>
                            <img src="img/pic-mail/信封投影.png" style="width: 10rem; height: 1.2666666667rem; position: absolute; left: 0.01rem; top: 1.62rem; z-index:100;"/>
                        </div>

                        <div class="birdflygif" >
                            <img src="img/pic-mail/小鸟-仰头飞.gif" class="movebird  " id="movebird"/>
                        </div>
                        <div class="grassbird">
                            <img src="img/pic-mail/glassbird02.gif"  id="bird-grass" style="width: 1.68rem; height: 1.38rem; position: absolute; left:6.24rem ; top: 7.5rem; opacity: 0; z-index: 150;"/>
                        </div>
                        <div class="logo">
                            <img src="img/pic-mail/logo标准鸟.png" class="" id="birdlogo" style="width: 1.6rem; height: 1.57rem; position: absolute; left:6.34rem ; top: 7.6rem; z-index: 150; opacity: 0;"/>
                        </div>
                        <div class="time move2" >
                            <img src="img/pic-mail/文字.png" class="letter " id="moveletter">
                        </div>
                        <div class="sugermove">
                            <img src="img/pic-mail/棒棒糖.png" class="sugar " id="movesuger"/>
                        </div>

                        <div class="mapmove" style="width: 100%; height: 100%;">
                            <img src="img/pic-mail/Shape-4.png" class="" id="move2-mapbutton" />
                        </div>
                        <div class="mapmove2">
                            <img src="img/pic-mail/地图阴影.png" class="" id="move2-mapbutton2"/>
                        </div>

                    <!--</div>-->
                </div>
                <!--第三页-->
                <div class="page03-map"  >
                    <div class="pagecontent" style="background-image: url(img/pic-mail/北京市海淀区知春路106号-中关村皇冠假日酒店-三层皇冠宴会厅.png);background-size:100% 100% ; width: 7.9733333333rem; height: 11.586666667rem; position: absolute; top: 2.0133333333rem; left: 1rem;">
                        <img src="img/pic-mail/fuzi.png" class="futougif">
                        <img src="img/pic-mail/fuzitouying.png" class="futouying"/>
                    </div>
                    <div class="page03-futou" style="background-image: url(img/pic-mail/矩形-15-拷贝.png); background-size: 100% 100%; width: 0.68rem; height: 0.68rem; position: absolute; left: 4.6666666667rem; top: 14.2226666667rem; display: block;"></div>
                </div>
        <!--</div>-->
    </div>
    <!--地图页面-->
    <audio src="res/music-one.mp3" id="musicStar"  loop="loop" preload="load" autoplay="autoplay"></audio>
    <audio src="res/music-two.mp3" id="musicChange" loop="loop" preload="load"></audio>
</div>
</body>
<!--<script src="js/slip.js"></script>-->
<script  src="js/jquery-1.8.3.min.js"></script>
<script src="js/main.js"></script>
<script>

    function audioAutoPlay(id){//全局控制播放函数
        var audio = document.getElementById(id),
                play = function(){
                    audio.play();
                    document.removeEventListener("touchstart",play, false);
                };
        audio.play();
        document.addEventListener("touchstart",play, false);
    }

    var isAppInside=/micromessenger/i.test(navigator.userAgent.toLowerCase())||/yixin/i.test(navigator.userAgent.toLowerCase());
//    if(!isAppInside){//给非微信易信浏览器
//        audioAutoPlay();
//    }
</script>
</html>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone'
    ]
  });
      wx.ready(function () {
        // 在这里调用 API
        
        //发送给朋友
       wx.onMenuShareAppMessage({
          title: '行圆汽车2017新年团拜邀请函',
          desc: '一元复始万象新，行圆汽车新春共话2017',
          link: 'http://www.qinlinhui.cn/invitation/test.php',
          imgUrl: 'http://www.qinlinhui.cn/invitation/img/log1.png',
          trigger: function (res) {
            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
          },
          success: function (res) {
              alert('发送成功');
          },
          cancel: function (res) {
            // alert('发送失败');
          },
          fail: function (res) {
            alert(JSON.stringify(res));
          }
        });
       
       //分享朋友圈
       wx.onMenuShareTimeline({
          title: '行圆汽车2017新年团拜邀请函', // 分享标题
          link: 'http://www.qinlinhui.cn/invitation/test.php', // 分享链接
          imgUrl: 'http://www.qinlinhui.cn/invitation/img/log1.png', // 分享图标
          success: function () { 
              // 用户确认分享后执行的回调函数
              alert('分享成功');
          },
          cancel: function () { 
              // 用户取消分享后执行的回调函数
              // alert('分享失败');
          },
          fail: function (res) {
            alert(JSON.stringify(res));
          }
          // complete: function(e){
          //     alert(3);
          // }
      });

    //   //分享到手机QQ
    //   wx.onMenuShareQQ({
    //     title: '这是一个测试的标题--百度', // 分享标题
    //     desc: '我要测试分享到qq功能', // 分享描述
    //     link: 'http://www.baidu.com', // 分享链接
    //     imgUrl: 'https://www.baidu.com/img/bd_logo1.png', // 分享图标
    //     success: function () { 
    //        // 用户确认分享后执行的回调函数
    //        alert('分享成功');
    //     },
    //     cancel: function () { 
    //        // 用户取消分享后执行的回调函数
    //        alert('分享失败');
    //     }
    //     fail: function(e){
    //         alert(2.5);
    //     },
    //     complete: function(e){
    //         alert(3);
    //     }
    // });
    
    //分享到qq空间
    wx.onMenuShareQZone({
        title: '行圆汽车2017新年团拜邀请函',
          desc: '一元复始万象新，行圆汽车新春共话2017',
          link: 'http://www.qinlinhui.cn/invitation/test.php',
          imgUrl: 'http://www.qinlinhui.cn/invitation/img/log1.png',
          trigger: function (res) {
            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
          },
          success: function (res) {
              alert('分享成功');
          },
          cancel: function (res) {
            // alert('分享失败');
          },
          fail: function (res) {
            alert(JSON.stringify(res));
          }
    });
  });
</script>