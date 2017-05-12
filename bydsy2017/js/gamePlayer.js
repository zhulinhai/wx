/**
 * Created by zhulinhai on 17/5/9.
 */
const imgWidth = 1280, imgHeight = 1055;
const videoUrl = 'http://vedio.yunmfang.com/bydVideo2017-480p.mp4';
const postUrl = 'src/placeHolder.png';
const $videoBox = $('.video-js-box');
const carsInfo= {
    'song': [
        {'title':'时尚外观','img':'1-1.jpg','thumbImg':'1.1.jpg'},
        {'title':'质感内饰','img':'1-2.jpg','thumbImg':'1.2.jpg'},
        {'title':'17/18英寸双色铝合金车轮','img':'1-3.jpg','thumbImg':'1.3.jpg'},
        {'title':'8安全气囊及“3H”高强度车身','img':'1-4.jpg','thumbImg':'1.4.jpg'},
        {'title':'大尺寸全景天窗','img':'1-5.jpg','thumbImg':'1.5.jpg'},
        {'title':'开放式CarPad安卓车载系统','img':'1-6.jpg','thumbImg':'1.6.jpg'},
        {'title':'360°高清全景影像','img':'1-7.jpg','thumbImg':'1.7.jpg'},
        {'title':'后排中央出风口','img':'1-8.jpg','thumbImg':'1.8.jpg'},
        {'title':'6速手自一体自动挡','img':'1-9.jpg','thumbImg':'1.9.jpg'},
    ],
    'yuan': [
        {'title':'炫酷外观','img':'2-1.jpg','thumbImg':'2.1.jpg'},
        {'title':'质感软内饰','img':'2-2.jpg','thumbImg':'2.2.jpg'},
        {'title':'360°高清全景影像','img':'2-3.jpg','thumbImg':'2.3.jpg'},
        {'title':'大尺寸全景天窗','img':'2-4.jpg','thumbImg':'2.4.jpg'},
        {'title':'开放式CarPad安卓车载系统','img':'2-5.jpg','thumbImg':'2.5.jpg'},
        {'title':'行车记录仪','img':'2-6.jpg','thumbImg':'2.6.jpg'},
        {'title':'6速手自一体自动挡','img':'2-7.jpg','thumbImg':'2.7.jpg'},
        {'title':'6向电动座椅调节','img':'2-8.jpg','thumbImg':'2.8.jpg'},
        {'title':'时尚备胎','img':'2-9.jpg','thumbImg':'2.9.jpg'},
    ]
};
var gamePlayer = {
    imgWidth: 1280,
    imgHeight: 1055,
    bgScale: 1,
    myScroll: null,
    mainSwiper: null,
    bottomSwiper: null,
    keyList: [0, 1, 2],
    getKeyList: [],
    boxPoints: [
        {'index': 0,'el': '.box1','x': 195, 'y': 295, 'isOpened': false},
        {'index': 1,'el': '.box2','x': 765, 'y': 535, 'isOpened': false},
        {'index': 2,'el': '.box3','x': 1070, 'y': 410, 'isOpened': false}
    ],
    init: function () {
        this.bgScale = $(window).height() /imgHeight;
        this.bindClicks();
    },
    initScroll: function () {
        this.myScroll = new IScroll('#wrapper', {
            scrollbars: false,
            scrollX: true,
            scrollY: false,
            click: true,
            bounce: false
        });
    },
    initSwiper: function () {
        this.mainSwiper = new Swiper ('.main-container', {
            direction: 'horizontal',
            loop: false
        });

        var slideSpace = (15 -4.3 * 3) / 3 * $(document).width()/320 * 20;
        this.bottomSwiper = new Swiper('.bottom-container', {
            threshold : 20,
            loop: false,
            spaceBetween: slideSpace,
            slidesPerView: 'auto',
            centeredSlides: true,
            nextButton: '.btnNext',
            prevButton: '.btnPrev',
            slideToClickedSlide: true
        });

        this.mainSwiper.params.control = this.bottomSwiper;
        this.bottomSwiper.params.control = this.mainSwiper;

    },
    changePage1To2: function () {
        this.fixPageSize();
        this.initScroll();
        this.initBoxes();
    },
    bindClicks: function () {
        var that = this;
        /*点击开启盖世宝藏*/
        $('#btnStartGame').click(function () {
            $('.section-1').hide();
            $('.section-2').show();
            that.changePage1To2();
        });
        /*点击活动规则按钮*/
        $('#btnActRule').click(function () {
            $('#actRuleDialog').show();
        });
        /*关闭留资抽奖对话框*/
        $('#closeInfoDialog').click(function () {
            $('#infoDialog').hide();
        });
        /*关闭视频弹出框*/
        $('#closeVideoDialog').click(function () {
            $('#videoPlayer').get(0).pause();
            $('#videoDialog').hide();
        });
        /*关闭车型亮点弹出框*/
        $('#closeCarInfoDialog').click(function () {
            $('#carInfoDialog').hide();
        });
        /*关闭活动规则页面*/
        $('#closeActRuleDialog').click(function () {
            $('#actRuleDialog').hide();
        });
        /*关闭结果提示框*/
        $('#closeTipResultDialog').click(function () {
            $('#tipResultDialog').hide();
        });
        /*点击关闭用户信息框*/
        $('#closeUserInfoDialog').click(function () {
            $('#userInfoDialog').hide();
        });
        /*点击提交用户信息*/
        $('#btnSubmit').click(submitInfo);
        /*点击分享好友*/
        $('.btnDiscover').click(function () {
            $('#shareDialog').show();
        });
        /*点击分享浮层*/
        $('#shareDialog').click(function () {
            $(this).hide();
        });
        /*点击宋元菜单*/
        $('#itemSong').click(function () {
            $('#itemYuan').removeClass('hover');
            if (!$(this).hasClass('hover')) {
                $(this).addClass('hover');
            }
            that.loadSongInfo();
        });
        $('#itemYuan').click(function () {
            $('#itemSong').removeClass('hover');
            if (!$(this).hasClass('hover')) {
                $(this).addClass('hover');
            }
            that.loadYuanInfo();
        });
        /*end*/
    },
    fixPageSize: function () {
        /*播放器相关操作*/
        $('#videoPlayer').width($videoBox.width()).height($videoBox.height()).attr({'src': videoUrl,'poster': postUrl});
        $('#game-box').width(this.bgScale * imgWidth);
    },
    updateSwiperInfo: function (swiper, info) {
        swiper.removeAllSlides();
        swiper.appendSlide(info);
        swiper.update();
        swiper.slideTo(0, 1000, true);
    },
    loadYuanInfo: function () {
        var mainInfo = [], bottomInfo = [];
        carsInfo.yuan.forEach(function (e) {
            mainInfo.push('<div class="swiper-slide"><img src="src/carDetail/' + e.img + '" /><div class="titleFrame">' + e.title + '</div></div>');
            bottomInfo.push('<div class="swiper-slide"><div class="cover"></div><img src="src/carDetail/' + e.thumbImg + '" /></div>');
        });
        this.updateSwiperInfo(this.mainSwiper, mainInfo);
        this.updateSwiperInfo(this.bottomSwiper, bottomInfo);
    },
    loadSongInfo: function () {
        var mainInfo = [], bottomInfo = [];
        carsInfo.song.forEach(function (e) {
            mainInfo.push('<div class="swiper-slide"><img src="src/carDetail/' + e.img + '" /><div class="titleFrame">' + e.title + '</div></div>');
            bottomInfo.push('<div class="swiper-slide"><div class="cover"></div><img src="src/carDetail/' + e.thumbImg + '" /></div>');
        });
        this.updateSwiperInfo(this.mainSwiper, mainInfo);
        this.updateSwiperInfo(this.bottomSwiper, bottomInfo);
    },
    initBoxes: function () {
        var that = this;
        this.boxPoints.forEach(function (e) {
            $(e.el).css({
                'top': e.y * gamePlayer.bgScale ,
                'left': e.x * gamePlayer.bgScale
            }).click(function () {
                if (e.index == 0) {
                    $('#videoDialog').show();
                } else if (e.index == 1) {
                    $('#carInfoDialog').show();
                    that.initSwiper();
                    that.loadSongInfo();
                } else if (e.index == 2) {
                    $('#actRuleDialog').show();
                }

                if (!that.boxPoints[e.index].isOpened ) {
                    that.boxPoints[e.index].isOpened = true;
                    /*todo 展示宝箱打开动画 */
                    that.getKeyList.push(e.index);
                    that.updateKeyList();
                }
                console.log(that.boxPoints);
            });

        });
    },
    updateKeyList: function () {
        var content = '';
        for (var i =0;i< this.keyList.length; i ++) {
            content += '<li><img src="' + (i < this.getKeyList.length?'src/2-key-hover.png': 'src/2-key.png') + '"/></li>';
        }
        $('#keyList').html(content);

    }
};