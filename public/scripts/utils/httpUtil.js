/**
 * Created by luhao on 2016/11/18.
 */

function Http(h){
    /**
     * Http请求
     */
    var host = h ? h : 'http://10.0.0.14:9000/api/';

    return {
        ajaxRequest:function(option){

            var type = 'get';
            var uri = null;
            var datas = null;
            var success = null;
            var error = null;

            if(option &&  typeof option ==  'string'){
                uri = option;
            }else if(option && typeof option == 'object'){
                type = option.type ? option.type : type;
                uri = option.uri ? option.uri : type;
                datas = option.datas ? option.datas : null;
                success = (option.success && typeof option.success == 'function') ? option.success : null;
                error = (option.error && typeof option.error == 'function') ? option.error : null;
            }else {
                alert('请设置合适的参数');
                return;
            }

            $.ajax({
                type:type,
                url: host + uri,
                data : datas,
                success:function(json){
                    console.log(json);
                    if(success && typeof success == 'function')
                        success(json);
                },
                error:function(e){
                    if(error && typeof error == 'function')
                        error(json);
                    else{
                      if(e.responseJSON){
                          alert(e.responseJSON.message);
                      }else
                         alert('Server Error!');
                    }
                }
            });
        }
    };
}