/**
 * Created by zhulinhai on 17/10/9.
 */
var scene4PrePath = 'images/scene4/';
var carsPlayer = {
    carImg: null,
    addImg: null,
    subImg: null,
    isGameOver: false,
    isDance: true,
    num: 1,
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src',  scene4PrePath + '4-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        currentScene = 4;
        carsPlayer.carImg = new Image();
        carsPlayer.carImg.src =  scene4PrePath + '4-car.png';
        carsPlayer.addImg = new Image();
        carsPlayer.addImg.src =  scene4PrePath + '4-add.png';
        carsPlayer.subImg = new Image();
        carsPlayer.subImg.src =  scene4PrePath + '4-sub.png';
        carsPlayer.isGameOver = false;

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
        ctx.clearRect(0,0, canvas.width, canvas.height);
        carsPlayer.drawCars(ctx, canvas.width, canvas.height);
        carsPlayer.drawBottom(ctx, canvas.width, canvas.height);

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
    },
    stopGame: function () {
        carsPlayer.isGameOver = true;
        carsPlayer.destroy();
    },
    restartGame: function () {
        carsPlayer.init();
        carsPlayer.startGame();
    },
    drawCars: function (ctx, maxW, maxH) {
        var img = carsPlayer.carImg;
        var imgH = img.height * scaleRate;
        var imgW = img.width * scaleRate;
        var hSpace = (maxH - 100 * scaleRate - imgH * 3)/4;
        for (var i =0 ;i< 3; i++) {
            for (var j = 0; j<2;j++) {
                if (i === 1) {
                    ctx.drawImage(img, maxW - (j+1) * (60 * scaleRate +  imgW), (i + 1) * hSpace + i * imgH, imgW, imgH);
                } else {
                    ctx.drawImage(img, (j+1) * 60 * scaleRate + j * imgW, (i + 1) * hSpace + i * imgH, imgW, imgH);
                }
            }
        }
    },
    drawBottom: function (ctx, maxW, maxH) {
        ctx.beginPath();
        ctx.lineWidth="5";
        ctx.strokeStyle="#000";
        drawRoundRect(ctx, (maxW - 128 * scaleRate)/2, maxH - 100 * scaleRate, 128 * scaleRate, 64 * scaleRate, 5);
        ctx.stroke();
        drawRoundRect(ctx, (maxW - 300 * scaleRate)/2, maxH - 100 * scaleRate, 64 * scaleRate, 64 * scaleRate, 5);
        ctx.stroke();
        drawRoundRect(ctx, (maxW + 180 * scaleRate)/2, maxH - 100 * scaleRate, 64 * scaleRate, 64 * scaleRate, 5);
        ctx.stroke();

        ctx.font = "bold 32px serif";
        ctx.textAlign = 'center';
        ctx.fillText(carsPlayer.num, maxW/2, maxH - 64 * scaleRate, 128 * scaleRate);

        var addImg = carsPlayer.addImg;
        var subImg = carsPlayer.subImg;
        ctx.drawImage(addImg, (maxW + addImg.width * scaleRate - 300 * scaleRate) /2, maxH - 86 * scaleRate, addImg.width * scaleRate, addImg.height * scaleRate);
        ctx.drawImage(subImg, (maxW  + 180 * scaleRate ) /2, maxH - 86 * scaleRate, subImg.width * scaleRate, subImg.height * scaleRate);
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
