/**
 * Created by zhulinhai on 17/9/28.
 */
var carInterval = -1;
var overlayPlayer = {
    carList: null,
    currentIndex: -1,
    currentScale: 1,
    isBackWard: false,
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src', 'images/scene2/2-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        this.carList = [];
        var images = ['images/scene2/car-1.png','images/scene2/car-2.png','images/scene2/car-3.png','images/scene2/car-4.png','images/scene2/car-5.png'];
        for (var i = 0; i< images.length; i++) {
            var image = new Image();
            image.src = images[i];

            var item = [];
            item['carImg'] = image;
            item['scale'] = 1;
            item['isLand'] = false;
            this.carList[i] = item;
        }
        this.currentIndex = 0;

        $('#gameCanvas').click(function () {
            if (overlayPlayer.currentIndex >= 4) {
                overlayPlayer.destroy();
                return;
            }
            overlayPlayer.carList[overlayPlayer.currentIndex].scale = overlayPlayer.currentScale;
            overlayPlayer.carList[overlayPlayer.currentIndex].isLand = true;
            overlayPlayer.currentIndex ++;
            overlayPlayer.currentScale = 1;
            // 检测是否游戏结束
        });
    },
    destroy: function () {
        clearInterval(gameInterval);
        gameInterval = -1;
        clearInterval(timerInterval);
        timerInterval = -1;
        clearInterval(carInterval);
        carInterval = -1;
    },
    startGame: function () {
        overlayPlayer.init();

        var canvas = gameCanvas;
        var ctx = gameCtx;
        currentScene = 2;
        gameInterval = setInterval(function () {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            if (!overlayPlayer.isGameOver) {
                overlayPlayer.drawChangedCar(ctx, canvas.width, canvas.height);
                overlayPlayer.drawCars(ctx, canvas.width, canvas.height);
            } else {
                overlayPlayer.destroy();
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
            if (overlayPlayer.currentScale >= 1.2) {
                overlayPlayer.isBackWard = true;
            } else if (overlayPlayer.currentScale <= 0.8) {
                overlayPlayer.isBackWard = false;
            }
            if (overlayPlayer.isBackWard) {
                overlayPlayer.currentScale -= 0.1;
            } else {
                overlayPlayer.currentScale += 0.1;
            }
        }, 200);
    },
    restartGame: function () {
        overlayPlayer.startGame();
    },
    drawChangedCar: function (ctx, maxW, maxH) {
        var item = overlayPlayer.carList[overlayPlayer.currentIndex];
        var carScale = overlayPlayer.currentScale;
        var carImg = item.carImg;
        var centerX = (maxW - carImg.width * scaleRate * carScale)/2;
        gameCtx.drawImage(carImg, centerX, 10, carImg.width * scaleRate * carScale, carImg.height * scaleRate * carScale);
    },
    drawCars: function (ctx, maxW, maxH) {
        var height = 0;
        for (var i = 0;i< overlayPlayer.carList; i++) {
            var item = overlayPlayer.carList[i];
            if (item.isLand) {
                var carImg = item.carImg;
            }
        }

    }
};
