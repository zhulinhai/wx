/**
 * Created by zlh on 2016/12/29.
 */
let wxHandler = {
    initWxConf: function () {
        let param = 'url='+encodeURIComponent(location.href);
        $.ajax({
            type:'GET',
            url:'http://api.bobo119.com/api/wx/signature?'+ param,
            async:true, //异步请求
            success:function(rt){
                if(!rt.success){
                    return alert(rt.message);
                }

                const title ='传说中的宋元盖世宝藏已出，速速来揭秘'; // 分享标题
                const link ='http://wx.bjczxda.com/bydsy2017/index.html';
                const desc = '集齐3把钥匙即可开启宋元盖世宝藏，有机会抢先体验比亚迪宋元盖世升级版~'; // 分享描述
                const imgUrl = 'http://wx.bjczxda.com/bydsy2017/src/shareLogo.jpg';

                let wx_appId = rt.data.appId;
                let wx_timestamp = rt.data.timestamp;
                let wx_nonceStr = rt.data.nonceStr;
                let wx_signature = rt.data.signature;

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
            error:function(error){
                let eObj = error.responseJSON;

                if(eObj)
                    alert(eObj.message);
                else
                    alert('WeChat share request: Server Error!');
            }
        });
    }

};
