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

            var wx_appId = rt.data.appId;
            var wx_timestamp = rt.data.timestamp;
            var wx_nonceStr = rt.data.nonceStr;
            var wx_signature = rt.data.signature;

            wx.config({
                debug: true,
                appId: wx_appId,
                timestamp: wx_timestamp,
                nonceStr: wx_nonceStr,
                signature: wx_signature,
                jsApiList: [
                    'startRecord',
                    'stopRecord'
                ]
            });

            wx.ready(function () {
            });
        },
        error:function(error){
            alert('http请求失败');
        }
    });
})(jQuery);