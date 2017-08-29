/**
 * Created by zhulinhai on 17/8/29.
 */

$(function () {
    const host = 'http://api.bjczxda.com/api';
    var name, mobile, province,city, dealer;
    name='祝先生';//trim($("input[name='realname']").val());
    mobile='18519002237';//trim($("input[name='mobile']").val());
    province ='湖北省';//trim($("#province").find("option:selected").text());
    city ='武汉市';//trim($("#city").find("option:selected").text());
    dealer='大啊啊啊';//trim($("#dealer").find("option:selected").text());
    // if(isNullOrEmpty(name)) {
    //     alert("请填写姓名!");
    //     return 0;
    // }else if(!checkIsMobile(mobile)){
    //     alert("请输入正确的手机号!");
    //     return 0;
    // }else if(province.indexOf("请选择")>=0){
    //     alert("请选择省份");
    //     return 0;
    // }else if(city.indexOf("请选择")>=0){
    //     alert("请选择城市");
    //     return 0;
    // }else if(dealer.indexOf("请选择")>=0){
    //     alert("请选择经销商");
    //     return 0;
    // }
    var flag = 'yss330';//trim($("input[name='flag']").val());
    var url = host + '/ysS330/luckyDraw?flag=' + flag +'&name='+ name +'&mobile=' + mobile + '&province='+ province + '&city=' + city + '&dealer=' + dealer;

    $.ajax({
        type: "post",
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
