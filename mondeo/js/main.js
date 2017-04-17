/**
 * Created by luhao on 2017/4/17.
 */
(function(){
    var host = 'http://api.bjczxda.com/api/';
    var http = new Http(host);
    var flag = 'MONDEO_20170501';

    $('#submitComment').on('click',function(e){
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

    $('#submitApply').on('click',function(e){
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
})($)