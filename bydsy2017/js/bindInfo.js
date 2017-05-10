/**
 * Created by zhulinhai on 17/2/4.
 * flag: 比亚迪元年--bydsy2017
 */
const provinces = dataList.province;
const cities = dataList.city;
const dealers = dataList.dealer;
const $province = $('#province'),
    $city = $('#city'),
    $dealer = $('#dealer');
const host = 'http://api.bobo119.com/api';

$(function(){
    $province.change(function(){
        $city.empty().html('<option>请选择</option>');
        $dealer.empty().html('<option>请选择</option>');

        if($province.val() != '请选择'){
            for(let j = 0; j < cities.length; j++)
                if(cities[j].p == $('#province').val())
                    $('#city').append('<option>'+cities[j].c+'</option>');
        }
    });

    $city.change(function(){
        $dealer.empty().html('<option>请选择</option>');
        if($city.val() != '请选择'){
            for(let j = 0; j < dealers.length; j++)
                if(dealers[j].d == $('#city').val())
                    $('#dealer').append('<option>'+dealers[j].c +'</option>');

        }
    });

    for(let i = 0; i < provinces.length; i ++) $('#province').append('<option>'+provinces[i].p+'</option>');
});

function submitInfo() {
    let name, mobile, province,city, dealer;
    name=trim($("input[name='realname']").val());
    mobile=trim($("input[name='mobile']").val());
    province =trim($("#province").find("option:selected").text());
    city =trim($("#city").find("option:selected").text());
    dealer=trim($("#dealer").find("option:selected").text());
    if(isNullOrEmpty(name)) {
        alert("请填写姓名!");
        return 0;
    }else if(!checkIsMobile(mobile)){
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

    let flag = request('flag');
    if (flag == '') { flag = 'MGZS'; }
    let url = host + '/clients?flag=' + flag +'&name='+ name +'&mobile=' + mobile + '&province='+ province + '&city=' + city + '&dealer=' + dealer + '&allow=true';
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(data){
            let response = eval('(data)');
            if (response.success) {
                $('#submitDialog').fadeOut(0);
                $('#tipSuccessDialog').show();
            } else {
                alert(response.message);
            }
        },
        error: function(data){
            alert("加载超时,请检查网络连接");
        }
    });
}

/*获取人气数*/
function getHotNum() {
    $.ajax({
        type: "get",
        url: host +'/jb/rq',
        success: function(json){
            if (json.success) {
                $('#currentCount').html(json.data);
            }
        },
        error:function(error){
            alert(error.responseJSON.message);
        }
    });
}