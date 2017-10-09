/**
 * Created by zhulinhai on 17/10/09.
 */

var danceImages, doorsImages, studyImg, doorsImg, danceImg;
var danceIndex = 0, doorIndex = 0;
var scene3PrePath = 'images/scene3/';
var dancePlayer = {
    isGameOver: false,
    isDance: true,
    danceTime: 0,
    doorState: 0, /*0-close 1- half open  2- open*/
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src',  scene3PrePath + '3-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        currentScene = 3;
        danceImages = ["3-dance_001.jpg", "3-dance_002.jpg","3-dance_003.jpg","3-dance_004.jpg", "3-dance_005.jpg","3-dance_006.jpg"];
        doorsImages = ["3-doorClose.png","3-doorHalfOpen.png","3-doorOpen.png"];
        danceImg = new Image();
        studyImg = new Image();
        studyImg.src = scene3PrePath + '3-study.png';
        doorsImg = new Image();
        dancePlayer.isGameOver = false;
        dancePlayer.isDance = true;
        dancePlayer.doorState = 0;
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
            if (!dancePlayer.isGameOver) {
                if (dancePlayer.isDance) {
                    dancePlayer.drawDanceGirl(ctx, canvas.width, canvas.height);
                } else {
                    dancePlayer.drawStudyGirl(ctx, canvas.width, canvas.height);
                }
                dancePlayer.drawDoor(ctx, canvas.width, canvas.height, dancePlayer.doorState);
            }
        }, 200);

        var count = 30;
        timerInterval = setInterval(function () {
            if (--count < 0) {
                dancePlayer.stopGame();
                // 游戏时间结束
                $('#tipSuccessDialog').show();
            } else {
                // 更新时间
                $('.time').html(count +"S'");
            }
        }, 1000);

        // 绑定手势事件
        bindCanvasEvent();
        dancePlayer.controlDoorState();
    },
    stopGame: function () {
        dancePlayer.isGameOver = true;
        dancePlayer.destroy();
    },
    restartGame: function () {
        dancePlayer.init();
        dancePlayer.startGame();
    },
    drawDanceGirl: function (ctx, maxW, maxH) {
        danceIndex++;
        danceIndex %= 6;
        danceImg.src = scene3PrePath + danceImages[danceIndex];
        var img = danceImg;
        var imgH = img.height * scaleRate;
        var imgW = img.width * scaleRate;
        ctx.drawImage(img, (maxW - imgW)/2, maxW - imgW, imgW, imgH);
    },
    drawStudyGirl: function (ctx, maxW, maxH) {
        var img = studyImg;
        var imgH = img.height * scaleRate;
        var imgW = img.width * scaleRate;
        ctx.drawImage(img, (maxW - imgW)/2, maxH - imgH - 50, imgW, imgH);
    },
    drawDoor: function (ctx, maxW, maxH, index) {
        doorsImg.src = scene3PrePath + doorsImages[index];
        var img = doorsImg;
        var imgH = img.height * scaleRate;
        var imgW = img.width * scaleRate;
        ctx.drawImage(img, maxW - imgW - 20, 20, imgW, imgH);
    },
    changeDanceState: function () {
        dancePlayer.isDance = !dancePlayer.isDance;
    },
    controlDoorState: function () {
        var rndTime = 5 + 6 * Math.random();
        setTimeout(function () {
            if (!dancePlayer.isGameOver) {
                dancePlayer.mumComing();
                var rnd2Time = 5 + 6 * Math.random();
                setTimeout(function () {
                    if (!dancePlayer.isGameOver) {
                        dancePlayer.mumComing();
                    }
                }, rnd2Time * 1000);
            }
        }, rndTime * 1000);
    },
    mumComing: function () {
        dancePlayer.doorState = 1;
        setTimeout(function () {
            dancePlayer.doorState = 2;
            if (dancePlayer.isDance ) {
                dancePlayer.catchDanceGirl();
            } else {
                unbindCanvasEvent();
                setTimeout(function () {
                    bindCanvasEvent();
                    dancePlayer.doorState = 0;
                }, 1000);
            }
        }, 1000);
    },
    catchDanceGirl: function () {
        gameCtx.clearRect(0,0, gameCanvas.width, gameCanvas.height);
        dancePlayer.drawDoor(gameCtx, gameCanvas.width, gameCanvas.height, dancePlayer.doorState);
        dancePlayer.drawDanceGirl(gameCtx, gameCanvas.width, gameCanvas.height);
        dancePlayer.stopGame();
        $('#tipFailDialog').show();
    }
};
