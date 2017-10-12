/**
 * Created by zhulinhai on 17/10/09.
 */

var danceImages, doorsImages, studyImg;
var danceIndex = 0;
var dancePlayer = {
    isGameOver: false,
    isDance: true,
    danceTime: 0,
    doorState: 0, /*0-close 1- half open  2- open*/
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src', ('images/scene3/3-title.png'));
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        currentScene = 3;
        danceImages = [getImgByKey('dance001-3'), getImgByKey('dance002-3'),getImgByKey('dance003-3'),getImgByKey('dance004-3'),getImgByKey('dance005-3'),getImgByKey('dance006-3'),];
        doorsImages = [getImgByKey('doorClose-3'),getImgByKey('doorHalfOpen-3'),getImgByKey('doorOpen-3')];
        studyImg = getImgByKey('study-3');
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
        var img = danceImages[danceIndex];
        var imgH = img.height * scaleRate;
        var imgW = img.width * scaleRate;
        ctx.drawImage(img, (maxW - imgW)/2, maxH - imgH, imgW, imgH);
    },
    drawStudyGirl: function (ctx, maxW, maxH) {
        var img = studyImg;
        var imgH = img.height * scaleRate;
        var imgW = img.width * scaleRate;
        ctx.drawImage(img, (maxW - imgW)/2, maxH - imgH - 50 * scaleRate, imgW, imgH);
    },
    drawDoor: function (ctx, maxW, maxH, index) {
        var img = doorsImages[index];
        var imgH = img.height * scaleRate;
        var imgW = img.width * scaleRate;
        ctx.drawImage(img, maxW - imgW - 40 * scaleRate, 40 * scaleRate, imgW, imgH);
    },
    holdStudyState: function () {
        dancePlayer.isDance = false;
    },
    recoverDanceSate: function () {
        dancePlayer.isDance = true;
    },
    controlDoorState: function () {
        var rndTime = 5 + 6 * Math.random();
        setTimeout(function () {
            if (!dancePlayer.isGameOver) {
                dancePlayer.mumComing();
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
                var interval = setInterval(function () {
                    if (dancePlayer.isDance) {
                        clearInterval(interval);
                        interval = -1;
                        dancePlayer.catchDanceGirl();
                    }
                }, 30);
                setTimeout(function () {
                    clearInterval(interval);
                    interval = -1;
                    dancePlayer.stopGame();
                    $('#tipSuccessDialog').show();
                }, 2000);
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
