/**
 * Created by zhulinhai on 17/10/9.
 */
var scene4PrePath = 'images/scene4/';
var carsPlayer = {
    carImg: null,
    addImg: null,
    subImg: null,
    hSpace: 0,
    carsPosList: null,
    carsMoveList: null,
    btnRectList: null,
    isGameOver: false,
    isDragCar: false,
    dragIndex: -1,
    isDance: true,
    num: 1,
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src',  scene4PrePath + '4-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        currentScene = 4;
        carsPlayer.carImg = getImgByKey('car-4');
        carsPlayer.addImg = getImgByKey('add-4');
        carsPlayer.subImg = getImgByKey('sub-4');
        carsPlayer.isGameOver = false;
        carsPlayer.initCarsAndBtnPos();
    },
    initCarsAndBtnPos: function () {
        carsPlayer.num = 1;
        carsPlayer.carsPosList = [];
        carsPlayer.carsMoveList = [];

        var imgH = carsPlayer.carImg.height * scaleRate;
        var imgW = carsPlayer.carImg.width * scaleRate;
        var hSpace = (gameCanvas.height - 100 * scaleRate - imgH * 3)/4;
        for (var i =0 ;i< 3; i++) {
            for (var j = 0; j<2;j++) {
                var left = 0;
                var isDraw = true;
                if (i === 1) {
                    left = gameCanvas.width - (j+1) * (60 * scaleRate +  imgW);
                } else  {
                    left = (j+1) * 60 * scaleRate + j * imgW;
                }

                if (i== 2 && j==1) {
                    isDraw = false;
                }
                carsPlayer.carsPosList[i * 2 + j] = {'left': left,'top':(i + 1) * hSpace + i * imgH};
                carsPlayer.carsMoveList[i * 2 + j] = {'left': left,'top':(i + 1) * hSpace + i * imgH, 'isDraw': isDraw};
            }
        }

        carsPlayer.btnRectList = [];
        carsPlayer.btnRectList[0] = {'left': (gameCanvas.width - 288 * scaleRate)/2,'top': gameCanvas.height - 100 * scaleRate, 'w': 128 * scaleRate,'h':64 * scaleRate};
        carsPlayer.btnRectList[1] = {'left': (gameCanvas.width - 460 * scaleRate)/2,'top': gameCanvas.height - 100 * scaleRate, 'w': 64 * scaleRate,'h':64 * scaleRate};
        carsPlayer.btnRectList[2] = {'left': (gameCanvas.width + 20 * scaleRate)/2,'top': gameCanvas.height - 100 * scaleRate, 'w': 64 * scaleRate,'h':64 * scaleRate};
        carsPlayer.btnRectList[3] = {'left': (gameCanvas.width + 200 * scaleRate)/2,'top': gameCanvas.height - 100 * scaleRate, 'w': 128 * scaleRate,'h':64 * scaleRate};
    },
    destroy: function () {
        clearInterval(gameInterval);
        gameInterval = -1;
        clearInterval(timerInterval);
        timerInterval = -1;
        carsPlayer.carsPosList = null;
        carsPlayer.carsMoveList = null;
        carsPlayer.dragIndex = -1;
        unbindCanvasEvent();
    },
    startGame: function () {
        carsPlayer.updateInfo();

        var count = 30;
        timerInterval = setInterval(function () {
            if (--count < 0) {
                carsPlayer.stopGame();
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
    stopGame: function () {
        carsPlayer.isGameOver = true;
        carsPlayer.destroy();
    },
    restartGame: function () {
        carsPlayer.init();
        carsPlayer.startGame();
    },
    updateInfo: function () {
        var canvas = gameCanvas;
        var ctx = gameCtx;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        carsPlayer.drawCars(ctx, canvas.width, canvas.height);
        carsPlayer.drawCoverCars(ctx, canvas.width, canvas.height);
        carsPlayer.drawBottom(ctx, canvas.width, canvas.height);
    },
    drawCars: function (ctx, maxW, maxH) {
        var img = carsPlayer.carImg;
        var imgH = carsPlayer.carImg.height * scaleRate;
        var imgW = carsPlayer.carImg.width * scaleRate;

        var list = carsPlayer.carsPosList;
        list.forEach(function(item, index, array) {
            ctx.drawImage(img, item.left, item.top, imgW, imgH);
        });
    },
    drawCoverCars: function (ctx, maxW, maxH) {
        var img = carsPlayer.carImg;
        var imgH = carsPlayer.carImg.height * scaleRate;
        var imgW = carsPlayer.carImg.width * scaleRate;

        var list = carsPlayer.carsMoveList;
        list.forEach(function(item, index, array) {
            ctx.drawImage(img, item.left, item.top, imgW, imgH);
        });
    },
    drawBottom: function (ctx, maxW, maxH) {
        ctx.beginPath();
        ctx.lineWidth="5";
        ctx.strokeStyle="#000";
        carsPlayer.btnRectList.forEach(function(item, index, array) {
            drawRoundRect(ctx, item.left, item.top, item.w, item.h, 5);
            ctx.stroke();
        });

        ctx.font = "bold " + 40 * scaleRate +"px 'Microsoft YaHei UI'";
        ctx.textAlign = 'center';
        ctx.fillText(carsPlayer.num, (maxW - 160 * scaleRate)/2, maxH - 54 * scaleRate, 128 * scaleRate);
        ctx.fillText('提交', (maxW + 320 * scaleRate)/2, maxH - 54 * scaleRate, 128 * scaleRate);

        var addImg = carsPlayer.addImg;
        var subImg = carsPlayer.subImg;
        ctx.drawImage(addImg, (maxW - addImg.width * scaleRate + 80 * scaleRate) /2, maxH -  86* scaleRate, addImg.width * scaleRate, addImg.height * scaleRate);
        ctx.drawImage(subImg, (maxW + subImg.width * scaleRate - 460 * scaleRate) /2, maxH - 70 * scaleRate, subImg.width * scaleRate, subImg.height * scaleRate);
    },
    hitCheck: function (x, y) {
        var isBtnFrame = false;
        carsPlayer.btnRectList.every(function(item, index, array) {
            if (x > item.left && x < (item.left + item.w) && y > item.top && y <(item.top + item.h)) {
                if (index == 2) {
                    // 加
                    carsPlayer.num ++;
                    carsPlayer.updateInfo();
                    isBtnFrame = true;
                    return false;
                } else if (index == 1) {
                    // 减
                    carsPlayer.num --;
                    if (carsPlayer.num < 1) {
                        carsPlayer.num = 1;
                    }
                    carsPlayer.updateInfo();
                    isBtnFrame = true;
                    return false;
                } else if (index == 3) {
                    // 提交
                    carsPlayer.submitInfo();
                    isBtnFrame = true;
                    return false;
                }
            }
            return true;
        });

        if (!isBtnFrame) {
            carsPlayer.carsMoveList.every(function(item, index, array) {
                if (x > item.left && x < (item.left + carsPlayer.carImg.width * scaleRate) && y > item.top && y <(item.top + carsPlayer.carImg.height * scaleRate) && item.isDraw) {
                    carsPlayer.dragIndex = index;
                    return false;
                }
                return true;
            });
        }

    },
    moveCar: function (offX, offY) {
        // console.log('offX:' + offX + ' offY:' + offY);
        if (carsPlayer.dragIndex != -1) {
            carsPlayer.carsMoveList[carsPlayer.dragIndex].top += offY;
            carsPlayer.carsMoveList[carsPlayer.dragIndex].left += offX;
            carsPlayer.updateInfo();
        }
    },
    moveEnd: function () {
        carsPlayer.dragIndex = -1;
    },
    submitInfo: function () {
        var winNum = 11;
        carsPlayer.stopGame();
        if (carsPlayer.num === winNum) {
            $('#tipSuccessDialog').show();
        } else {
            // 游戏时间结束
            $('#tipFailDialog').show();
        }
    }
};

/*
* 绘制圆角矩形
* */
function drawRoundRect(ctx, x, y, width, height, radius){
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
    ctx.lineTo(width - radius + x, y);
    ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
    ctx.lineTo(width + x, height + y - radius);
    ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
    ctx.lineTo(radius + x, height +y);
    ctx.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
    ctx.closePath();
}
