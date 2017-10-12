/**
 * Created by zhulinhai on 17/9/28.
 */
var carInterval = -1;
var scene5Images;
var overlayPlayer = {
    carList: null,
    currentIndex: -1,
    currentScale: 1,
    isBackWard: false,
    isGameOver: false,
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src', 'images/scene5/5-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        scene5Images = [getImgByKey('car-1-5'), getImgByKey('car-2-5'), getImgByKey('car-3-5'), getImgByKey('car-4-5'), getImgByKey('car-5-5')];
        this.carList = [];
        for (var i = 0; i< scene5Images.length; i++) {
            var item = [];
            item['carImg'] = scene5Images[i];
            item['scale'] = 1;
            item['isLand'] = false;
            this.carList[i] = item;
        }
        overlayPlayer.currentIndex = 0;
        overlayPlayer.isGameOver = false;
        overlayPlayer.isBackWard = false;
        currentScene = 5;
    },
    destroy: function () {
        clearInterval(gameInterval);
        gameInterval = -1;
        clearInterval(timerInterval);
        timerInterval = -1;
        clearInterval(carInterval);
        carInterval = -1;

        unbindCanvasEvent();
    },
    startGame: function () {
        var canvas = gameCanvas;
        var ctx = gameCtx;
        gameInterval = setInterval(function () {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            if (!overlayPlayer.isGameOver) {
                overlayPlayer.drawChangedCar(ctx, canvas.width, canvas.height);
                overlayPlayer.drawCars(ctx, canvas.width, canvas.height);
            }
        }, 30);

        var count = 30;
        timerInterval = setInterval(function () {
            if (--count < 0) {
                overlayPlayer.isGameOver = true;
                overlayPlayer.destroy();
                // 游戏时间结束
                $('#tipFailDialog').show();
            } else {
                // 更新时间
                $('.time').html(count +"S'");
            }
        }, 1000);

        carInterval = setInterval(function () {
            if (overlayPlayer.currentScale >= 1.4) {
                overlayPlayer.isBackWard = true;
            } else if (overlayPlayer.currentScale <= 0.6) {
                overlayPlayer.isBackWard = false;
            }
            if (overlayPlayer.isBackWard) {
                overlayPlayer.currentScale -= 0.2;
            } else {
                overlayPlayer.currentScale += 0.2;
            }
        }, 100);

        // 绑定手势事件
        bindCanvasEvent();
    },
    restartGame: function () {
        overlayPlayer.init();
        overlayPlayer.startGame();
    },
    drawChangedCar: function (ctx, maxW, maxH) {
        var item = overlayPlayer.carList[overlayPlayer.currentIndex];
        var carScale = overlayPlayer.currentScale;
        var carImg = item.carImg;
        var centerX = (maxW - carImg.width * scaleRate * carScale)/2;
        ctx.drawImage(carImg, centerX, 10, carImg.width * scaleRate * carScale, carImg.height * scaleRate * carScale);
    },
    drawCars: function (ctx, maxW, maxH) {
        var height = 0;
        for (var i = 0;i< overlayPlayer.carList.length; i++) {
            var item = overlayPlayer.carList[i];
            if (item.isLand) {
                var carImg = item.carImg;
                var carScale = item.scale;
                var carH = carImg.height * scaleRate * carScale;
                height += carH;
                var centerX = (maxW - carImg.width * scaleRate * carScale)/2;
                ctx.drawImage(carImg, centerX, maxH - height, carImg.width * scaleRate * carScale, carH);
            }
        }
    },
    checkGameOver: function () {
        if (overlayPlayer.currentIndex == 0) {
            return false;
        }
        var currentIndex = overlayPlayer.currentIndex;
        var currentScale = overlayPlayer.currentScale;
        var beforeScale = overlayPlayer.carList[--currentIndex].scale;
        return currentScale >= beforeScale;
    },
    tapCanvas: function () {
        if (overlayPlayer.checkGameOver()) {
            overlayPlayer.isGameOver = true;
            gameCtx.clearRect(0,0, gameCanvas.width, gameCanvas.height);
            overlayPlayer.drawCars(gameCtx, gameCanvas.width, gameCanvas.height);
            overlayPlayer.destroy();
            $('#tipFailDialog').show();
            return;
        }

        if (overlayPlayer.currentIndex >= 4) {
            overlayPlayer.carList[overlayPlayer.currentIndex].scale = overlayPlayer.currentScale;
            overlayPlayer.carList[overlayPlayer.currentIndex].isLand = true;
            gameCtx.clearRect(0,0, gameCanvas.width, gameCanvas.height);
            overlayPlayer.drawCars(gameCtx, gameCanvas.width, gameCanvas.height);
            overlayPlayer.destroy();
            $('#overPage').show();
            return;
        }
        overlayPlayer.carList[overlayPlayer.currentIndex].scale = overlayPlayer.currentScale;
        overlayPlayer.carList[overlayPlayer.currentIndex].isLand = true;
        overlayPlayer.currentIndex ++;
    }
};
