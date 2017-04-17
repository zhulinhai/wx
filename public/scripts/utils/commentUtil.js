/**
 * Created by luhao on 2017/4/17.
 */

/**
 * 将秒转换成:x天x小时x分x秒字符串
 * @param intDiff
 * @returns {string}
 */
function changeSecondToHms(intDiff){
    intDiff = parseInt(intDiff);
    var day = 0;
    var hour = 0;
    var minute = 0;
    var second = 0;

    day = Math.floor(intDiff / (60 * 60 * 24));
    hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
    minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
    second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);

    return (day ? day+'天' : '') + (hour? (hour  +  '小时') : '') +  (minute ? ( minute  +  '分') : '') +  second  +  '秒';
}