/**
 * Created by luhao on 2016/12/29.
 */
(function ($){
    var isRecord = false;
    var param = 'url='+encodeURIComponent(location.href);
    $.ajax({
        type:'GET',
        url:'http://api.bjczxda.com/api/wx/signature?'+ param,
        async:true, //异步请求
        success:function(rt) {

            if (!rt.success) {
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
                        'startRecord',
                        'stopRecord'
                    ]
                });
            }
        },
        error:function(error){
        }
    });
})(jQuery);