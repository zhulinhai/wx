/**
 * Created by zhulinhai on 17/12/8.
 */
var mainSwiper;
var provinces = provinceData;
var cities = cityData;
var dealers = dealersData;
var $province = $('#province'),
    $city = $('#city'),
    $dealer = $('#dealer');
var bRotate = false;
var $rotate = $('#rotate');
var isSubmitInfo = false;
var phoneNum = null;

var rotateFn = function (awards, angles, txt, callBack){
    bRotate = true;
    $rotate.stopRotate();
    $rotate.rotate({
        angle:0,
        animateTo:angles+1800,
        duration:4000,
        callback:function (){
            bRotate = false;
            callBack&& callBack();
        }
    })
};

function showActRuleDialog() {
    $('#actRuleDialog').show();
}

function closeActRuleDialog() {
    $('#actRuleDialog').hide();
}

function initSwiper() {
    mainSwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        longSwipesRatio: 0.3,
        pagination: '.pagination',
        touchRatio:1,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
}

function bindUserInfo() {
    $province.change(function(){
        $city.empty().html('<option>请选择</option>');
        $dealer.empty().html('<option>请选择</option>');

        if($province.val() != '请选择'){
            for(var j = 0; j < cities.length; j++)
                if(cities[j].proID == $province.find("option:checked").attr("id"))
                    $('#city').append('<option id=' + cities[j].cityID +'>'+cities[j].cityName+'</option>');
        }
    });

    $city.change(function(){
        $dealer.empty().html('<option>请选择</option>');
        if($city.val() != '请选择'){
            for(var j = 0; j < dealers.length; j++)
                if(dealers[j].city == $city.find("option:checked").attr("id"))
                    $('#dealer').append('<option>'+dealers[j].company +'</option>');
        }
    });

    for(var i = 0; i < provinces.length; i ++) $('#province').append('<option id=' + provinces[i].proid +'>'+provinces[i].proname+'</option>');
}

function submitInfo() {
    var favorCar, name, mobile, province,city, dealer, flag;
    favorCar = $.trim($("input[name='favorCar']").val());
    name=$.trim($("input[name='name']").val());
    mobile=$.trim($("input[name='mobile']").val());
    province =$.trim($("#province").find("option:selected").text());
    city =$.trim($("#city").find("option:selected").text());
    dealer=$.trim($("#dealer").find("option:selected").text());
    flag = $.trim($("input[name='flag']").val());
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

    var url = host + '/byd/luckyDraw?flag=' + flag +'&name='+ name +'&mobile=' + mobile + '&province='+ province + '&city=' + city + '&dealer=' + dealer;
    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        success: function(data){
            var response = eval('(data)');
            if (response.success) {
                alert("");
            } else {
                alert(response.message);
            }
        },
        error: function(data){
            alert("加载超时,请检查网络连接");
        }
    });
}

function luckyDraw() {
    if(bRotate)return;
    // 1、是否留资   2、检查手机号码是否正常
    if (isSubmitInfo && phoneNum) {
        var giftList=["谢谢参与","2年免息","谢谢参与","3年免息"];
        $.ajax({
            type: "POST",
            url: url,
            success: function(data){
                var response = eval('(data)');
                if (response.success) {
                    var prize = parseInt(data.prize);
                    var index = 0;
                    if (prize == 1) {
                        index = 1;
                    } else if (prize == 2) {
                        index = 3;
                    }

                    rotateFn(index, 360 - index * 90, giftList[index], function () {
                        if (index == 0) {
                            alert("谢谢参与");
                        } else {
                            alert('恭喜您获得' + giftList[index] + ',请注意查收短信');
                        }
                    });
                } else {
                    alert(response.message);
                }
            },
            error:function(data){
                alert('连接服务器失败，请检查网络连接!');
            }
        });
    } else {
        alert("请输入先进行留资抽奖");
    }

}

$(function (){
    initSwiper();
    bindUserInfo();
});

// tool
function isNullOrEmpty(strVal) {
    if (strVal == '' || strVal == null || strVal == undefined) {
        return true;
    } else {
        return false;
    }
}

function checkIsMobile(t) {
    var regex = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if(!t||!regex.test(t)) return false;
    return true;
}