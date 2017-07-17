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

                wx.ready(function () {
                    $('#record').click(function () {
                        if (!isRecord) {
                            isRecord = true;
                            wx.startRecord();
                            $('#record').val('正在录音');
                        } else {
                            isRecord = false
                            $('#record').val('开始录音');
                            wx.stopRecord({
                                success: function (res) {
                                    var localId = res.localId;
                                    alert(localId);
                                },
                                error: function () {
                                    alert('error');
                                }
                            });
                        }
                    })
                });
            }
        },
        error:function(error){
        }
    });
})(jQuery);