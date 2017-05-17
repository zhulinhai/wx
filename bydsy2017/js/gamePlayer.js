/**
 * Created by zhulinhai on 17/5/9.
 */
const imgWidth = 1280, imgHeight = 1055;
const videoUrl = 'http://vedio.yunmfang.com/bydVideo2017-480p.mp4';
const postUrl = 'src/placeHolder.png';
const $videoBox = $('.video-js-box');
const $keyTipDialog = $('#keyTipDialog');
const $actRuleDialog = $('#actRuleDialog');
const $videoDialog =  $('#videoDialog');
const $carInfoDialog = $('#carInfoDialog');
const $giftRuleDialog = $('#giftRuleDialog');
const $tipResultDialog = $('#tipResultDialog');
const $userInfoDialog = $('#userInfoDialog');
const provinces = dataList.province;
const cities = dataList.city;
const dealers = dataList.dealer;
const $province = $('#province'),
    $city = $('#city'),
    $dealer = $('#dealer');
const host = 'http://api.bjczxda.com/api';

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
        {'title':'质感软内饰','img':'_2-2.jpg','thumbImg':'_2.2.jpg'},
        {'title':'360°高清全景影像','img':'_2-3.jpg','thumbImg':'_2.3.jpg'},
        {'title':'大尺寸全景天窗','img':'2-4.jpg','thumbImg':'2.4.jpg'},
        {'title':'开放式CarPad安卓车载系统','img':'2-5.jpg','thumbImg':'2.5.jpg'},
        {'title':'行车记录仪','img':'2-6.jpg','thumbImg':'2.6.jpg'},
        {'title':'6速手自一体自动挡','img':'2-7.jpg','thumbImg':'2.7.jpg'},
        {'title':'6向电动座椅调节','img':'2-8.jpg','thumbImg':'2.8.jpg'},
        {'title':'时尚备胎','img':'2-9.jpg','thumbImg':'2.9.jpg'},
    ]
};
const keyInfoList = [
    '<div class="keyList"><img class="key key1" src="src/key.png" /></div><img class="congratulate" src="src/congratulate.png" alt="恭喜" /><div class="line"></div><p>您获得一把钥匙</p><p></p><div class="btnKeep"></div>',
    '<div class="keyList"><img class="key key2" src="src/key.png" /><img class="key" src="src/key.png" /></div><img class="congratulate" src="src/congratulate.png" alt="恭喜" /><div class="line"></div><p>您获得一把钥匙</p><p class="note">当前您已获得2把钥匙</p> <div class="btnKeep"></div>',
    '<div class="keyList"><img class="key key3" src="src/key.png" /><img class="key" src="src/key.png" /><img class="key" src="src/key.png" /></div><img class="congratulate" src="src/congratulate.png" alt="恭喜" /><div class="line"></div><p>您已获得3把钥匙可获得</p><p>一次抽奖机会</p><div class="btnReward"></div>'
];
const tipResultList = [
    '<div class="closeDiv"><img class="close closeResultDialog" src="src/close.jpg" alt="关闭" /></div><img class="result" src="src/result.png" /> <p  style="margin-bottom: 1.8rem">很遗憾，还差一点点就能获得宝藏。</p><div class="btnDiscover"></div>',
    '<div class="closeDiv"><img class="close closeResultDialog" src="src/close.jpg" alt="关闭" /></div><img class="title" src="src/title-1.png" /> <img class="result" src="src/result-2.png" /><p>恭喜您获得了比亚迪盖世宝藏1G流量。</p><div class="btnDiscover"></div>'
];
var gamePlayer = {
    imgWidth: 1280,
    imgHeight: 1055,
    bgScale: 1,
    myScroll: null,
    mainSwiper: null,
    bottomSwiper: null,
    isSubmitInfo: false,
    isPrize: -1,
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
        this.bindUserInfo();
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
    bindUserInfo: function () {
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

        for(var i = 0; i < provinces.length; i ++) $('#province').append('<option>'+provinces[i].p+'</option>');
    },
    changePage1To2: function () {
        var that = this;
        $('#section-1').addClass('section1OutAni');
        setTimeout(function () {
            $('#section-2').show().addClass('section2InAni');
            that.fixPageSize();
            that.initScroll();
            that.initBoxes();
        }, 1000);
        setTimeout(function () { $('#section-1').hide(); }, 2000);
        setTimeout(function(){
            $('#hint').show();
        },3000);

        setTimeout(function(){
            $('#hint').hide();
        },8000);
    },
    updateKeyTipInfo: function () {
        var index = this.getKeyList.length - 1;
        $keyTipDialog.find('.keyInfo').html(keyInfoList[index]);
        this.showKeyDialog($keyTipDialog);
        $('.btnReward').click(function () {
            gamePlayer.closeKeyDialog($keyTipDialog);
            setTimeout(function () {
                gamePlayer.showAniDialog($userInfoDialog);
            }, 700);
        });
        $('.btnKeep').click(function () {
            gamePlayer.closeKeyDialog($keyTipDialog);
        });
    },
    showKeyTipToast: function (keyIndex) {
        if (this.getKeyList.indexOf(keyIndex) < 0) {
            this.getKeyList.push(keyIndex);
            this.updateKeyList();
            this.updateKeyTipInfo();
        } else {
            if (this.getKeyList.length === 3 && !this.isSubmitInfo) {
                this.showAniDialog($userInfoDialog);
            } else {
                $tipResultDialog.fadeIn(300);
            }
        }
    },
    bindClicks: function () {
        var that = this;
        /*点击开启盖世宝藏*/
        $('#btnStartGame').click(function () {
            that.changePage1To2();
        });
        $('#hint').click(function(){
            $('#hint').hide();
        });
        /*点击活动规则按钮*/
        $('#btnActRule').click(function () {
            that.showAniDialog($actRuleDialog);
        });
        /*关闭留资抽奖对话框*/
        $('#closeInfoDialog').click(function () {
            that.closeAniDialog($userInfoDialog);
        });
        /*关闭视频弹出框*/
        $('#closeVideoDialog').click(function () {
            $('#videoPlayer').get(0).pause();
            that.closeSpotDialog($videoDialog, 0);
        });
        /*关闭车型亮点弹出框*/
        $('#closeCarInfoDialog').click(function () {
            that.closeSpotDialog($carInfoDialog, 1);
        });
        /*关闭奖品规则弹出框*/
        $('#closeGiftRuleDialog').click(function () {
            that.closeSpotDialog($giftRuleDialog, 2);
        });
        /*关闭活动规则页面*/
        $('#closeActRuleDialog').click(function () {
            that.closeAniDialog($actRuleDialog);
        });
        /*点击关闭用户信息框*/
        $('#closeUserInfoDialog').click(function () {
            that.closeAniDialog($userInfoDialog);
        });
        /*点击提交用户信息*/
        $('#btnSubmit').click(function () {
            that.submitInfo();
        });
        /*点击分享浮层*/
        $('#shareDialog').click(function () {
            $(this).fadeOut(300);
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
        /* 关闭获取key对话框*/
        $('#closeKeyTipDialog').click(function () {
            that.closeKeyDialog($keyTipDialog);
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
                if (!that.boxPoints[e.index].isOpened ) {
                    $(e.el).attr('src','./src/2-boxopen.png');
                    setTimeout(function () {
                        if (e.index == 0) {
                            that.showSpotDialog($videoDialog);
                        } else if (e.index == 1) {
                            that.showSpotDialog($carInfoDialog);
                            that.initSwiper();
                            that.loadSongInfo();
                        } else if (e.index == 2) {
                            that.showSpotDialog($giftRuleDialog);
                        }
                    }, 300);
                    that.boxPoints[e.index].isOpened = true;
                } else {
                    if (e.index == 0) {
                        that.showSpotDialog($videoDialog);
                    } else if (e.index == 1) {
                        that.showSpotDialog($carInfoDialog);
                    } else if (e.index == 2) {
                        that.showSpotDialog($giftRuleDialog);
                    }
                }
            });

        });
    },
    updateKeyList: function () {
        var content = '';
        for (var i =0;i< this.keyList.length; i ++) {
            content += '<li><img src="' + (i < this.getKeyList.length?'src/2-key-hover.png': 'src/2-key.png') + '"/></li>';
        }
        $('#keyList').html(content);
    },
    showSpotDialog: function (handler) {
        handler.fadeIn(300);
    },
    showAniDialog: function (handler) {
        handler.show();
        handler.find('.contentFrame').removeClass('bounceOutUp').addClass('animated bounceInDown');
    },
    showKeyDialog: function (handler) {
        handler.show();
        handler.find('.contentFrame').removeClass('zoomOutDown').addClass('animated zoomInDown');
    },
    closeAniDialog: function (handler) {
        handler.find('.contentFrame').removeClass('bounceInDown').addClass('bounceOutUp');
        setTimeout(function () {
            handler.fadeOut(300);
        }, 700);
    },
    closeSpotDialog: function (handler, index) {
        handler.fadeOut(300);
        if (index >= 0) {
            setTimeout(function () {
                gamePlayer.showKeyTipToast(index);
            }, 300);
        }
    },
    closeKeyDialog: function (handler) {
        handler.find('.contentFrame').removeClass('zoomInDown').addClass('zoomOutDown');
        setTimeout(function () {
            handler.fadeOut(300);
        }, 700);
    },
    submitInfo: function () {
        var name, mobile, province,city, dealer;
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

        var flag = request('flag');
        var url = host + '/byd/luckyDraw?flag=' + flag +'&name='+ name +'&mobile=' + mobile + '&province='+ province + '&city=' + city + '&dealer=' + dealer;
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
    }
};
gamePlayer.init();