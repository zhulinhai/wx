/**
 * Created by zhulinhai on 17/9/30.
 */
var mountainTop = 0;
var jumpPlayer = {
    cloudPosX: 0,
    carPosX: 0,
    mountainOffX: 0,
    cloudImg: null,
    carImg: null,
    mountainImg: null,
    carStep: 0,
    isGameOver: false,
    isDragMountain: false,
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src', 'images/scene2/2-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        jumpPlayer.isGameOver = false;
        jumpPlayer.cloudPosX = 0;
        mountainTop = 0;
        jumpPlayer.carStep = 0;
        jumpPlayer.carPosX = 0;
        currentScene = 2;

        jumpPlayer.carImg = new Image();
        jumpPlayer.carImg.src = 'images/scene2/2-car.png';
        jumpPlayer.cloudImg = new Image();
        jumpPlayer.cloudImg.src = 'images/scene2/2-cloud.png';
        jumpPlayer.mountainImg = new Image();
        jumpPlayer.mountainImg.src = 'images/scene2/2-mountain.png';
    },
    destroy: function () {
        clearInterval(gameInterval);
        gameInterval = -1;
        clearInterval(timerInterval);
        timerInterval = -1;

        unbindCanvasEvent();
    },
    startGame: function () {
        var canvas = gameCanvas;
        var ctx = gameCtx;
        gameInterval = setInterval(function () {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            if (!jumpPlayer.isGameOver) {
                jumpPlayer.drawCloud(ctx, canvas.width, canvas.height);
                jumpPlayer.drawMountain(ctx, canvas.width, canvas.height);
                jumpPlayer.drawCar(ctx, canvas.width, canvas.height);
            }
        }, 30);

        var count = 30;
        timerInterval = setInterval(function () {
            if (--count < 0) {
                jumpPlayer.isGameOver = true;
                jumpPlayer.destroy();
                // 游戏时间结束
                $('#tipFailDialog').show();
            } else {
                // 更新时间
                $('.time').html(count +"S'");

                if (jumpPlayer.carPosX >= gameCanvas.width) {
                    setTimeout(function () {
                        $('#tipSuccessDialog').show();
                    }, 2000);
                }
            }
        }, 1000);

        jumpPlayer.carStep = 2;
        bindCanvasEvent();
    },
    stopGame: function (ctx, maxW, maxH) {
        gamePlayer.destroy();
    },
    restartGame: function () {
        jumpPlayer.init();
        jumpPlayer.startGame();
    },
    drawCloud: function (ctx, maxW, maxH) {
        jumpPlayer.cloudPosX+=2;
        if (jumpPlayer.cloudPosX > maxW) {
            jumpPlayer.cloudPosX = 0;
        }
        var img = jumpPlayer.cloudImg;
        ctx.drawImage(img, jumpPlayer.cloudPosX, 100, img.width * scaleRate, img.height * scaleRate);
        ctx.drawImage(img, jumpPlayer.cloudPosX - maxW, 100, img.width * scaleRate, img.height * scaleRate);
    },
    drawCar: function (ctx, maxW, maxH) {
        if (!jumpPlayer.isDragMountain) {
            jumpPlayer.carPosX += jumpPlayer.carStep;
        }
        var img = jumpPlayer.carImg;
        var top = maxH - jumpPlayer.mountainImg.height * scaleRate - img.height * scaleRate + 40 * scaleRate;
        ctx.drawImage(img, jumpPlayer.carPosX, top, img.width * scaleRate, img.height * scaleRate);
    },
    drawMountain: function (ctx, maxW, maxH) {
        var img = jumpPlayer.mountainImg;
        if (mountainTop == 0) {
            mountainTop = maxH - jumpPlayer.mountainImg.height * scaleRate;
        }
        ctx.drawImage(img, jumpPlayer.mountainOffX, mountainTop, img.width * scaleRate, img.height * scaleRate);
    },
    checkDragMountain: function (x,y) {
        // 是否可以拖动
        if (y > mountainTop && y < gameCanvas.height) {
            jumpPlayer.isDragMountain = true;
        }
    },
    moveMountain: function (offX) {
        jumpPlayer.mountainOffX += offX;
        var minOffset = -(jumpPlayer.mountainImg.width * scaleRate - gameCanvas.width);
        if (jumpPlayer.mountainOffX <= minOffset) {
            jumpPlayer.mountainOffX = minOffset;
        } else if ( jumpPlayer.mountainOffX >= 0){
            jumpPlayer.mountainOffX = 0;
        }
    },
    checkGameOver: function () {
        jumpPlayer.isDragMountain = false;

    }
};
