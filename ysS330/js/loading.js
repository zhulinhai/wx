/**
 * Created by zhulinhai on 17/5/10.
 */
//pace加载页面
paceOptions = {
    elements: true,
    ajax: false,
    restartOnRequestAfter: false
};

const STANDARD_WIDTH = 750;
const STANDARD_HEIGHT = 1206;
const scale = STANDARD_WIDTH/STANDARD_HEIGHT;
var loadingHandler = {
    curProgress: 0,
    myInterval: -1,
    launchCanvas: null,
    myScroll: null,
    actScroll: null,
    musicPlayer: null,
    isSpriteLoaded: false,
    isXimalayaLoaded: false,
    isZfjLoaded: false,
    isDanceLoaded: false,
    isUserClicked: false,
    launchImages: null,
    ximalaImages: null,
    zfjImages: null,
    danceImages: null,
    vWidth: 0,
    vHeight: 0,
    backCanvas: null,
    backCanvasCtx: null,
    loadImages: function (max_num, prePath, callBack) {
        var loadedNumbers = 0;
        var images = new Array(max_num);
        for (var i=0; i < max_num; i++) {
            var image = new Image();
            image.onload = function () {
                loadedNumbers++;
                if (loadedNumbers === max_num) {
                    callBack&&callBack(images);
                }
            };

            var path = '';
            if (i >= 99) {
                path = prePath.substring(0, prePath.length -1) + (i+1);
            } else if (i >= 9) {
                path = prePath + (i+1);
            } else {
                path = prePath + '0' + (i+1);
            }
            path+='.jpg';
            image.src = path;
            images[i] = image;
        }
    },
    startInterval: function () {
        this.myInterval = setInterval(function(){
            var progress = parseInt(document.querySelectorAll('.pace-progress')[0].getAttribute("data-progress"));
            loadingHandler.setLoadingPercent(progress);
        },100);
    },
    clearInterval: function () {
        clearInterval(this.myInterval);
        this.myInterval = -1;
    },
    setLoadingPercent: function (progress) {
        if (progress < this.curProgress) {
            return;
        }
        document.getElementById('loading-percent').innerHTML = progress + '%';
        this.curProgress = progress;
    },
    getPixelRatio: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    },
    drawImages: function (imageList, ctx, w, h , callBack, loop , topX, topY) {
        var index = 0;
        var differ = 0;
        var lastDate = new Date();
        this.backCanvas.width = w;
        this.backCanvas.height = h;

        var canvas = this.backCanvas;
        var canvasCtx = this.backCanvasCtx;

        function spriteAnimate() {
            if (index >= imageList.length) {
                if (loop) {
                    index = 0;
                    lastDate = new Date();
                    requestAnimationFrame(spriteAnimate);
                } else {
                    callBack&&callBack();
                }
            } else {
                var dateNow = new Date();
                differ = dateNow.getTime() - lastDate.getTime();
                /* 24帧 每秒 防止屏幕性能时间短，快速播放完 */
                if (differ < 1000/ 10) {
                    requestAnimationFrame(spriteAnimate);
                    return;
                }
                lastDate = dateNow;
                /*启用离屏渲染*/ //
                canvasCtx.drawImage(imageList[index ++], 0,0,canvas.width,canvas.height);
                ctx.drawImage(canvas, topX? topX:0, topY?topY:0, w, h);
                requestAnimationFrame(spriteAnimate);
            }
        }
        requestAnimationFrame(spriteAnimate);
    },
    playGif: function (el, images) {
        var c = document.getElementById(el);
        c.width = this.vWidth;
        c.height = this.vHeight;
        var ctx = c.getContext('2d');
        var ratio = this.getPixelRatio(ctx);
        if (ratio > 1) {
            // canvas循环，使用高倍像素，会导致黑屏或闪退，当前给定值
            c.style.height = c.height + 'px';
            c.style.width = c.width + 'px';
            c.width *= 1.5;
            c.height *= 1.5;
        }
        loadingHandler.drawImages(images, ctx, c.width, c.height, null, true);
    },
    playLaunchAni: function () {
        $('#launchDialog').show();
        $('#loadingDialog').hide();

        var c = document.getElementById('launchCanvas');
        var launchCtx = c.getContext('2d');
        var topX = 0, topY = 0;
        var ch = document.body.clientHeight;
        if (this.vHeight > ch) {
            c.width = this.vWidth;
            c.height = this.vHeight;
            topY = -(this.vHeight - ch) /2;
        } else {
            c.width = this.vWidth * ch / this.vHeight;
            c.height = ch;
            topX = -(c.width - this.vWidth) /2;
        }

        var ratio = this.getPixelRatio(launchCtx);
        if (ratio > 1) {
            c.style.height = c.height + 'px';
            c.style.width = c.width + 'px';
            c.width *= ratio;
            c.height *= ratio;
        }

        loadingHandler.drawImages(loadingHandler.launchImages, launchCtx, c.width, c.height, function () {
            $('#launchFinger').show().addClass('fingerAnimation');
            $('#launchDialog').click(loadingHandler.playPage1Ani);
        }, false, topX, topY);

    },
    playPage1Ani: function () {
        $('#wrapper').show();
        $('#launchDialog').hide();
        /* 音乐播放状态  当前浏览器不支持自动播放 */
        if (loadingHandler.musicPlayer.paused && !loadingHandler.isUserClicked) { clickToggle(); }

        loadingHandler.myScroll = new IScroll('#wrapper', {
            preventDefault: true,
            fixedScrollBar: true,
            mouseWheel: true,
            click: true,
            disablePointer: false,
            bounce: true,
            momentum: false,
            probeType: 2
        });
        loadingHandler.myScroll.on('scroll', updatePosition);
        playSection1Ani(0);
    },
    playPage2Ani: function () {
        if (loadingHandler.myScroll) {
            loadingHandler.myScroll.destroy();
            loadingHandler.myScroll = null;
        }
        $downTip.hide();
        $('#jumpVideo').hide();
        $('#wrapper').hide();
        showCommitDialog();
        // $('#carInfoDialog').show();
    },
    initElements: function () {
        this.backCanvas = document.createElement('canvas');
        this.backCanvasCtx = this.backCanvas.getContext('2d');
        this.musicPlayer= document.getElementById('clickSound');
        this.vWidth = document.body.clientWidth;
        this.vHeight = document.body.clientWidth /STANDARD_WIDTH * STANDARD_HEIGHT;
        $('.videoFrame').height( this.vHeight );
        var $dialogContent = $('#commitDialog').find('.contentFrame');
        $dialogContent.height(Math.max($dialogContent.height(), document.body.clientHeight  - 9 * 20 * (this.vWidth / 375)));
        initCarInfo();
    }
};

Pace.once('hide', function() {
    loadingHandler.clearInterval();
    loadingHandler.initElements();
    loadingHandler.loadImages(23, 'src/launch_2/launch_0', function (images) {
        loadingHandler.launchImages = images;
        loadingHandler.isSpriteLoaded = true;
    });

    loadingHandler.loadImages(35, 'src/ximalaya_2/ximalaya_00', function (images) {
        loadingHandler.ximalaImages = images;
        loadingHandler.isXimalayaLoaded = true;
    });

    loadingHandler.loadImages(35, 'src/zhuifeiji_2/zhuifeiji_00', function (images) {
        loadingHandler.zfjImages = images;
        loadingHandler.isZfjLoaded = true;
    });

    loadingHandler.loadImages(16, 'src/dance_2/dance_00', function (images) {
        loadingHandler.danceImages = images;
        loadingHandler.isDanceLoaded = true;
    });
    var checkInterval = setInterval(function(){
        if (loadingHandler.isSpriteLoaded && loadingHandler.isXimalayaLoaded && loadingHandler.isZfjLoaded && loadingHandler.isDanceLoaded ) {
            clearInterval(checkInterval);
            checkInterval = -1;
            loadingHandler.setLoadingPercent(100);
            loadingHandler.playLaunchAni();
        }
    },100);
});

function clickToggle(){
    loadingHandler.isUserClicked = true;
    var music = loadingHandler.musicPlayer;
    if (music.paused){
        music.play();
        $('#audioPlayer').css('background-position-x', 0).addClass('rotateRingAni');
    } else {
        music.pause();
        $('#audioPlayer').css('background-position-x', '100%').removeClass('rotateRingAni');
    }
}

function showCarInfoDialog() {
    $('#carInfoDialog').show();
}

function closeCarInfoDialog() {
    $('#carInfoDialog').hide();
}

function showCommitDialog() {
    $('#commitDialog').show();
    commitInfoHandler.bindInfo();
}

// function closeCommitDialog() {
//     $('#commitDialog').hide();
// }

function submitUserInfo() {
    commitInfoHandler.submitInfo();
}

function showActRuleDialog() {
    $('#actRuleDialog').show();
}

function closeActRuleDialog() {
    $('#actRuleDialog').hide();
}

function showTipDialog(isPrize) {
    // closeCommitDialog();

    var $tipDialog = $('#tipResultDialog');
    var imgUrl = 'src/4-dateSuccess.png';
    if (isPrize) {
        imgUrl = 'src/4-success.png';
    }
    $tipDialog.find('.contentFrame').css({'background':'url("' + imgUrl + '") no-repeat', 'background-size':'cover'});
    $tipDialog.show();
}

function closeTipDialog() {
    $('#tipResultDialog').hide();
}

function jumpVideo() {
    $('#launchDialog').hide();
    loadingHandler.playPage2Ani();
}

function clickCar() {
    loadingHandler.playPage2Ani();
}

(function () {
    loadingHandler.startInterval();

    //解决在android手机下软键盘遮住输入框的问题
    if(/Android [4-6]/.test(navigator.appVersion)) {
        window.addEventListener("resize", function() {
            if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
                window.setTimeout(function() {
                    document.activeElement.scrollIntoViewIfNeeded();
                },0);
            }
        })
    }

    /*
     * 禁止浏览器触摸事件
     * */
    document.addEventListener('touchmove', function(event){
        // // 判断默认行为是否可以被禁用
        // if (event.cancelable) {
        //     // 判断默认行为是否已经被禁用
        //     if (!event.defaultPrevented) {
        //         event.preventDefault();
        //     }
        // }
    }, false);
})();

// end pace加载