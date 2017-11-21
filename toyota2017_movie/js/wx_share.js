/**
 * 分享  by getSingPackage
 */
function getSingPackage(){
    var param = 'url='+encodeURIComponent(location.href);
    $.ajax({
        type:'GET',
        url:'http://api.bobo119.com/api/wx/signature?'+ param,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(data){
            data = eval('(data)');
            runShare(data.appId, data.timestamp, data.nonceStr, data.signature);
        },
        error:function(msg){
        }
    });
}

function runShare(appId, timestamp, nonceStr, signature){

    var title =$('meta[name="wxm:timeline_title"]'); // 分享标题
    var link =$('meta[name="wxm:link"]');
    var desc = $('meta[name="wxm:appmessage_desc"]'); // 分享描述
    var imgUrl = $('meta[name="wxm:img_url"]');

    wx.config({
        debug: false,
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
}