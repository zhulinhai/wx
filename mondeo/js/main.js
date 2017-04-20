/**
 * Created by luhao on 2017/4/17.
 */
(function(){
    var host = 'http://api.bjczxda.com/api/';
    var http = new Http(host);
    var flag = 'MONDEO_20170501';
    var store = {
        lives:0, //直播人气数
        audiences:0, //同时在线人数
        tricyclic_turns:0, //三环圈数
        tetracyclic_turns:0, //四环圈数
        pentacyclic_turns:0, //五环圈数
        used_gasoline:0, //已使用油量
        pastTime:0, // 已挑战时间
        support:0, //支持挑战成功人数
        nonsupport:0 //不支持人数
    };
    /**
     * 忽略部分ajax请求
     * @type {{ajax: {ignoreURLs: *[]}}}
     */
    Pace.options = {
        ajax: {
            ignoreURLs: [host+'h5/storeComment'
                , host+'h5/storeProposer']
        }
    }

    /**
     * 完成加载
     */
    Pace.once('hide', function(e){

        bindEvent();
    });

    function bindEvent(){

        $('#submitComment').hammer().bind('tap',function(e){
            var params = $('form:first').serialize();
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeComment?' + params + '&flag='+flag,
                success:function(json){
                    alert(json.data);
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        alert('您已参加活动，请继续浏览后续内容!');
                }
            });
        });

        $('#submitApply').hammer().bind('tap',function(e){
            var params = $('form:last').serialize();
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeProposer?' + params + '&flag='+flag,
                success:function(json){
                    alert(json.data);
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        alert('您已参加活动，请继续浏览后续内容!');
                }
            });
        });
    }
})($)