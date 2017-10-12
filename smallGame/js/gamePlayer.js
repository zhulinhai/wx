/**
 * Created by zhulinhai on 17/9/26.
 */
var carImg = null,
    carDestroyImg = null,
    hammerImg = null,
    boomImg = null,
    roadImg = null;
var gamePlayer = {
    carPosX: 0,
    hammerPosX: 0,
    hammerPosY: 0,
    isGameOver: false,
    isDragHammer: false,
    isBackWard: false,
    hammerRect: null,
    carRect: null,
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src', 'images/1-title.png');
        currentScene = 1;
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);
        carImg = getImgByKey('car-1');
        carDestroyImg = getImgByKey('car-destroy-1');
        hammerImg = getImgByKey('hammer-1');
        boomImg = getImgByKey('boom-1');
        roadImg = getImgByKey('road-1');
        gamePlayer.isGameOver = false;
    },
    restartGame: function () {
        gamePlayer.init();
        gamePlayer.startGame();
    },
    destroy: function () {
        clearInterval(gameInterval);
        gameInterval = -1;
        clearInterval(timerInterval);
        timerInterval = -1;
        // 取消绑定手势事件
        unbindCanvasEvent();
    },
    startGame: function () {
        var canvas = gameCanvas;
        var ctx = gameCtx;
        gamePlayer.hammerPosY =  - (roadImg.height + carImg.height + hammerImg.height/4 )* scaleRate;
        gameInterval = setInterval(function () {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            if (!gamePlayer.isGameOver) {
                gamePlayer.drawRoad(ctx, canvas.width, canvas.height);
                gamePlayer.drawCar(ctx, canvas.width, canvas.height);
                gamePlayer.drawHammer(ctx, canvas.width, canvas.height);
            }
        }, 30);

        var count = 30;
        timerInterval = setInterval(function () {
            if (--count < 0) {
                gamePlayer.isGameOver = true;
                gamePlayer.destroy();
                // 游戏时间结束
                $('#tipFailDialog').show();
            } else {
                // 更新时间
                $('.time').html(count +"S'");
            }
        }, 1000);

        // 绑定手势事件
        bindCanvasEvent();
    },
    stopGame: function (ctx, maxW, maxH) {
        var carPosY = maxH - (roadImg.height + carDestroyImg.height) * scaleRate;
        ctx.clearRect(0,0, maxW, maxH);
        gamePlayer.drawRoad(ctx, maxW, maxH);
        ctx.drawImage(carDestroyImg, gamePlayer.carPosX, carPosY, carDestroyImg.width * scaleRate, carDestroyImg.height * scaleRate);

        // 计算压到车子的锤子状态
        var hammerH = hammerImg.height * scaleRate;
        var hammerTop =  - (carDestroyImg.height/2 + roadImg.height)* scaleRate - (hammerH - maxH);
        ctx.drawImage(hammerImg, gamePlayer.hammerPosX,  hammerTop, hammerImg.width * scaleRate, hammerImg.height * scaleRate);
        ctx.drawImage(boomImg, gamePlayer.carPosX - boomImg.width * scaleRate/4, carPosY - boomImg.height * scaleRate/2, boomImg.width * scaleRate, boomImg.height * scaleRate);

        gamePlayer.destroy();
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
            carImg = getImgByKey('carBack-1');
            gamePlayer.isBackWard = true;
        } else if (gamePlayer.carPosX< 0) {
            carImg = getImgByKey('car-1');
            gamePlayer.isBackWard = false;
        }
        var top = maxH - (roadImg.height + carImg.height) * scaleRate;
        ctx.drawImage(carImg, gamePlayer.carPosX, top, imgW, imgH);
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
    drawRoad: function (ctx, maxW, maxH) {
        var imgW = roadImg.width * scaleRate;
        var imgH = roadImg.height * scaleRate;
        ctx.drawImage(roadImg, 0, maxH - imgH, maxW, imgH);
    },
    hitCheck: function (offY) {
        if (gamePlayer.isDragHammer) {
            var hammerH = gamePlayer.hammerPosY + offY + gamePlayer.hammerRect.h;
            if (hammerH > gamePlayer.carRect.top) {
                if ( gamePlayer.hammerPosX > gamePlayer.carRect.left && gamePlayer.hammerPosX < (gamePlayer.carRect.left + gamePlayer.carRect.w)) {
                    gamePlayer.stopGame(gameCtx, gameCanvas.width, gameCanvas.height);
                    setTimeout(function () {
                        $('#tipSuccessDialog').show();
                    }, 1000);
                }
            } else {
                gamePlayer.hammerPosY += offY;
                gamePlayer.hammerPosY = Math.min(gamePlayer.carRect.top, gamePlayer.hammerPosY);
            }
        }
    },
    checkDragHammer: function (x, y) {
        // 是否可以拖动
        var rect = gamePlayer.hammerRect;
        if (x > rect.left && x < (rect.left + rect.w) && y > rect.top && y < (rect.top + rect.h)) {
            bStart = 1;
            gamePlayer.isDragHammer = true;
        }
    },
    endDragHammer: function () {
        gamePlayer.isDragHammer = false;
        gamePlayer.hammerPosY =   - (roadImg.height + carImg.height + hammerImg.height/4 )* scaleRate;
    }
};
