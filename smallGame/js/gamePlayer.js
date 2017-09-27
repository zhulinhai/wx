/**
 * Created by zhulinhai on 17/9/26.
 */
var carImg = null,
    carDestroyImg = null,
    hammerImg = null,
    boomImg = null,
    scaleRate = 1,
    gameCanvas = null,
    gameCtx = null;
var gamePlayer = {
    imageList: null,
    gameInterval: -1,
    timerInterval: -1,
    carPosX: 0,
    hammerPosX: 0,
    hammerPosY: 0,
    isGameOver: false,
    isDragHammer: false,
    isBackWard: false,
    hammerRect: null,
    carRect: null,
    init: function () {
        this.imageList = ["images/1-hammer.png","images/1-car.png","images/1-carBack.png", "images/1-boom.png","images/1-car-destroy.png"];
        this.loadImages(this.imageList, this.startGame);
    },
    getPixelRatio: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    },
    loadImages: function(sources,callback){
        var loadedImages = 0;
        var numImages = sources.length;
        for (var src in sources) {
            var image = new Image();
            image.onload = function(){
                var per=parseInt(loadedImages/numImages *100);
                gamePlayer.updatePercent(per);
                if (++loadedImages >= numImages) {
                    callback&&callback();
                }
            };
            image.src = sources[src];
        }
    },
    updatePercent: function (percent) {
        // 更新页面进度
    },
    startGame: function () {
        carImg = new Image();
        carImg.src = 'images/1-car.png';

        carDestroyImg = new Image();
        carDestroyImg.src = 'images/1-car-destroy.png';

        hammerImg = new Image();
        hammerImg.src = 'images/1-hammer.png';

        boomImg = new Image();
        boomImg.src = 'images/1-boom.png';

        var $canvasBox = $('.canvasBox');
        var canvas = document.getElementById('gameCanvas');
        canvas.width = $canvasBox.width();
        canvas.height = $canvasBox.height();
        var ctx = canvas.getContext('2d');
        var ratio = gamePlayer.getPixelRatio(ctx);
        if (ratio > 1) {
            canvas.style.height = canvas.height + 'px';
            canvas.style.width = canvas.width + 'px';
            canvas.width *= ratio;
            canvas.height *= ratio;
        }

        scaleRate = canvas.width / 710;
        gamePlayer.hammerPosY =  - hammerImg.height * scaleRate/2;
        gamePlayer.gameInterval = setInterval(function () {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            if (!gamePlayer.isGameOver) {
                gamePlayer.drawCar(ctx, canvas.width, canvas.height);
                gamePlayer.drawHammer(ctx, canvas.width, canvas.height);
            } else {
                gamePlayer.stopGame(ctx, canvas.width, canvas.height);
            }
        }, 30);

        var count = 30;
        gamePlayer.timerInterval = setInterval(function () {
            if (--count < 0) {
                gamePlayer.isGameOver = true;
                clearInterval(gamePlayer.gameInterval);
                gamePlayer.gameInterval = -1;
                gamePlayer.gameInterval = -1;

                clearInterval(gamePlayer.timerInterval);
                gamePlayer.timerInterval = -1;
                // 游戏时间结束
            } else {
                // 更新时间
                $('.time').html(count +"S'");
            }
        }, 1000);

        gameCanvas = canvas;
        gameCtx = ctx;
        canvas.addEventListener(STA_EN,start,false);
        canvas.addEventListener(MV_EV,move,false);
        canvas.addEventListener(END_EV,end,false);
    },
    stopGame: function (ctx, maxW, maxH) {
        clearInterval(gamePlayer.gameInterval);
        gamePlayer.gameInterval = -1;

        clearInterval(gamePlayer.timerInterval);
        gamePlayer.timerInterval = -1;

        var roadH = 194;
        var carPosY = maxH - (roadH + carDestroyImg.height) * scaleRate;
        ctx.clearRect(0,0, maxW, maxH);
        ctx.drawImage(carDestroyImg, gamePlayer.carPosX, carPosY, carDestroyImg.width * scaleRate, carDestroyImg.height * scaleRate);
        ctx.drawImage(hammerImg, gamePlayer.hammerPosX, -carDestroyImg.height/2 * scaleRate, hammerImg.width * scaleRate, hammerImg.height * scaleRate);
        ctx.drawImage(boomImg, gamePlayer.carPosX - boomImg.width * scaleRate/4, carPosY - boomImg.height * scaleRate/2, boomImg.width * scaleRate, boomImg.height * scaleRate);
    },
    drawCar: function (ctx, maxW, maxH) {
        if (gamePlayer.isBackWard) {
            gamePlayer.carPosX -= 10;
        } else {
            gamePlayer.carPosX += 10;
        }

        var imgW = carImg.width * scaleRate;
        var imgH = carImg.height * scaleRate;
        if (gamePlayer.carPosX > maxW - imgW) {
            carImg.src = 'images/1-carBack.png';
            gamePlayer.isBackWard = true;
        } else if (gamePlayer.carPosX< 0) {
            carImg.src = 'images/1-car.png';
            gamePlayer.isBackWard = false;
        }
        var top = maxH - (194 + carImg.height) * scaleRate;
        ctx.drawImage(carImg, gamePlayer.carPosX, top, imgW, imgH);
        ctx.restore();//恢复状态
        gamePlayer.carRect = {'top': top, 'left': gamePlayer.carPosX, 'w': imgW, 'h': imgH};
    },
    drawHammer: function (ctx, maxW, maxH) {
        if (!gamePlayer.isDragHammer) {
            gamePlayer.hammerPosX += 5;
        }

        if (gamePlayer.hammerPosX > maxW) {
            gamePlayer.hammerPosX = 0;
        }
        var imgW = hammerImg.width * scaleRate;
        var imgH = hammerImg.height * scaleRate;
        ctx.drawImage(hammerImg, gamePlayer.hammerPosX, gamePlayer.hammerPosY, imgW, imgH);
        gamePlayer.hammerRect = {'top': gamePlayer.hammerPosY, 'left': gamePlayer.hammerPosX, 'w': imgW, 'h': imgH};
    },
    hitCheck: function (offY) {
        var hammerH = gamePlayer.hammerPosY + gamePlayer.hammerRect.h;
        if (hammerH > gamePlayer.carRect.top) {
            if ( gamePlayer.hammerPosX > gamePlayer.carRect.left && gamePlayer.hammerPosX < (gamePlayer.carRect.left + gamePlayer.carRect.w)) {
                gamePlayer.stopGame(gameCtx, gameCanvas.width, gameCanvas.height);
            }
        } else {
            gamePlayer.hammerPosY += offY;
            gamePlayer.hammerPosY = Math.min(gamePlayer.carRect.top, gamePlayer.hammerPosY);

        }

    },
    checkDragHammer: function (x, y) {
        // 是否可以拖动
        var rect = gamePlayer.hammerRect;
        if (x > rect.left && x < (rect.left + rect.w) && y > rect.top && y < (rect.top + rect.h)) {
            bStart = 1;
            gamePlayer.isDragHammer = true;
            console.log('x:' + x + ' y:' + y);

        }
    }
    
};
gamePlayer.init();

// 移动相册的动作
var hasTouch = 'ontouchstart' in window;
var STA_EN = hasTouch ? "touchstart" : "mousedown",
    MV_EV = hasTouch ? "touchmove":"mousemove",
    END_EV = hasTouch ? "touchend" : "mouseup",
    END_Cancel = hasTouch ? "touchcancel" : "mouseout";
var bStart = 0;
var beginX,beginY,startX = 0,startY = 0;
function start(ev){
    ev.preventDefault();
    var touches = ev.touches;
    var poi=windowToCanvas(gameCanvas,ev.clientX || ev.pageX || touches[0].clientX,ev.clientY || ev.pageY || touches[0].clientY);
    beginX = poi.x;
    beginY = poi.y;
    // console.log('beginX:' + beginX + ' beginY:' + beginY);
    // console.log('rectHammer: top:' + gamePlayer.hammerRect.top + ' left:' + gamePlayer.hammerRect.left + ' w:' + gamePlayer.hammerRect.w + ' h:' + gamePlayer.hammerRect.h);
    gamePlayer.checkDragHammer(beginX, beginY);
}

function move(ev){
    ev.preventDefault();
    if(bStart === 0)return;
    var touches = ev.touches;
    var poi = windowToCanvas(gameCanvas,ev.clientX || ev.pageX || touches[0].clientX,ev.clientY || ev.pageY || touches[0].clientY);
    var offsetX = poi.x - beginX,
        offsetY = poi.y - beginY;
    gamePlayer.hitCheck(offsetY);
    beginX = poi.x;
    beginY = poi.y;
}

function end (ev) {
    ev.preventDefault();
    bStart = 0;
    gamePlayer.isDragHammer = false;
    gamePlayer.hammerPosY =  - hammerImg.height * scaleRate/2;
}

function windowToCanvas(canvas,x,y){
    var bbox = canvas.getBoundingClientRect();
    return {
        x:x - bbox.left - (bbox.width - canvas.width) / 2,
        y:y - bbox.top - (bbox.height - canvas.height) / 2
    };
}

(function () {
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
})();