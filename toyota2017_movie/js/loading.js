/**
 * Created by zhulinhai on 17/5/10.
 */
//pace加载页面
paceOptions = {
    elements: true,
    restartOnRequestAfter: false,
    ajax: false
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
    }
};
loadingHandler.startInterval();

Pace.on('done', function() {
    loadingHandler.clearInterval();
    loadingHandler.setLoadingPercent(100);

    var code = request('code');
    if (code && code != '') {
        main.getUserInfo(code, start);
    } else  {
        start();
    }

    function start() {
        $('#loadingDialog').hide();
        setTimeout(function () {
            main.init();
            main.playScreen1Ani();
            getSingPackage();
        }, 300);
    }

});
// end pace加载