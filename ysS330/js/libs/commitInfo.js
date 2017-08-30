/**
 * Created by zhulinhai on 17/8/29.
 */

require.config({

    // RequireJS 通过一个相对的路径 baseUrl来加载所有代码。baseUrl通常被设置成data-main属性指定脚本的同级目录。
    baseUrl: "./",

    // 第三方脚本模块的别名,jquery比libs/jquery-1.11.1.min.js简洁明了；
    paths: {
        "jquery": "./jquery-1.12.1.min.js"
    }

});


require(['helper','jquery'], function (helper, $) {
    const host = 'http://api.bjczxda.com/api';
    let name, mobile, province,city, dealer;
    name='祝先生';//trim($("input[name='realname']").val());
    mobile='18519002237';//trim($("input[name='mobile']").val());
    province ='湖北省';//trim($("#province").find("option:selected").text());
    city ='武汉市';//trim($("#city").find("option:selected").text());
    dealer='大啊啊啊';//trim($("#dealer").find("option:selected").text());
    if(helper.isNullOrEmpty(name)) {
        alert("请填写姓名!");
        return 0;
    }else if(!helper.checkIsMobile(mobile)){
        alert("请输入正确的手机号!");
        return 0;
    }else if(province.indexOf("请选择")>=0){
        alert("请选择省份");
        return 0;
    }else if(city.indexOf("请选择")>=0){
        alert("请选择城市");
        return 0;
    }else if(dealer.indexOf("请选择")>=0){
        alert("请选择经销商");
        return 0;
    }
    let flag = 'yss330';//trim($("input[name='flag']").val());
    let url = host + '/ysS330/luckyDraw?flag=' + flag +'&name='+ name +'&mobile=' + mobile + '&province='+ province + '&city=' + city + '&dealer=' + dealer;

    $.ajax({
        type: "get",
        url: url,
        dataType: "jsonp",
        success: function(data){
            var response = eval('(data)');
            if (response.success) {

            } else {
                alert(response.message);
            }
        },
        error: function(data){
            alert("加载超时,请检查网络连接");
        }
    });
});
