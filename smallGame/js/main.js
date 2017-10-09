/**
 * Created by zhulinhai on 17/10/9.
 */
var imageList = ["images/1-road.png","images/1-hammer.png","images/1-car.png","images/1-carBack.png", "images/1-boom.png","images/1-car-destroy.png",
    "images/scene2/2-car.png", "images/scene2/2-title.png", "images/scene2/2-cloud.png", "images/scene2/2-mountain.png",
    "images/scene3/3-dance_001.jpg", "images/scene3/3-dance_002.jpg","images/scene3/3-dance_003.jpg","images/scene3/3-dance_004.jpg","images/scene3/3-dance_005.jpg","images/scene3/3-dance_006.jpg","images/scene3/3-doorClose.png","images/scene3/3-doorHalfOpen.png","images/scene3/3-doorOpen.png", "images/scene3/3-title.png","images/scene3/3-study.png",
    "images/scene4/4-add.png","images/scene4/4-car.png","images/scene4/4-sub.png","images/scene4/4-title.png",
    "images/scene5/car-1.png","images/scene5/car-2.png","images/scene5/car-3.png","images/scene5/car-4.png","images/scene5/car-5.png"];
var currentScene = 3;
var scaleRate = 1;
var gameCanvas = null, gameCtx = null;
var gameInterval= -1, timerInterval= -1;

window.onload = function () {
    scaleRate = document.documentElement.clientWidth / 375;
    loadImages(imageList, function () {
        setTimeout(function () {
            $('#loadingDialog').hide();
            initCanvas();
//                    gamePlayer.startGame();
            carsPlayer.init();
            carsPlayer.startGame();
        }, 1000);
    });
};

function initCanvas() {
    var $canvasBox = $('.canvasBox');
    $canvasBox.height($('.scene').height() - 9 * 20 * document.documentElement.clientWidth / 375);
    var canvas = document.getElementById('gameCanvas');
    canvas.width = $canvasBox.width();
    canvas.height = $canvasBox.height();
    var ctx = canvas.getContext('2d');
    var ratio = toolHelper.getPixelRatio(ctx);
    canvas.style.height = canvas.height + 'px';
    canvas.style.width = canvas.width + 'px';
    canvas.width *= ratio;
    canvas.height *= ratio;
    gameCanvas = canvas;
    gameCtx = ctx;
}

function loadImages(sources,callback){
    var loadedImages = 0;
    var numImages = sources.length;
    for (var src in sources) {
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
        image.src = sources[src];
    }
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
        dancePlayer.changeDanceState();
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
        gamePlayer.isDragHammer = false;
        gamePlayer.hammerPosY =   - (roadImg.height + carImg.height + hammerImg.height/4 )* scaleRate;
    } else if (currentScene == 2) {
        jumpPlayer.checkGameOver();
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