/**
 * Created by zhulinhai on 17/8/28.
 */

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    },
    shim: {
        backbone: {
            deps: ['pace','jquery-1.12.1.min', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

define(['pace'], function () {
    paceOptions = {
        elements: true,
        restartOnRequestAfter: false
    };

    Pace.once('start',function(){
        let curProgress = 0, myInterval = -1;
        myInterval = setInterval(function(){
            let progress = parseInt(document.querySelectorAll('.pace-progress')[0].getAttribute("data-progress"));
            if (progress > curProgress) {
                document.getElementById('loading-percent').innerHTML = progress + '%';
                curProgress = progress;
            }
        },100);
    });

    Pace.once('hide', function () {
        clearInterval(myInterval);
        myInterval = -1;

        console.log('hide');
    });
});

