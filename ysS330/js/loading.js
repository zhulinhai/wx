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
    launchDiv: null,
    myScroll: null,
    musicPlayer: null,
    startInterval: function () {
        loadingHandler.myInterval = setInterval(function(){
            let progress = parseInt(document.querySelectorAll('.pace-progress')[0].getAttribute("data-progress"));
            loadingHandler.setLoadingPercent(progress);
        },100);
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
        $('#loadingDialog').fadeOut(300);
        setTimeout(function () {
            loadingHandler.playPage1Ani();
        }, 300);
    },
    playPage1Ani: function () {
        this.launchDiv.addClass('launchAnimation');
        setTimeout(function () {
            $('.finger').show().addClass('fingerAnimation');
            $('#launchDialog').click(function () {
                $('#launchDialog').fadeOut(300);
                loadingHandler.playPage2Ani();
            });
        }, 3000);
    },
    playPage2Ani: function () {

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
        this.launchDiv = $('#launchDialog').find('.launchDiv');
        this.fixElSize(this.launchDiv);
        $('video').css({'width': document.body.clientWidth, 'height': document.body.clientWidth * STANDARD_HEIGHT/STANDARD_WIDTH });
        this.myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true, disablePointer: true, bounce: false, momentum: false });
        this.musicPlayer= document.getElementById('clickSound');
    }
};

Pace.on('hide', function() {
    loadingHandler.clearInterval();
    loadingHandler.initElements();
    setTimeout(function(){
        loadingHandler.changeLoadingToPage1();
    }, 1000);
});

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