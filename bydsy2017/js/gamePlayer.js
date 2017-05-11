/**
 * Created by zhulinhai on 17/5/9.
 */
const imgWidth = 1280, imgHeight = 1055;
const videoUrl = 'http://vedio.yunmfang.com/bydVideo2017-480p.mp4';
const postUrl = 'src/placeHolder.png';
const $videoBox = $('.video-js-box');
var gamePlayer = {
    imgWidth: 1280,
    imgHeight: 1055,
    bgScale: 1,
    myScroll: null,
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
    bindClicks: function () {
        var that = this;
        /*点击开启盖世宝藏*/
        $('#btnStartGame').click(function () {
            $('.section-1').hide();
            $('.section-2').show();
            that.fixPageSize();
            that.initScroll();
            that.initBoxes();
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
        $('#closeUserInfoDialog').click(function () {
            $('#userInfoDialog').hide();
        });

        $('#btnSubmit').click(submitInfo);
    },
    fixPageSize: function () {
        /*播放器相关操作*/
        $('#videoPlayer').width($videoBox.width()).height($videoBox.height()).attr({'src': videoUrl,'poster': postUrl});
        $('#game-box').width(this.bgScale * imgWidth);
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