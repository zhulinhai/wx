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
        setTimeout(function () {
            loadingHandler.playPage1Ani();
        }, 300);
        //$('#section-1').animate({top: 0}, 1000, function () {
        //    $(this).addClass('section1Ani');
        //    setTimeout(function () {
        //        loadingHandler.playPage1Ani();
        //    }, 1000);
        //});
    },
    playPage1Ani: function () {
        var $page1 = $('#section-1');
        var $box = $page1.find('.box');
        var $light = $page1.find('.light');
        var $stars = $page1.find('.stars');
        var $car1 = $page1.find('.car-1');
        var $car2 = $page1.find('.car-2');
        var $location1 = $page1.find('.location1'), $location2 = $page1.find('.location2'), $location3 = $page1.find('.location3');
        var $title1 = $page1.find('.title-1');
        var $btnStartGame = $('#btnStartGame'), $btnActRule = $('#btnActRule');
        $box.show().addClass('animated bounceInDown');
        setTimeout(function () {
            $box.addClass('open');
            $light.show().animate({opacity :'1'}, 300);
            setTimeout(function () {
                $stars.show();
            }, 400);
            setTimeout(function () {
                $car1.show().addClass('animated carIn-1');
                $car2.show().addClass('animated carIn-2');
                $title1.animate({width: '13.8rem'}, 1000);
            }, 700);
            setTimeout(function () {
                $location3.show().addClass('animated bounceInDown');
            }, 1400);
            setTimeout(function () {
                $location2.show().addClass('animated bounceInDown');
            }, 1600);
            setTimeout(function () {
                $location1.show().addClass('animated bounceInDown');
            }, 1800);
            //setTimeout(function () {
            //    $title1.animate({width: '13.8rem'}, 1000);
            //}, 2800);
            setTimeout(function () {
                $btnStartGame.show().addClass('animated fadeInUp');
                setTimeout(function () {
                    $btnStartGame.removeClass('animated fadeInUp').addClass('btnNucleusAni');
                    $btnActRule.show().addClass('animated fadeInUp');
                }, 1000);
            }, 2800);
        }, 1000);
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