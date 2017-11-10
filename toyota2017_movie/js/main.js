/**
 * Created by zhulinhai on 17/11/9.
 */
const host = 'http://api.bjczxda.com/api/';
var main = {
    userName: '',
    headImgUrl: '',
    pageSlider: null,
    init: function () {
        this.initSwiper();
        this.bindUserInfo();
        this.bindClicks();
        this.requestUserInfo();
    },
    initSwiper: function () {
        this.mainSwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            loop: false
        });
    },
    bindUserInfo: function () {
        var provinces = dataList.province;
        var cities = dataList.city;
        var dealers = dataList.dealer;
        var $province = $('#province'),
            $city = $('#city'),
            $dealer = $('#dealer');

        $province.change(function(){
            $city.empty().html('<option>请选择</option>');
            $dealer.empty().html('<option>请选择</option>');

            if($province.val() != '请选择'){
                for(var j = 0; j < cities.length; j++)
                    if(cities[j].p == $('#province').val())
                        $('#city').append('<option>'+cities[j].c+'</option>');
            }
        });

        $city.change(function(){
            $dealer.empty().html('<option>请选择</option>');
            if($city.val() != '请选择'){
                for(var j = 0; j < dealers.length; j++)
                    if(dealers[j].d == $('#city').val())
                        $('#dealer').append('<option>'+dealers[j].c +'</option>');
            }
        });

        for(var i = 0; i < provinces.length; i ++) $province.append('<option>'+provinces[i].p+'</option>');
    },
    bindClicks: function () {
        $('#btnSubmit').click(this.submitInfo);

    },
    submitInfo: function () {
        var name, mobile, car, province,city, dealer;
        name=trim($("input[name='name']").val());
        mobile=trim($("input[name='mobile']").val());
        car =trim($("#car").find("option:selected").text());
        province =trim($("#province").find("option:selected").text());
        city =trim($("#city").find("option:selected").text());
        dealer=trim($("#dealer").find("option:selected").text());
        if(isNullOrEmpty(name)) {
            alert("请填写姓名!");
            return;
        }else if(!checkIsMobile(mobile)){
            alert("请输入正确的手机号!");
            return;
        }else if(car.indexOf("请选择")>=0){
            alert("请选择意向车型");
            return;
        }else if(province.indexOf("请选择")>=0){
            alert("请选择省份");
            return;
        }else if(city.indexOf("请选择")>=0){
            alert("请选择城市");
            return;
        }else if(dealer.indexOf("请选择")>=0){
            alert("请选择经销商");
            return;
        }

        var flag = trim($("input[name='flag']").val());
        var url = host + 'ftMovie/luckyDraw?' + $('form').serialize();
        $.ajax({
            type: "post",
            url: url,
            dataType: "json",
            success: function(data){
                var response = eval('(data)');
                if (response.success) {
                    var prize = parseInt(response.data.prize);
                    gamePlayer.isPrize = prize;
                    gamePlayer.isSubmitInfo = true;
                    gamePlayer.closeAniDialog($userInfoDialog);
                    setTimeout(function () {
                        $tipResultDialog.find('.contentFrame').html(tipResultList[prize]);
                        $tipResultDialog.fadeIn(300);
                        /*点击分享好友*/
                        $('.btnDiscover').click(function () {
                            $('#shareDialog').fadeIn(300);
                        });
                        /*关闭结果提示框*/
                        $('.closeResultDialog').click(function () {
                            $('#tipResultDialog').fadeOut(300);
                        });
                    }, 700);
                } else {
                    alert(response.message);
                }
            },
            error: function(data){
                alert("加载超时,请检查网络连接");
            }
        });

    },
    convertToImg: function () {

    },
    requestUserInfo: function() {
        return;
        var code = request('code');
        $.ajax({
            type: 'get',
            url: host + 'wx/userInfo/'+code,
            success:function(json){
                if(json.success){
                    var data = json.data;
                    userName = data.nickname;
                    headImgUrl = data.headimgurl;
                    console.log(data);
                    $('#headImgUrl').attr('src', data.headimgurl);
                }
            },
            error:function(e){
                alert(e.responseJSON.message);
            }
        });
    }
};

$(function () {
    main.init();
});
