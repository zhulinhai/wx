/**
 * Created by zhulinhai on 17/9/13.
 */
var imgList1 = ['01.jpg','02.jpg','03.jpg','04.jpg'];
var imgList2 = ['A.jpg','B.jpg','C.jpg', 'D.jpg', 'E.jpg'];
var imgList3 = ['q1.jpg','q2.jpg','q3.jpg','q4.jpg','q5.jpg','q6.jpg','q7.jpg','q8.jpg','q9.jpg','q10.jpg','q11.jpg','q12.jpg'];
var info1List = [
    '除了一双霸气十足的大脚之外，标志性的家族鲸口式前脸、极具美式运动风格的腰线及前卫的悬浮式车顶，让驭胜S330处处散发着动感的光芒。'
];
var info2List = [
    '驭胜S330搭载1.5L GTDi汽油发动机，融合双连续可变VVT及Continental缸内直喷技术，最高输出功率可达120KW，最大扭矩250N.m，为你带来说走就走的高效动力。',
    '此时此刻，发动机和变速箱正盼着你来上演速度与激情，在自由的空间中，迈速表尽情飞转，在不同路况都将留下强有力的足迹，而这一切都源于一个充满活力的优秀基因！',
    '领先同级的2712mm轴距、1625mm轮距',
    '根据不同路况智能选择前轮两驱或前后轮四驱， 让你克服一切复杂路况。',
    '作为福特的重要合作伙伴，驭胜S330的车型设计、研发、采购、制造均严格按照福特全球标准，同时继承江铃优秀的制造基因并承担起进军乘用车市场的重任。'
];
var info3List = [
    '两个世界的趣味是玩不腻的，如果你感觉到无聊，那有可能是手机又没电了，而除了为手机补充些能量之外，我更希望你的心情同样是满格状态！'
];

var allList = [imgList1, imgList2, imgList3];
var allInfoList = [info1List, info2List, info3List];
var mainSwiper, bottomSwiper;
var selectedMenu = -1;

function initCarInfo() {
    initSwipers();
    /* 菜单导航栏切换 */
    $('#menuDiv').find('.item').click(function () {
        updateMenuState($(this).index());
    });

    updateMenuState(2);
}

function initSwipers() {
    mainSwiper = new Swiper ('.main-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 5
    });
    bottomSwiper = new Swiper('.bottom-container', {
        threshold : 20,
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        nextButton: '.btnNext',
        prevButton: '.btnPrev',
        slideToClickedSlide: true
    });

    mainSwiper.params.control = bottomSwiper;
    bottomSwiper.params.control = mainSwiper;
}

function updateMenuState(index) {
    if (index != selectedMenu) {
        var menuItems = $('#menuDiv').find('.item');
        if (selectedMenu!= -1) {
            // $(menuItems[selectedMenu]).css('background-image', 'url(' + menuSrcList[selectedMenu].normal +')');
        }
        selectedMenu = index;
        // $(menuItems[selectedMenu]).css('background-image', 'url('+ menuSrcList[selectedMenu].hover +')');
        updateSwiperes(selectedMenu);
    }
}

function updateSwiperes(index) {
    mainSwiper.removeAllSlides();
    mainSwiper.appendSlide(allList[index]);
    mainSwiper.update();
    mainSwiper.slideTo(0, 1000, true);

    bottomSwiper.removeAllSlides();
    bottomSwiper.appendSlide(allInfoList[index]);
    bottomSwiper.update();
    bottomSwiper.slideTo(0, 1000, true);
}