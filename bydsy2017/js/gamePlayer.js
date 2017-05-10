/**
 * Created by zhulinhai on 17/5/9.
 */
const imgWidth = 1280, imgHeight = 1055;
const videoUrl = 'http://vedio.yunmfang.com/bydVideo2017-480p.mp4';
let gamePlayer = {
    imgWidth: 1280,
    imgHeight: 1055,
    bgScale: 1,
    myScroll: null,
    keyList: [1, 3, 5],
    getKeyList: [],
    boxPoints: [
        {'index': 0,'el': '.box1','x': 210, 'y': 312, 'isOpened': false},
        {'index': 1,'el': '.box2','x': 210, 'y': 640, 'isOpened': false},
        {'index': 2,'el': '.box3','x': 450, 'y': 492, 'isOpened': false},
        {'index': 3,'el': '.box4','x': 780, 'y': 550, 'isOpened': false},
        {'index': 4,'el': '.box5','x': 1000, 'y': 142, 'isOpened': false},
        {'index': 5,'el': '.box6','x': 1080, 'y': 420, 'isOpened': false},
        {'index': 6,'el': '.box7','x': 1124, 'y': 934, 'isOpened': false}
    ],
    init: function () {
        this.bgScale = $(window).height() /imgHeight;
        this.fixPageSize();
        this.initScroll();
        this.initKeys();
        this.initBoxes();
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
    fixPageSize: function () {
        $('#game-box').width(this.bgScale * imgWidth);
    },
    initKeys: function () {
        let list = [];
        let sum = 0;
        /*产生三个随机数*/
        for (let i = 0; i< 3; i ++) {
            let randomNum = Math.floor(Math.random() * this.boxPoints.length);
            if ($.inArray(randomNum, list) < 0) {
                list.push(randomNum);
                sum += randomNum;
            }
        }
        /*如果产生相同随机数，则采用默认宝箱位置*/
        /*排除首屏三个宝箱全部开启情况*/
        if (list.length >= 3 && sum > 3) {
            this.keyList = list;
        }
        console.log(this.keyList);
    },
    initBoxes: function () {
        this.boxPoints.forEach(function (e) {
            $(e.el).css({
                'top': e.y * gamePlayer.bgScale ,
                'left': e.x * gamePlayer.bgScale
            }).click(function () {
                console.log('index:' + e.index + ' keyList:' + gamePlayer.keyList);
                if ($.inArray(e.index, gamePlayer.keyList) >= 0) {
                    gamePlayer.boxPoints[e.index].getKey = true;
                }
                gamePlayer.boxPoints[e.index].isOpened = true;
                console.log(gamePlayer.boxPoints);
            });

        });
    },
    showVideoDialog: function() {

    }
};