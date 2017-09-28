/**
 * Created by zhulinhai on 17/9/28.
 */
var overlayPlayer = {
    carImg: null,
    gameInterval: -1,
    changedCarRect: null,
    init: function () {
        $('.time').html("30S'");
        $('.title').attr('src', 'images/scene2/2-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);
        this.carImg = new Image();
        this.carImg.src = 'images/scene2/car-1.png';

        // 移动相册的动作
        var hasTouch = 'ontouchstart' in window;
        var STA_EN = hasTouch ? "touchstart" : "mousedown";
        var beginX,beginY;
        function start(ev){
            ev.preventDefault();
            var touches = ev.touches;
            var poi= toolHelper.windowToCanvas(gameCanvas,ev.clientX || ev.pageX || touches[0].clientX,ev.clientY || ev.pageY || touches[0].clientY);
            beginX = poi.x;
            beginY = poi.y;
            overlayPlayer.checkClickCar(beginX, beginY);
        }
        gameCanvas.addEventListener(STA_EN, start, false);
    },
    destroy: function () {
        gameCanvas.removeEventListener(STA_EN, start, false);
    },
    startGame: function () {
        var canvas = gameCanvas;
        var ctx = gameCtx;

        var centerX = (maxW - carImg.width * scaleRate)/2;
        gamePlayer.carRect = {'top': 10, 'left': centerX, 'w': carImg.width * scaleRate, 'h': carImg.height * scaleRate};

        overlayPlayer.gameInterval = setInterval(function () {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            if (!overlayPlayer.isGameOver) {
                overlayPlayer.drawChangedCar(ctx, canvas.width, canvas.height);
            } else {
                clearInterval(overlayPlayer.gameInterval);
                overlayPlayer.gameInterval = -1;
            }
        }, 30);
    },
    restartGame: function () {
        
    },
    drawChangedCar: function (ctx, maxW, maxH) {
        var carImg = overlayPlayer.carImg;
        var centerX = (maxW - carImg.width * scaleRate)/2;
        gameCtx.drawImage(carImg, centerX, 10, carImg.width * scaleRate, carImg.height * scaleRate);
        gamePlayer.carRect = {'top': 10, 'left': centerX, 'w': carImg.width * scaleRate, 'h': carImg.height * scaleRate};
    },
    drawCars: function (ctx, maxW, maxH) {

    },
    checkClickCar: function (x, y) {
        // 是否可以拖动
        var rect = overlayPlayer.changedCarRect;
        if (x > rect.left && x < (rect.left + rect.w) && y > rect.top && y < (rect.top + rect.h)) {
            bStart = 1;
            gamePlayer.isDragHammer = true;
        }
    }
};
