/**
 * Created by zhulinhai on 17/9/30.
 */
var mountainTop = 0, mountainMid = 184;
var jumpPlayer = {
    cloudPosX: 0,
    carPosX: 0,
    mountainOffX: 0,
    cloudImg: null,
    carImg: null,
    carTop: 0,
    mountainImg: null,
    carStep: 0,
    isGameOver: false,
    isMoveCar: false,
    isJumpedCar: false,
    isDragMountain: false,
    init: function () {
        $('.time').html("30S'");
        $('#sceneTitle').attr('src', 'images/scene2/2-title.png');
        gameCtx.clearRect(0,0,gameCanvas.width,gameCanvas.height);

        jumpPlayer.isGameOver = false;
        jumpPlayer.cloudPosX = 0;
        jumpPlayer.isMoveCar = false;
        jumpPlayer.carStep = 0;
        jumpPlayer.carPosX = 0;
        jumpPlayer.mountainOffX = 0;
        currentScene = 2;

        jumpPlayer.carImg = getImgByKey('car-2');
        jumpPlayer.cloudImg = getImgByKey('cloud-2');
        jumpPlayer.mountainImg = getImgByKey('mountain-2');

        mountainTop = gameCanvas.height - jumpPlayer.mountainImg.height * scaleRate;
        jumpPlayer.carTop = gameCanvas.height - jumpPlayer.mountainImg.height * scaleRate - jumpPlayer.carImg.height * scaleRate + 40 * scaleRate;
    },
    destroy: function () {
        clearInterval(gameInterval);
        gameInterval = -1;
        clearInterval(timerInterval);
        timerInterval = -1;
        jumpPlayer.isJumpedCar = false;
        unbindCanvasEvent();
    },
    startGame: function () {
        gameInterval = setInterval(function () {
            if (!jumpPlayer.isGameOver) {
                jumpPlayer.update();
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
                    jumpPlayer.stopGame();
                    setTimeout(function () {
                        $('#tipSuccessDialog').show();
                    }, 1000);
                }
            }
        }, 1000);

        jumpPlayer.carStep = 5;
        bindCanvasEvent();
    },
    stopGame: function () {
        jumpPlayer.isGameOver = true;
        jumpPlayer.destroy();
    },
    restartGame: function () {
        jumpPlayer.init();
        jumpPlayer.startGame();
    },
    update:function () {
        var canvas = gameCanvas;
        var ctx = gameCtx;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        jumpPlayer.drawCloud(ctx, canvas.width, canvas.height);
        jumpPlayer.drawMountain(ctx, canvas.width, canvas.height);
        jumpPlayer.drawCar(ctx, canvas.width, canvas.height);
    },
    drawCloud: function (ctx, maxW, maxH) {
        // if (!jumpPlayer.isGameOver) {
        //     jumpPlayer.cloudPosX+=1;
        //     if (jumpPlayer.cloudPosX > maxW) {
        //         jumpPlayer.cloudPosX = 0;
        //     }
        // }
        var img = jumpPlayer.cloudImg;
        ctx.drawImage(img, jumpPlayer.cloudPosX + 50* scaleRate, 100* scaleRate, img.width * scaleRate, img.height * scaleRate);
        // ctx.drawImage(img, jumpPlayer.cloudPosX - maxW, 100, img.width * scaleRate, img.height * scaleRate);
    },
    drawCar: function (ctx, maxW, maxH) {
        if (!jumpPlayer.isDragMountain && !jumpPlayer.isGameOver && jumpPlayer.isMoveCar) {
            jumpPlayer.carPosX += jumpPlayer.carStep;
            jumpPlayer.checkPassValley(jumpPlayer.carPosX);
        }
        var img = jumpPlayer.carImg;
        ctx.drawImage(img, jumpPlayer.carPosX, jumpPlayer.carTop, img.width * scaleRate, img.height * scaleRate);
    },
    drawMountain: function (ctx, maxW, maxH) {
        var img = jumpPlayer.mountainImg;
        ctx.drawImage(img, jumpPlayer.mountainOffX, mountainTop, img.width * scaleRate, img.height * scaleRate);
    },
    drawCarFallAni: function (ctx, maxW, maxH) {
        TWEEN.removeAll();
        var carTop = jumpPlayer.carTop;
        var img = jumpPlayer.carImg;
        var position = { y: carTop };
        var canvas = gameCanvas;
        var tweenC = new TWEEN.Tween(position);
        tweenC.to({ y: maxH }, 1000);
        tweenC.onUpdate(function() {
            jumpPlayer.carTop = this.y;
            jumpPlayer.update();
        });
        tweenC.onComplete(function () {
            jumpPlayer.stopGame();
            // 游戏时间结束
            $('#tipFailDialog').show();
        });
        tweenC.start();
        animate();

        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
    },
    jumpCar: function () {
        var carPosX = jumpPlayer.carPosX;
        var carTop = jumpPlayer.carTop;
        var position = { x: carPosX, y: carTop};
        var img = jumpPlayer.carImg;
        var imgW = img.width * scaleRate;
        var positionB = { x: carPosX + imgW/2, y: carTop - 100 * scaleRate };
        var ctx = gameCtx, canvas = gameCanvas;
        var tween = new TWEEN.Tween(position);
        tween.to(positionB, 500);
        tween.onUpdate(function() {
            jumpPlayer.carPosX = this.x;
            jumpPlayer.top = this.y;
            jumpPlayer.update();
        });

        var tweenB = new TWEEN.Tween(positionB);
        tweenB.to({ x: carPosX + imgW, y: carTop }, 500);
        tweenB.onUpdate(function() {
            jumpPlayer.carPosX = this.x;
            jumpPlayer.carTop = this.y;
            jumpPlayer.update();
        });
        tweenB.onComplete(function () {
            // 汽车跳跃结束
            jumpPlayer.isMoveCar = true;
        });
        tween.chain(tweenB);
        tween.start();
        tweenB.start();

        animate();

        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
    },
    checkDragMountain: function (x,y) {
        var img = jumpPlayer.carImg;
        if ( !jumpPlayer.isJumpedCar && x> jumpPlayer.carPosX && x < (jumpPlayer.carPosX + img.width * scaleRate) && y > jumpPlayer.carTop && y < (jumpPlayer.carTop + img.height * scaleRate) ) {
            jumpPlayer.isJumpedCar = true;
            jumpPlayer.jumpCar();
            return;
        }

        // 是否可以拖动
        if (jumpPlayer.isJumpedCar && y > mountainTop && y < gameCanvas.height) {
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
    checkPassValley: function (carPosX) {
        if (carPosX > (jumpPlayer.mountainOffX  - jumpPlayer.carImg.width * scaleRate ) && carPosX < (jumpPlayer.mountainOffX + mountainMid * scaleRate + jumpPlayer.carImg.width * scaleRate )) {
            jumpPlayer.isMoveCar = false;
            jumpPlayer.drawCarFallAni(gameCtx, gameCanvas.width, gameCanvas.height);
        }
    },
    endMoveMountain: function () {
        jumpPlayer.isDragMountain = false;
    }
};
