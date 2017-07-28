/**
 * Created by luhao on 2017/7/18.
 */
(function ($){
    var param = 'url='+encodeURIComponent(location.href);
    $.ajax({
        type:'GET',
        url:'http://api.bjczxda.com/api/wx/signature?'+ param,
        async:true, //异步请求
        success:function(rt){

            if(!rt.success){
                return alert(rt.message);
            }

            var title ='语音识别demo'; // 分享标题
            var link ='http://wx.bjczxda.com/mondeo/live.html';

            var wx_appId = rt.data.appId;
            var wx_timestamp = rt.data.timestamp;
            var wx_nonceStr = rt.data.nonceStr;
            var wx_signature = rt.data.signature;

            wx.config({
                debug: false,
                appId: wx_appId,
                timestamp: wx_timestamp,
                nonceStr: wx_nonceStr,
                signature: wx_signature,
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',

                    'startRecord',
                    'stopRecord',
                    'translateVoice'
                ]
            });

            wx.ready(function () {

                // 在这里调用 API
                wx.onMenuShareTimeline({
                    title:title, // 分享标题
                    link: link, // 分享链接
                    desc: desc, // 分享描述
                    imgUrl:imgUrl, // 分享图标
                    success: function () {
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareAppMessage({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareQQ({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareWeibo({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            });
        },
        error:function(error){
            alert('http请求失败');
        }
    });
})(jQuery);