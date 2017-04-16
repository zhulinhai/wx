/**
 * Created by zhulinhai on 17/2/27.
 */
$(function () {
   $('#closeSubmitBtn').click(function () {
       $('#submitDialog').hide();
   });

   $('#btnDetail').click(function () {
       $('.page-0').hide();
       $('.page-1').show();
   });

   initSwiper();
});

var menuSwiper='';
var imageSwiper = '';
var bannerSwiper = '';
var checkedIndex;

function initSwiper() {
    var slideSpace = ((15 -2.3 * 6) * $(document).width()/320 * 20)/6;
    menuSwiper = new Swiper('.menu-container', {
        threshold : 20,
        loop: false,
        spaceBetween: slideSpace,
        slidesPerView: 'auto',
        centeredSlides: false,
        onTap: function(swiper){
            if (swiper.clickedIndex != checkedIndex){
                var slide = swiper.slides[checkedIndex];
                $(slide).removeClass('slideHover');
                $(swiper.slides[swiper.clickedIndex]).addClass('slideHover');
                bannerSwiper.slideTo(swiper.clickedIndex, 1000, false);
                checkedIndex = swiper.clickedIndex;
            }

        }
    });
    bannerSwiper = new Swiper('.banner-container', {
        direction: 'horizontal',
        loop: false,
        effect : 'fade',
        speed: 1000,
        fade: {
            crossFade: false,
        }
    });

    imageSwiper = new Swiper('.image-container', {
        direction: 'horizontal',
        loop: false,
        effect : 'fade',
    });

    updateInfo();
}

function updateInfo() {
    menuSwiper.removeAllSlides();
    for (var i = 0; i < carsPlan.length; i ++) {
        var item = '<div class="swiper-slide"><img src="src/' + carsPlan[i].normal + '" /></div>';
        menuSwiper.appendSlide(item);
    }

    bannerSwiper.removeAllSlides();
    for (var i = 0; i < carsPlan.length; i ++) {
        var item = '<div class="swiper-slide"><img src="src/banner/' + carsPlan[i].banner + '" /></div>';
        bannerSwiper.appendSlide(item);
    }
}

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