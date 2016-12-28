/**
 * Created by luhao on 2016/12/28.
 */

/**
 * 微信分享
 */
var title ='0元起拍，开瑞K60心动“价”到，任性开走'; // 分享标题
var link ='http://wx.bjczxda.com/tjatse/html/index.html';
var desc = '快乐家庭7座SUV-开瑞K60震撼上市( 全网直播进行中)'; // 分享描述
var imgUrl = '';

window.onload = function(){
    Http = new Http('http://api.bobo119.com/api/');
    getSingPackage();
};

function getSingPackage(){
    var p ='url='+ escape(location.href);
    Http.ajaxRequest({uri:'wx/signature?'+p,success:function(rt){
        if (rt.success) {
            var data = rt.data;
            $("input[name=appId]").val(data.appId);
            $('input[name=timestamp]').val(data.timestamp);
            $('input[name=nonceStr]').val(data.nonceStr);
            $('input[name=signature]').val(data.signature);
            runShare(null,null);
        }
    }});
}


function runShare(pTitle, pDesc){

    title = !pTitle?title:pTitle;
    desc = !pDesc?desc:pDesc;

    wx.config({
        debug: false,
        appId: $("input[name=appId]").val(),
        timestamp:$('input[name=timestamp]').val(),
        nonceStr: $('input[name=nonceStr]').val(),
        signature: $('input[name=signature]').val(),
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