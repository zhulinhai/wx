/**
 * 分享  by getSingPackage
 */
function getSingPackage(){
    var title =$('meta[name="wxm:timeline_title"]').attr("content"); // 分享标题
    var link =$('meta[name="wxm:link"]').attr("content");
    var desc = $('meta[name="wxm:appmessage_desc"]').attr("content"); // 分享描述
    var imgUrl = $('meta[name="wxm:img_url"]').attr("content");

    var param = 'url='+encodeURIComponent(location.href);
    $.ajax({
        type:'GET',
        url:'http://api.bobo119.com/api/wx/signature?'+ param,
        async:true, //异步请求
        success: function(rt){
            if(!rt.success){
                return alert(rt.message);
            }

            var appId = rt.data.appId;
            var timestamp = rt.data.timestamp;
            var nonceStr = rt.data.nonceStr;
            var signature = rt.data.signature;

            wx.config({
                debug: true,
                appId: appId,
                timestamp: timestamp,
                nonceStr: nonceStr,
                signature: signature,
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo'
                    // 所有要调用的 API 都要加到这个列表中
                ]
            });
            wx.ready(function () {
                //alert($('#shareWeixinImg').attr('src'));
                // 在这里调用 API

                wx.onMenuShareTimeline({
                    title:title, // 分享标题
                    link: link, // 分享链接
                    desc: desc, // 分享描述
                    imgUrl:imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
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
        error:function(msg){
        }
    });
}