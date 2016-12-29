/**
 * Created by luhao on 2016/12/28.
 */
/**
 * 微信分享
 */
var title ='0元起拍，开瑞K60心动“价”到，任性开走'; // 分享标题
var link ='http://wx.bjczxda.com/tjatse/html/index.html';
var desc = '快乐家庭7座SUV-开瑞K60震撼上市( 全网直播进行中)'; // 分享描述
var imgUrl = '';
/**
 * 页面部分
 */
var Http; //HttpUtil 对象
var remainTime = 0; //参数和价格显示的秒数
var rq = 0; //人气数

var host = 'http://api.bobo119.com/api/';

var updateTimeout = 0;

var loadInterval = null;


//window.onload = function(){
//
//}

//Pace.once('start',function(){
//
//});

Pace.once('hide',function(){
    /**
     * 元素加载完毕后执行
     */
    //clearInterval(loadInterval);
    //loadInterval = null;
    //initPage();
    //alert('加载完毕');
});

window.onload = function(){
    //Http = new Http(host);
    pageLoad();
}

/**
 * 页面加载
 */
function pageLoad() {

    loadInterval = setInterval(function(){
        var t = $('.pace-progress').attr('data-progress-text');
        t = parseInt(!t?0:t);
        $('#text').html(t +'%');
    },10);

}

/**
 * 初始化页面 （ajax）
 */
function initPage(){
    Http.ajaxRequest({uri:'jb/init',success:function (rt){
        if(rt.success){
            var data = rt.data;
            remainTime = rt.remain_time;
            rq = rt.rq;
        }
    }});
}
