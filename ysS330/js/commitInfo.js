/**
 * Created by zhulinhai on 17/8/29.
 */

var commitInfoHandler = {
    host : 'http://api.bjczxda.com/api',
    bindInfo: function () {
        $.get("./js/data.json", function (data, status) {
            if (status == 'success') {
                const $province = $('#province'),
                    $city = $('#city'),
                    $dealer = $('#dealer');
                var provinces = data.province,
                    cities = data.city,
                    dealers = data.dealer;

                $province.change(function () {
                    $city.empty().html('<option>请选择</option>');
                    $dealer.empty().html('<option>请选择</option>');

                    if ($province.val() != '请选择') {
                        for (var j = 0; j < data.city.length; j++)
                            if (cities[j].p == $('#province').val())
                                $city.append('<option>' + cities[j].c + '</option>');
                    }
                });

                $city.change(function () {
                    $dealer.empty().html('<option>请选择</option>');
                    if ($city.val() != '请选择') {
                        for (var j = 0; j < dealers.length; j++)
                            if (dealers[j].d == $city.val())
                                $dealer.append('<option>' + dealers[j].c + '</option>');
                    }
                });

                for (var i = 0; i < provinces.length; i++) $province.append('<option>' + provinces[i].p + '</option>');
            }
        });
    },
    submitInfo : function () {
        var flag, name, mobile, province, city, dealer;
        flag = helper.trim($("input[name='flag']").val());
        name = helper.trim($("input[name='realname']").val());
        mobile = helper.trim($("input[name='mobile']").val());
        province = helper.trim($("#province").find("option:selected").text());
        city = helper.trim($("#city").find("option:selected").text());
        dealer = helper.trim($("#dealer").find("option:selected").text());

        if (helper.isNullOrEmpty(name)) {
            alert("请填写姓名!");
            return 0;
        } else if (!helper.checkIsMobile(mobile)) {
            alert("请输入正确的手机号!");
            return 0;
        } else if (province.indexOf("请选择") >= 0) {
            alert("请选择省份");
            return 0;
        } else if (city.indexOf("请选择") >= 0) {
            alert("请选择城市");
            return 0;
        } else if (dealer.indexOf("请选择") >= 0) {
            alert("请选择经销商");
            return 0;
        }

        var url = this.host + '/ysS330/luckyDraw?flag=' + flag + '&name=' + name + '&mobile=' + mobile + '&province=' + province + '&city=' + city + '&dealer=' + dealer;
        $.ajax({
            type: "post",
            url: url,
            dataType: "json",
            success: function (data) {
                var response = eval('(data)');
                if (response.success) {
                    showTipDialog(response.data.prize === 1);
                } else {
                    alert(response.message);
                }
            },
            error: function (data) {
                alert("加载超时,请检查网络连接");
            }
        });
    }
};
