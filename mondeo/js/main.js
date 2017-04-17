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
            }
        });
    });
})($)