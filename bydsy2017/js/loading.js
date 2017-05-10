/**
 * Created by zhulinhai on 17/5/10.
 */
//pace加载页面
paceOptions = {
    elements: true,
    restartOnRequestAfter: false
};

var loadingHandler = {
    curProgress: 0,
    myInterval: -1,
    init: function () {
    },
    startInterval: function () {
        loadingHandler.myInterval = setInterval(function(){
            var progress = parseInt(document.querySelectorAll('.pace-progress')[0].getAttribute("data-progress"));
            loadingHandler.setLoadingPercent(progress);
        },100);
    },
    clearInterval: function () {
        clearInterval(loadingHandler.myInterval);
        loadingHandler.myInterval = -1;
    },
    setLoadingPercent: function (progress) {
        if (progress < loadingHandler.curProgress) {
            return;
        }
        document.getElementById('loading-percent').innerHTML = progress + '%';
        loadingHandler.curProgress = progress;
    },
    changeLoadingToPage1: function () {
        $('#loadingDialog').fadeOut(300);
        $('.section-1').show();
        // setTimeout(mainHandler.page1Animation, 300);
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