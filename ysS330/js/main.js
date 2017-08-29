/**
 * Created by zhulinhai on 17/8/28.
 */


define(['pace'], function(pace){
    pace.start({
        elements: true,
        ajax: false,
        restartOnRequestAfter: false
    });

    pace.stop(function () {
        console.log('hide');
    });
});
