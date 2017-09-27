/**
 * Created by zhulinhai on 17/9/27.
 */

// 移动相册的动作
var hasTouch = 'ontouchstart' in window;
var STA_EN = hasTouch ? "touchstart" : "mousedown",
    MV_EV = hasTouch ? "touchmove":"mousemove",
    END_EV = hasTouch ? "touchend" : "mouseup",
    END_Cancel = hasTouch ? "touchcancel" : "mouseout";
var bStart = 0;
var beginX,beginY,startX = 0,startY = 0;
function start(ev){
    ev.preventDefault();
    bStart = 1;
    var touches = ev.touches;
    var poi=windowToCanvas(markCanvas,ev.clientX || ev.pageX || touches[0].clientX,ev.clientY || ev.pageY || touches[0].clientY);
    beginX = poi.x;
    beginY = poi.y;
    gamePlayer.checkDragMark(beginX, beginY);
}

function move(ev){
    ev.preventDefault();
    if(bStart === 0)return;
    var touches = ev.touches;
    var poi = windowToCanvas(markCanvas,ev.clientX || ev.pageX || touches[0].clientX,ev.clientY || ev.pageY || touches[0].clientY);
    var offsetX = poi.x - beginX,
        offsetY = poi.y - beginY;
    markDrawer.onDraw(offsetX,offsetY);
    beginX = poi.x;
    beginY = poi.y;
}

function end (ev) {
    ev.preventDefault();
    bStart = 0;
}

function windowToCanvas(canvas,x,y){
    var bbox = canvas.getBoundingClientRect();
    return {
        x:x - bbox.left - (bbox.width - canvas.width) / 2,
        y:y - bbox.top - (bbox.height - canvas.height) / 2
    };
}