/**
 * Created by zhulinhai on 17/10/9.
 */
var imageList = [
    {'key':'title-1','url':"images/1-title.png", 'img':null},
    {'key':'road-1','url':"images/1-road.png", 'img':null},
    {'key':'car-1','url':"images/1-car.png", 'img':null},
    {'key':'hammer-1','url':"images/1-hammer.png", 'img':null},
    {'key':'carBack-1','url':"images/1-carBack.png", 'img':null},
    {'key':'boom-1','url':"images/1-boom.png", 'img':null},
    {'key':'car-destroy-1','url':"images/1-car-destroy.png", 'img':null},
    {'key':'car-2','url':"images/scene2/2-car.png", 'img':null},
    {'key':'title-2','url':"images/scene2/2-title.png", 'img':null},
    {'key':'cloud-2','url':"images/scene2/2-cloud.png", 'img':null},
    {'key':'mountain-2','url':"images/scene2/2-mountain.png", 'img':null},
    {'key':'dance001-3','url':"images/scene3/3-dance_001.jpg", 'img':null},
    {'key':'dance002-3','url':"images/scene3/3-dance_002.jpg", 'img':null},
    {'key':'dance003-3','url':"images/scene3/3-dance_003.jpg", 'img':null},
    {'key':'dance004-3','url':"images/scene3/3-dance_004.jpg", 'img':null},
    {'key':'dance005-3','url':"images/scene3/3-dance_005.jpg", 'img':null},
    {'key':'dance006-3','url':"images/scene3/3-dance_006.jpg", 'img':null},
    {'key':'doorClose-3','url':"images/scene3/3-doorClose.png", 'img':null},
    {'key':'doorHalfOpen-3','url':"images/scene3/3-doorHalfOpen.png", 'img':null},
    {'key':'doorOpen-3','url':"images/scene3/3-doorOpen.png", 'img':null},
    {'key':'title-3','url':"images/scene3/3-title.png", 'img':null},
    {'key':'study-3','url':"images/scene3/3-study.png", 'img':null},
    {'key':'add-4','url':"images/scene4/4-add.png", 'img':null},
    {'key':'car-4','url':"images/scene4/4-car.png", 'img':null},
    {'key':'sub-4','url':"images/scene4/4-sub.png", 'img':null},
    {'key':'title-4','url':"images/scene4/4-title.png", 'img':null},
    {'key':'car-1-5','url':"images/scene5/car-1.png", 'img':null},
    {'key':'car-2-5','url':"images/scene5/car-2.png", 'img':null},
    {'key':'car-3-5','url':"images/scene5/car-3.png", 'img':null},
    {'key':'car-4-5','url':"images/scene5/car-4.png", 'img':null},
    {'key':'car-5-5','url':"images/scene5/car-5.png", 'img':null}
];

var currentScene = 0;
var scaleRate = 1;
var gameCanvas = null, gameCtx = null;
var gameInterval= -1, timerInterval= -1;
var musicPlayer = null;

window.onload = function () {
    loadImages(imageList, function () {
        $('#loadingDialog').hide();
        fixPageSize();
        $('#homeDialog').show();
    });
};

function startGame() {
    initCanvas();
    $('#homeDialog').hide();
    $('.scene').show();
    gamePlayer.init();
    gamePlayer.startGame();

    musicPlayer = document.getElementById('clickSound');
    if (musicPlayer.paused) {
        clickToggle();
    }
}

function clickToggle(){
    if (musicPlayer.paused){
        musicPlayer.play();
        $('#audioPlayer').css('background-position-x', 0).addClass('rotateRingAni');
    } else {
        musicPlayer.pause();
        $('#audioPlayer').css('background-position-x', '100%').removeClass('rotateRingAni');
    }
}

function getImgByKey(key) {
    var item = imageList.find(function (item, index, array) {
        return item.key === key;
    });
    return item.img;
}

function initCanvas() {
    scaleRate = $(document).width() / 375;

    var $canvasBox = $('.canvasBox');
    $canvasBox.height($('.scene').height() - 9 * 20 * scaleRate);
    var canvas = document.getElementById('gameCanvas');
    canvas.width = $canvasBox.width();
    canvas.height = $canvasBox.height();
    var ctx = canvas.getContext('2d');
    var ratio = toolHelper.getPixelRatio(ctx);
    /*兼容 iPhone 6 plus */
    if (ratio == 3) {
        scaleRate = 1.5;
    }
    canvas.style.height = canvas.height + 'px';
    canvas.style.width = canvas.width + 'px';
    canvas.width *= ratio;
    canvas.height *= ratio;
    gameCanvas = canvas;
    gameCtx = ctx;
}

function fixPageSize() {
    var domHeight =  $(document).height();
    var needHeight = 32 * 20 * scaleRate;
    if (needHeight > domHeight) {
        var scaleDom = domHeight / needHeight;
        $('#homeDialog').find('.content').css('-webkit-transform', 'scale(' + scaleDom + ')');
    }

    var overNeedHeight = 28 * 20 * scaleRate;
    if (overNeedHeight > domHeight) {
        var scaleOverDom = domHeight / overNeedHeight;
        $('#overPage').find('.content').css('-webkit-transform', 'scale(' + scaleOverDom + ')');
    }
}

function loadImages(sources,callback){
    var loadedImages = 0;
    var numImages = sources.length;
    for (var i=0;i< numImages; i++) {
        var image = new Image();
        image.onload = function(){
            var per=parseInt(loadedImages/numImages *100);
            var $loadingPercent = $('#loading-percent');
            $loadingPercent.html(per + '%');
            if (++loadedImages >= numImages) {
                $loadingPercent.html('100%');
                callback&&callback();
            }
        };
        image.src = sources[i].url;
        imageList[i].img = image;
    }
}

function showHelpDialog() {
    $('.tip-info').attr('src', 'images/tips/tip-scene' + currentScene + '.png');
    $('#helpTipDialog').show();
}

function closeTipDialog() {
    $('#helpTipDialog').hide();
}

function replayGame() {
    $('.tipDialog').hide();
    if (currentScene == 1) {
        gamePlayer.restartGame();
    } else if (currentScene == 2) {
        jumpPlayer.restartGame();
    } else if (currentScene == 3) {
        dancePlayer.restartGame();
    } else if (currentScene == 4) {
        carsPlayer.restartGame();
    } else if (currentScene == 5) {
        overlayPlayer.restartGame();
    }
}

function jumpNext() {
    $('.tipDialog').hide();
    if (currentScene == 1) {
        jumpPlayer.init();
        jumpPlayer.startGame();
    } else if (currentScene == 2) {
        dancePlayer.init();
        dancePlayer.startGame();
    } else if (currentScene == 3) {
        carsPlayer.init();
        carsPlayer.startGame();
    } else if (currentScene == 4) {
        overlayPlayer.init();
        overlayPlayer.startGame();
    }
}


// 移动相册的动作
var hasTouch = 'ontouchstart' in window;
var STA_EN = hasTouch ? "touchstart" : "mousedown",
    MV_EV = hasTouch ? "touchmove":"mousemove",
    END_EV = hasTouch ? "touchend" : "mouseup",
    END_Cancel = hasTouch ? "touchcancel" : "mouseout";
var bStart = 0;
var beginX,beginY;
function start(ev){
    ev.preventDefault();
    bStart = 1;
    var touches = ev.touches;
    var poi= toolHelper.windowToCanvas(gameCanvas,ev.clientX || ev.pageX || touches[0].clientX,ev.clientY || ev.pageY || touches[0].clientY);
    beginX = poi.x;
    beginY = poi.y;
    if (currentScene == 1) {
        gamePlayer.checkDragHammer(beginX, beginY);
    } else if (currentScene == 2) {
        jumpPlayer.checkDragMountain(beginX, beginY);
    } else if (currentScene == 3) {
        dancePlayer.holdStudyState();
    } else if (currentScene == 4) {
        carsPlayer.hitCheck(beginX, beginY);
    } else if (currentScene == 5) {
        overlayPlayer.tapCanvas();
    }
}

function move(ev){
    ev.preventDefault();
    if(bStart === 0)return;
    var touches = ev.touches;
    var poi = toolHelper.windowToCanvas(gameCanvas,ev.clientX || ev.pageX || touches[0].clientX,ev.clientY || ev.pageY || touches[0].clientY);
    var offsetX = poi.x - beginX,
        offsetY = poi.y - beginY;
    if (currentScene == 1) {
        gamePlayer.hitCheck(offsetY);
    } else if (currentScene == 2) {
        jumpPlayer.moveMountain(offsetX);
    } else if (currentScene == 4) {
        carsPlayer.moveCar(offsetX, offsetY);
    }
    beginX = poi.x;
    beginY = poi.y;
}

function end (ev) {
    ev.preventDefault();
    bStart = 0;
    beginX = 0;
    beginY = 0;
    if (currentScene == 1) {
        gamePlayer.endDragHammer();
    } else if (currentScene == 2) {
        jumpPlayer.endMoveMountain();
    } else if (currentScene == 3) {
        dancePlayer.recoverDanceSate();
    } else if (currentScene == 4) {
        carsPlayer.moveEnd();
    }
}

// 绑定Canvas事件绑定
function bindCanvasEvent() {
    gameCanvas.addEventListener(STA_EN,start,false);
    gameCanvas.addEventListener(MV_EV,move,false);
    gameCanvas.addEventListener(END_EV,end,false);
}

// 取消Canvas手势事件绑定
function unbindCanvasEvent() {
    gameCanvas.removeEventListener(STA_EN,start,false);
    gameCanvas.removeEventListener(MV_EV,move,false);
    gameCanvas.removeEventListener(END_EV,end,false);
}