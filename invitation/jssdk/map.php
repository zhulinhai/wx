<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx11088c6f2fbf2abe", "55e994690d7a4d593d9d2b9da9509100");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>位置定位</title>
</head>
<body>
  
</body>
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
    debug: true,
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
      'onMenuShareQZone',
      'openLocation',
      'getLocation'
    ]
  });
      wx.ready(function () {
        // 在这里调用 API
        
        //使用微信内置地图查看位置接口
       wx.openLocation({
          latitude: 39.9756661481, // 纬度，浮点数，范围为90 ~ -90
          longitude: 116.3230166783, // 经度，浮点数，范围为180 ~ -180。
          name: '中关村皇冠假日酒店', // 位置名
          address: '北京市海淀区知春路106号中关村皇冠假日酒店，三层皇冠宴会厅', // 地址详情说明
          scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: 'http://www.qinlinhui.cn/invitation/test.php' // 在查看位置界面底部显示的超链接,可点击跳转
      });

       //获取地理位置接口
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            var speed = res.speed; // 速度，以米/每秒计
            var accuracy = res.accuracy; // 位置精度
        }
    });
  });
</script>
</html>
