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
            });
        }, 1500);
    },
    playPage2Ani: function () {
        this.myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true, bounce: false, momentum: false });

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
    }
};

Pace.on('hide', function() {
    loadingHandler.clearInterval();
    loadingHandler.initElements();
    setTimeout(function(){
        loadingHandler.changeLoadingToPage1();
    }, 1000);
});

(function () {
    loadingHandler.startInterval();
})();

// end pace加载