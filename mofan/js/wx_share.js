/**
 * 
 * @authors skylu@bjczxd.com (you@example.org)
 * @date    2017-08-14 16:20:10
 * @version $Id$
 */
var doShare = function ($){
    var param = 'url='+encodeURIComponent(location.href);
    $.ajax({
        type:'GET',
        url:'http://api.bjczxda.com/api/wx/signature?'+ param,
        async:true, //异步请求
        success:function(rt){

            if(!rt.success){
                return alert(rt.message);
            }

            // var title =window.title; // 分享标题
            var link =$('meta[name="wxm:link"]').attr("content");
		    var desc = $('meta[name="wxm:appmessage_desc"]').attr("content"); // 分享描述
		    var imgUrl = $('meta[name="wxm:img_url"]').attr("content");

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
                    'onMenuShareWeibo'
                    // 所有要调用的 API 都要加到这个列表中
                ]
            });

            wx.ready(function () {
                // 在这里调用 API
                wx.onMenuShareTimeline({
                    title:window.title, // 分享标题
                    link: link, // 分享链接
                    desc: desc, // 分享描述
                    imgUrl:imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        // _hmt.push(['_trackEvent', 'Timeline', 'share']);
                        zhuge.track('Timeline');
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareAppMessage({
                    title: window.title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        // _hmt.push(['_trackEvent', 'ChatFirend', 'share']);
                        zhuge.track('ChatFirend');
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareQQ({
                    title: window.title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        // _hmt.push(['_trackEvent', 'QQ', 'share']);
                        zhuge.track('QQShare');
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareWeibo({
                    title: window.title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        // _hmt.push(['_trackEvent', 'Weibo', 'share']);
                        zhuge.track('WeiboShare');
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            });
        },
        error:function(error){
            var eObj = error.responseJSON;

            //if(eObj)
            //    alert(eObj.message);
            //else
            //    alert('WeChat share request: Server Error!');
        }
    });
}