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
    startInterval: function () {
        gamePlayer.init();
        loadingHandler.myInterval = setInterval(function(){
            let progress = parseInt(document.querySelectorAll('.pace-progress')[0].getAttribute("data-progress"));
            loadingHandler.setLoadingPercent(progress);
        },100);
    },
    clearInterval: function () {
        clearInterval(loadingHandler.myInterval);
        loadingHandler.myInterval = -1;
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

    }
};
loadingHandler.startInterval();

Pace.on('hide', function() {
    loadingHandler.clearInterval();
    loadingHandler.setLoadingPercent(100);
    setTimeout(function(){
        loadingHandler.changeLoadingToPage1();
    }, 1000);
});
// end pace加载