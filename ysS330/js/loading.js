/**
 * Created by zhulinhai on 17/5/10.
 */
//pace加载页面
paceOptions = {
    elements: true,
    restartOnRequestAfter: false
};

const STANDARD_WIDTH = 750;
const STANDARD_HEIGHT = 1206;
const scale = STANDARD_WIDTH/STANDARD_HEIGHT;
let loadingHandler = {
    curProgress: 0,
    myInterval: -1,
    launchCanvas: null,
    myScroll: null,
    musicPlayer: null,
    isSpriteLoaded: false,
    spriteImage: null,
    startInterval: function () {
        loadingHandler.myInterval = setInterval(function(){
            let progress = parseInt(document.querySelectorAll('.pace-progress')[0].getAttribute("data-progress"));
            loadingHandler.setLoadingPercent(progress);
        },100);
        this.spriteImage = new Image();
        this.spriteImage.onload = function () {
            loadingHandler.isSpriteLoaded = true;
        };
        this.spriteImage.src = 'src/launch.jpg';
    },
    clearInterval: function () {
        clearInterval(this.myInterval);
        this.myInterval = -1;
        this.setLoadingPercent(100);
    },
    setLoadingPercent: function (progress) {
        if (progress < this.curProgress) {
            return;
        }
        document.getElementById('loading-percent').innerHTML = progress + '%';
        this.curProgress = progress;
    },
    changeLoadingToPage1: function () {
        $('#loadingDialog').hide();
        loadingHandler.playPage1Ani();
    },
    playLaunchAni: function () {
        let clientWidth = document.body.clientWidth;
        let clientHeight = document.body.clientHeight;
        let launchCanvas = document.getElementById('launchCanvas');
        launchCanvas.width = clientWidth;
        launchCanvas.height = clientHeight;
        let launchCtx = launchCanvas.getContext('2d');
        let spriteCanvas = document.createElement('canvas');
        spriteCanvas.width = STANDARD_WIDTH;
        spriteCanvas.height = STANDARD_HEIGHT;
        let sprite;

        if (this.isSpriteLoaded) {
            sprite = new Sprite(spriteCanvas, {
                sprite: this.spriteImage,
                loop: false,
                numberOfFrames: 30,
                ticksPerFrame: 2
            });
            spriteAnimate();

            function spriteAnimate() {
                requestAnimationFrame(spriteAnimate);
                sprite.render();
                sprite.update();
                launchCtx.drawImage(spriteCanvas, 0,0, clientWidth, clientHeight);
            }
        }

    },
    playPage1Ani: function () {
        this.playLaunchAni();

        // this.launchDiv.addClass('launchAnimation');
        setTimeout(function () {
            $('.finger').show().addClass('fingerAnimation');
            $('#launchDialog').click(function () {
                $('#launchDialog').fadeOut(300);
                loadingHandler.playPage2Ani();
            });
        }, 1600);
    },
    playPage2Ani: function () {
        $('#car-2').click(function () {
            $('#carInfoDialog').show();
        });
    },
    fixElSize: function (el) {
        const bodyW = document.body.clientWidth;
        const bodyH = document.body.clientHeight;
        let wRate = bodyW/STANDARD_WIDTH,
            hRate = bodyH/STANDARD_HEIGHT;
        let scaleRate = Math.max(wRate, hRate);
        el.css({
            'transform': 'scale(' + scaleRate + ')',
            '-webkit-transform': 'scale(' + scaleRate + ')'
        });

    },
    initElements: function () {
        <!-- fix launchDiv size -->
        // this.launchCanvas = document.getElementById('launchDiv');
        // this.fixElSize(this.launchCanvas);
        $('video').css({'width': document.body.clientWidth, 'height': document.body.clientWidth * STANDARD_HEIGHT/STANDARD_WIDTH });
        this.myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true, disablePointer: true, bounce: true, momentum: false });
        this.musicPlayer= document.getElementById('clickSound');
    }
};

function clickToggle(){
    let music = loadingHandler.musicPlayer;
    if (music.paused){
        music.play();
        $('#audioPlayer').css('background-position-x', 0).addClass('rotateRingAni');
    } else {
        music.pause();
        $('#audioPlayer').css('background-position-x', '100%').removeClass('rotateRingAni');
    }
}

function closeCommitDialog() {
    $('#commitDialog').hide();
}

Pace.on('hide', function() {
    loadingHandler.clearInterval();
    loadingHandler.initElements();
    setTimeout(function(){
        loadingHandler.changeLoadingToPage1();
    }, 1000);
});

(function () {
    loadingHandler.startInterval();

    /*
     * 禁止浏览器触摸事件
     * */
    document.addEventListener('touchmove', function(event){
        // 判断默认行为是否可以被禁用
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault();
            }
        }
    }, false);
})();

// end pace加载