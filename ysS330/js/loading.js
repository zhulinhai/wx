/**
 * Created by zhulinhai on 17/5/10.
 */
//pace加载页面
paceOptions = {
    elements: true,
    restartOnRequestAfter: false
};

let loadingHandler = {
    curProgress: 0,
    myInterval: -1,
    startInterval: function () {
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
        let myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true, bounce: false, momentum: false });
        let player1 = gamePlayer.createPlayer('videoContainer', 'video_1', 'src/launch.mp4');
        document.getElementById('video_1').addEventListener('ended',function(){
            $('#videoContainer').hide();
        });
        gamePlayer.playNow(player1, '#btnClick');
    }
};
loadingHandler.startInterval();

Pace.on('hide', function() {
    gamePlayer.resizeVideo();
    loadingHandler.clearInterval();
    loadingHandler.setLoadingPercent(100);
    setTimeout(function(){
        loadingHandler.changeLoadingToPage1();
    }, 1000);
});
// end pace加载