/**
 * Created by zhulinhai on 17/2/27.
 */
var mainHandler = {
    imageSwiper: 0,
    bannerSwiper: 0,
    checkedIndex: -1,
    init: function () {
        mainHandler.initSwiper();
        mainHandler.initContent();
        mainHandler.bindSwipes();
        mainHandler.bindClicks();
        mainHandler.fixSize();
    },
    bindSwipes: function () {
        $('#page-1').on('swipeDown', function () {
            mainHandler.changePage2To1();
        });
        var pageHammer = Hammer(document.getElementById("page-1"));
        pageHammer.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });
        pageHammer.on("swipe",function(e){
            mainHandler.changePage2To1();
        });
    },
    bindClicks: function () {
        /* 点击 了解详情 按钮 */
        $('#btnDetail').click(function () {
            mainHandler.updateCarDetail(mainHandler.checkedIndex);
            mainHandler.changePage1To2();
        });
        /* 点击 预约试驾 按钮 */
        $('#btnDrive').click(function () {
            $('#submitDialog').show();
        });
        /* 点击关闭预约试驾 按钮 */
        $('#closeSubmitBtn').click(function () {
            $('#submitDialog').fadeOut(300);
        });
        /* 点击提交预约试驾信息  */
        $('.btnSubmit').click(mainHandler.submitInfo);
        /* 车型选择 */
        $('.menu-container').find('.item').click(function () {
            mainHandler.updateMenu($(this).index());
        });
    },
    page1Animation: function () {
        setTimeout(function () { $('.car-1').show().addClass('animated fadeInRight'); }, 2800);
        setTimeout(function () { $('.car-2').show().addClass('animated fadeInRight'); }, 2100);
        setTimeout(function () { $('.car-3').show().addClass('animated fadeInRight'); }, 1400);
        setTimeout(function () { $('.car-4').show().addClass('animated fadeInRight'); }, 700);
        setTimeout(function () { $('.car-5').show().addClass('animated zoomIn'); }, 0);
        setTimeout(function () { $('.car-6').show().addClass('animated fadeInLeft'); }, 700);
        setTimeout(function () { $('.car-7').show().addClass('animated fadeInLeft'); }, 1400);
        setTimeout(function () { $('.car-8').show().addClass('animated fadeInLeft'); }, 2100);
        setTimeout(function () {
            $('.pTitle').show().addClass('animated bounceInDown');
        }, 3500);
    },
    changePage1To2: function() {
        $('.page-0').animate({'top': '-100%'}, 700);
        $('.page-1').animate({'top': '0'}, 700);
        $('.arrowUp').show();
    },
    changePage2To1: function () {
        $('.page-0').animate({'top': '0'}, 700);
        $('.page-1').animate({'top': '100%'}, 700);
    },
    fixSize: function () {
        var cNeedHeight = 22 * $(document).width()/320 * 20;
        var curHeight = $(document).height() - 5 * $(document).width()/320 * 20;
        if (cNeedHeight > curHeight) {
            var scaleRate = curHeight / cNeedHeight;
            $('.page-0').find('.bottomFrame').css('-webkit-transform', 'scale(' + scaleRate + ')');
        }
    },
    initSwiper: function () {
        mainHandler.bannerSwiper = new Swiper('.banner-container', {
            direction: 'horizontal',
            loop: false,
            effect : 'fade',
            speed: 1000,
            fade: {
                crossFade: false,
            },
            onSlideChangeStart: function (swiper) {
                mainHandler.updateMenu(swiper.activeIndex);
            }
        });

        mainHandler.imageSwiper = new Swiper('.image-container', {
            direction: 'horizontal',
            loop: false,
            effect : 'fade',
            speed: 1000,
            fade: {
                crossFade: false,
            },
            pagination: '.pagination'
        });
    },
    initContent: function () {
        var content = '';
        for (var i = 0; i < carsPlan.length; i ++) {
            var percent = i * 20;
            content += '<div class="item' + (i==carsPlan.length -1?' item1':'') + '" style="background-position: '+ percent + '% 0" ></div>';//background-image: url(' + url + ')
        }
        $('.menu-container').html(content);
        mainHandler.updateMenu(0);
        mainHandler.bannerSwiper.removeAllSlides();
        for (var j = 0; j < carsPlan.length; j ++) {
            var item = '<div class="swiper-slide"><img src="src/banner/' + carsPlan[j].banner + '" /></div>';
            mainHandler.bannerSwiper.appendSlide(item);
        }
    },
    updateMenu: function (index) {
        if (index != mainHandler.checkedIndex) {
            var menuItems = $('.menu-container').find('.item');
            if (mainHandler.checkedIndex!= -1) {
                $(menuItems[mainHandler.checkedIndex]).removeClass('hover');
                $(menuItems[mainHandler.checkedIndex]).css('background-position', mainHandler.checkedIndex * 20 + '% 0');
            }
            mainHandler.checkedIndex = index;
            $(menuItems[mainHandler.checkedIndex]).addClass('hover');
            $(menuItems[mainHandler.checkedIndex]).css('background-position', mainHandler.checkedIndex * 20 + '% 100%');
            mainHandler.bannerSwiper.slideTo(mainHandler.checkedIndex, 1000 ,false);
        }
    },
    updateCarDetail: function (index) {
        mainHandler.imageSwiper.removeAllSlides();
        var images = carsPlan[index].images;
        for (var i = 0; i < images.length; i ++) {
            var item = '<div class="swiper-slide"><img src="src/detail/' + images[i] + '" /></div>';
            mainHandler.imageSwiper.appendSlide(item);
        }
        $('.title').attr('src', 'src/' + carsPlan[index].title);
        $('#policyInfo').html(carsPlan[index].plan);
        var $pagination = $('.pagination');
        images.length <= 1?$pagination.hide():$pagination.show();
    },
    submitInfo: function () {
        var name, mobile, province,city, dealer, drive, call, flag;
        name=trim($("input[name='realname']").val());
        mobile=trim($("input[name='mobile']").val());
        flag=trim($("input[name='flag']").val());
        province ='上海市';
        city ='上海市';
        call = trim($("#call").find("option:selected").text());
        dealer=trim($("#dealer").find("option:selected").text());
        drive = carsPlan[mainHandler.checkedIndex].band;
        if(isNullOrEmpty(name)) {
            alert("请填写姓名!");
            return 0;
        } else if (call.indexOf("称谓")>=0) {
            alert("请选择称谓");
            return 0;
        } else if(!checkIsMobile(mobile)){
            alert("请输入正确的手机号!");
            return 0;
        } else if(dealer.indexOf("意向经销商")>=0){
            alert("请选择意向经销商");
            return 0;
        } else if (isNullOrEmpty(drive)) {
            alert("请选择意向车型");
            return;
        }

        var client_sex = call.indexOf('先生')>=0?1:2;
        var host = 'http://api.bobo119.com/api';
        var url = host + '/clients?flag=' + flag + '&client_sex=' + client_sex +'&name='+ name +'&mobile=' + mobile + '&province='+ province + '&city=' + city + '&dealer=' + dealer + '&remarks=' + drive + '&allow=' + 1;
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            success: function(data){
                var response = eval('(data)');
                if (response.success) {
                    $('#submitDialog').fadeOut(0);
                    alert("预约试驾成功");
                } else {
                    alert(response.message);
                }
            },
            error: function(data){
                alert("加载超时,请检查网络连接");
            }
        });
    }
};
mainHandler.init();

/*
 * 禁止浏览器触摸事件
 * */
document.addEventListener('touchmove', function(event){
    // 判断默认行为是否可以被禁用
    if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }
    }
}, false);