/**
 * Created by zhulinhai on 17/2/27.
 */
var mainHandler = {
    menuSwiper: 0,
    imageSwiper: 0,
    bannerSwiper: 0,
    checkedIndex: -1,
    init: function () {
        mainHandler.bindClicks();
        mainHandler.initSwiper();
        mainHandler.initContent();
    },
    bindClicks: function () {
        $('#closeSubmitBtn').click(function () {
            $('#submitDialog').hide();
        });

        $('#btnDetail').click(function () {
            $('.page-0').hide();
            $('.page-1').show();
        });

        $('#btnDrive').click(function () {
            $('#submitDialog').show();
        });
    },
    getSlideSpace: function () {
        return ((15 -2.3 * 6) * $(document).width()/320 * 20)/6;
    },
    initSwiper: function () {
        var slideSpace = mainHandler.getSlideSpace();
        mainHandler.menuSwiper = new Swiper('.menu-container', {
            threshold : 20,
            loop: false,
            spaceBetween: slideSpace,
            slidesPerView: 'auto',
            centeredSlides: false,
            onTap: function(swiper){
                if (swiper.clickedIndex != mainHandler.checkedIndex){
                    var slide = swiper.slides[mainHandler.checkedIndex];
                    $(slide).removeClass('slideHover');
                    $(swiper.slides[swiper.clickedIndex]).addClass('slideHover');
                    mainHandler.bannerSwiper.slideTo(swiper.clickedIndex, 1000, false);
                    mainHandler.checkedIndex = swiper.clickedIndex;
                }

            }
        });

        mainHandler.bannerSwiper = new Swiper('.banner-container', {
            direction: 'horizontal',
            loop: false,
            effect : 'fade',
            speed: 1000,
            fade: {
                crossFade: false,
            }
        });

        mainHandler.imageSwiper = new Swiper('.image-container', {
            direction: 'horizontal',
            loop: false,
            effect : 'fade',
        });
    },
    initContent: function () {
        mainHandler.menuSwiper.removeAllSlides();
        for (var i = 0; i < carsPlan.length; i ++) {
            var item = '<div class="swiper-slide"><img src="src/' + carsPlan[i].normal + '" /></div>';
            mainHandler.menuSwiper.appendSlide(item);
        }

        mainHandler.bannerSwiper.removeAllSlides();
        for (var i = 0; i < carsPlan.length; i ++) {
            var item = '<div class="swiper-slide"><img src="src/banner/' + carsPlan[i].banner + '" /></div>';
            mainHandler.bannerSwiper.appendSlide(item);
        }
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