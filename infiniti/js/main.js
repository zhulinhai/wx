/**
 * Created by zhulinhai on 17/2/27.
 */
var mySwiper, mainSwiper, bottomSwiper;
var player;
var detailUrl = 'http://e.cn.miaozhen.com/r/k=2038094&p=74wDJ&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&vo=35ca83383&vr=2&o=http://as.kejet.net/M0IzNjVGOUVDREIzNEZGMDcxNzIyQjcwNjYzMUJF?u/QkE2NjU1MTJFQzIyMThB/o/M0IzNjVGOUVDREIzNEZG/m/MDcxNzIyQjcwNjYzMUJF/q/afaclick?http://www.saicmg.com/mobileM/mgzs?mz_ca=2038094&mz_sp=74wDJ';
var selectedMenu = -1;
var updateInterval ;
var currentIndex = 1;
var liveUrl = 'http://vku.youku.com/live/share?id=11678';
var menuSrcList = [
    { 'normal': 'img/2-menuItem3.png','hover':'img/2-menuItem3-hover.png'},
    { 'normal': 'img/2-menuItem2.png','hover':'img/2-menuItem2-hover.png'},
    { 'normal': 'img/2-menuItem1.png','hover':'img/2-menuItem1-hover.png'}
];

var mainContent01 = [
    '<div class="swiper-slide"><img src="img/item/2-pic1.jpg" /><img class="title-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title1.png" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic2.jpg" /><img class="title-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title2.png" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic3.jpg" /><img class="title-3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title3.png" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic4.jpg" /><img class="title-4 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title4.png" /></div>'
];
var mainContent02 = [
    '<div class="swiper-slide"><img src="img/item/2-pic5.jpg" /><img class="title-5 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title5.png" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic6.png" /><img class="title-6 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title6.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic7.jpg" /><img class="title-7 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title7.png" /></div>'
];
var mainContent03 = [
    '<div class="swiper-slide"><img src="img/item/2-pic8.jpg" /><img class="title-8 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title8.png" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic9.jpg" /><img class="title-9 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title9.png" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic10.jpg" /><img class="title-10 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title10.png" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-pic11.jpg" /><img class="title-11 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" src="img/item/2-title11.png" /></div>'
];

var subContent01 = [
    '<div class="swiper-slide"><img src="img/item/2-subpic1.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic2.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic3.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic4.jpg" /></div>'
];
var subContent02 = [
    '<div class="swiper-slide"><img src="img/item/2-subpic5.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic6.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic7.jpg" /></div>'
];
var subContent03 = [
    '<div class="swiper-slide"><img src="img/item/2-subpic8.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic9.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic10.jpg" /></div>',
    '<div class="swiper-slide"><img src="img/item/2-subpic11.jpg" /></div>'
];
var mainContentList = [mainContent03, mainContent02, mainContent01];
var subContentList = [subContent03, subContent02, subContent01];

$(function () {
    fixPageSize();
    initPlayer();
    initSwiperes();
    initParticles();
    bindActions();
    updateMenuState(2);
    // getHotNum();
    // updateInterval = setInterval(function(){
    //     getHotNum();
    // }, 5 * 60 * 1000);
});

function initSwiperes() {
    var slideSpace = (14 -4.3 * 3) / 3 * $(document).width()/320 * 20;
    mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: false,
        preventClicks: false,
        onSlideChangeStart: function(swiper){
            // if (swiper.activeIndex == 2) {
            //     player.pause();
            //     androidHideVideo();
            // }
        },
        onSlideChangeEnd: function(swiper){
            // if (swiper.activeIndex == 2) {
            //     showVideo();
            // }
        }
    });
    mainSwiper = new Swiper ('.main-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 5,
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
    bottomSwiper = new Swiper('.bottom-container', {
        threshold : 20,
        loop: false,
        spaceBetween: slideSpace,
        slidesPerView: 'auto',
        centeredSlides: true,
        nextButton: '.btnNext',
        prevButton: '.btnPrev',
        slideToClickedSlide: true
    });

    mainSwiper.params.control = bottomSwiper;
    bottomSwiper.params.control = mainSwiper;
}

function initParticles() {
    var particlesHeight = $(document).height() - $(document).width()/320 * 200;
    $('#particles').height(particlesHeight).particleground({
        dotColor: '#99999a',
        lineColor: '#444546',
        curvedLines: false,
        particleRadius: 4,
        proximity: 100,
        parallax: false,
        parallaxMultiplier: 2
    });
}

/*初始化player*/
function initPlayer() {
    var $videoBox = $('.video-js-box');
    /*播放器相关操作*/
    $('#videoPlayer').width($videoBox.width()).height($videoBox.height());
    // player = videojs('videoPlayer');
    // player.src('http://vedio.yunmfang.com/job_MGZSTVC30S.mp4');

    // $('#videoPlayer').width($videoBox.width()).height($videoBox.height()).attr('src', liveUrl);
}

function androidHideVideo() {
    if (/(Android)/i.test(navigator.userAgent)) {
        //判断Android
        $('#videoPlayer').fadeOut(300);
    }
}

function showVideo() {
    if (/(Android)/i.test(navigator.userAgent)) {
        //判断Android
        $('#videoPlayer').show();
    }
}

var isChecked = true;
/*绑定用户事件*/
function bindActions() {
    $('.allowTip').click(function (e) {
        if (isChecked) {
            $('.checkFrame').attr('src', 'img/3-uncheck.png');
            isChecked = false;
        } else {
            $('.checkFrame').attr('src', 'img/3-check.png');
            isChecked = true;
        }
    });

    $('#closeTipDialog').click(function (e) {
        $('#tipSuccessDialog').fadeOut(300);
        showVideo();
    });

    $('#btnActRule').click(function (e) {
        $('#actRuleTipDialog').show();
    });

    $('.dateDrive').click(function (e) {
        /* 显示预约试驾弹出框 */
        $('#submitDialog').show();
        androidHideVideo();
    });

    $('#closeDialog').click(function (e) {
        $('#submitDialog').fadeOut(300);
        showVideo();
    });

    $('.linkDetail').click(function (e) {
        window.location.href = detailUrl;
    });

    $('#btnVideo').click(changePage1To3);
    $('#btnBack').click(changePage3To1);

    $('#closeActRuleDialog').click(function (e) {
       $('#actRuleTipDialog').fadeOut(300);
    });

    /*点击页面进行切换*/
    $('.pageNext').click(function (e) {
        mainSwiper.slideNext();
    });

    /* 菜单导航栏切换 */
    $('#menuDiv').find('.item').click(function () {
        updateMenuState($(this).index());
    });

    /*点击提交资料按钮*/
    $('#submitInfo').click(submitInfo);
}

/* 适配页面 */
function fixPageSize() {
    var cNeedHeight = 25 * $(document).width()/320 * 20;
    var curHeight = $(document).height();
    if (cNeedHeight > curHeight) {
        var scaleRate = curHeight / cNeedHeight;
        $('.dialog').find('.contentFrame').css('-webkit-transform', 'scale(' + scaleRate + ')');
        // $('.section-2').find('.mainFrame').css('-webkit-transform', 'scale(' + scaleRate + ')');
    }

}

/* 切换Loading状态到Page1 */
function changeLoadingToPage1() {
    var loadingDialog = $('#loadingDialog');
    $('#loading-car').addClass('animated fadeOutRightBig');
    loadingDialog.fadeOut(700);
    setTimeout(function () {
        page1Animation();
    }, 1000);
}

function page1Animation() {
    /* 汽车驶入场地动画 依次 红色、蓝色、白色 */
    /* 文字浮现动画 */
    /* 出现按钮、箭头 */
    var $s1= $('.section-1');
    $s1.find('.carRed').show().addClass('animated zoomIn');
    setTimeout(function () { $s1.find('.carBlue').show().addClass('animated fadeInRight'); }, 700);
    setTimeout(function () { $s1.find('.carWhite').show().addClass('animated fadeInLeft'); }, 1400);
    setTimeout(function () { $s1.find('.title-1').show().addClass('animated bounceInDown'); }, 2100);
    setTimeout(function () { $s1.find('.linkContainer').show().addClass('animated zoomIn'); }, 2800);
    setTimeout(function () {
        $s1.find('.dateDrive').show().addClass('animated fadeInUp');
        $s1.find('#btnVideo').show().addClass('animated fadeInUp');
        $s1.find('#btnActRule').show().addClass('animated fadeInDown');
    }, 3500);
    setTimeout(function () {
        $s1.find('.arrowDown').show();
        bindTouches();
    }, 3800)
}

function bindTouches() {
    var page1Touch = util.toucher(document.getElementById('section-1'));
    var page2Touch = util.toucher(document.getElementById('section-2'));
    var page3Touch = util.toucher(document.getElementById('section-3'));
    page1Touch.on('swipeUp', function(e){
        changePage1To2();
    });
    page2Touch.on('swipeUp', function(e){
        changePage2To3();
    });
    page2Touch.on('swipeDown', function(e){
        changePage2To1();
    });
    page3Touch.on('swipeDown', function (e) {
        changePage3To2();
    });
}

function changePage1To2() {
    $('.section-1').animate({'top': '-100%'});
    $('.section-2').animate({'top': '0'});
    $('.section-3').animate({'top': '100%'});
}

function changePage2To1() {
    $('.section-1').animate({'top': '0'});
    $('.section-2').animate({'top': '100%'});
    $('.section-3').animate({'top': '200%'});
}

function changePage2To3() {
    $('.section-1').animate({'top': '-200%'});
    $('.section-2').animate({'top': '-100%'});
    $('.section-3').animate({'top': '0'});
    showVideo();
}

function changePage3To2() {
    $('.section-1').animate({'top': '-100%'});
    $('.section-2').animate({'top': '0'});
    $('.section-3').animate({'top': '100%'});
    androidHideVideo();
}

function changePage1To3() {
    $('.section-1').animate({'top': '-200%'}, 1000);
    $('.section-2').animate({'top': '-100%'}, 1000);
    $('.section-3').animate({'top': '0'}, 1000);
    showVideo();
}
function changePage3To1() {
    $('.section-1').animate({'top': '0'}, 1000);
    $('.section-2').animate({'top': '100%'}, 1000);
    $('.section-3').animate({'top': '200%'}, 1000);
    androidHideVideo();
}

function updateMenuState(index) {
    if (index == selectedMenu) {
        return;
    } else {
        var menuItems = $('#menuDiv').find('.item');
        if (selectedMenu!= -1) {
            $(menuItems[selectedMenu]).css('background-image', 'url(' + menuSrcList[selectedMenu].normal +')');
        }
        selectedMenu = index;
        $(menuItems[selectedMenu]).css('background-image', 'url('+ menuSrcList[selectedMenu].hover +')');
        updateSwiperes(selectedMenu);
    }
}

function updateSwiperes(index) {
    mainSwiper.removeAllSlides();
    mainSwiper.appendSlide(mainContentList[index]);
    mainSwiper.update();
    mainSwiper.slideTo(0, 1000, true);
    swiperAnimate(mainSwiper);

    bottomSwiper.removeAllSlides();
    bottomSwiper.appendSlide(subContentList[index]);
    bottomSwiper.update();
    bottomSwiper.slideTo(0, 1000, true);
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