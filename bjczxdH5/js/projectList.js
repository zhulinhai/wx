/**
 * Created by zhulinhai on 16/6/2.
 */
var myScroll,wxScroll, weiboScroll,
    pullUpEl, pullUpOffset,
    isLoadedAll = false;
var infoList = "", pageIndex = 1, checkIndex = 0;
var filterList = ["showcase", "h5", "site", "vi"];

function initLoadInfo(index) {
    pageIndex = 1;
    checkIndex = index;
    infoList = "";
    isLoadedAll = false;
    $.cookie('checkIndex', index);
    //清除页面数据
    $('#itemsInfo').html("");
    myScroll.refresh();
    loadDataInfo();
}

function loadDataInfo(callBack) {
    $('.project-loading').show();
    var url="http://old.bjczxd.com//wp-json/wp/v2/posts?filter[category_name]="+ filterList[checkIndex] +"&page=" + pageIndex;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        jsonp: "callback",
        success: function(data){
            data = eval('(data)');
            $('.project-loading').hide();
            if (data.length <10) {
                // 数据加载完毕
                isLoadedAll = true;
            } else {
                isLoadedAll = false;
            }

            var info = "";
            data.forEach(function(e){
                var proInfo = e.excerpt.rendered;
                proInfo = proInfo.replace("<p>","");
                proInfo = proInfo.replace("</p>","");
                var link = "detail.html?info=" + encodeURI(e.content.rendered);
                if (e.yyjz_qcodeUrl.length > 2){
                    link = e.yyjz_qcodeUrl;
                }
                info +="<a href='" + link + "'><div class='item'><div class='imgFrame'>"+  e.yyjz_thumbnail +"</div>";
                info +="<p class='proName'>" + e.title.rendered;
                info += "</p></div></a>";
            });
            infoList += info;
            $('#itemsInfo').html(infoList);
            myScroll.refresh();
        },
        error:function(msg){
            msg = eval('(msg)');
            console.log(msg);
        }
    });
}

/**
 * 滚动翻页 （自定义实现此方法）
 * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
 */
function pullUpAction() {
    pageIndex ++;
    loadDataInfo();
}

/**
 * 初始化iScroll控件
 */
function loaded() {
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    myScroll = new iScroll('projectFrame', {
        scrollbarClass: 'myScrollbar', /* 重要样式 */
        useTransition: false, /* 此属性不知用意，本人从true改为false */
        //topOffset: pullUpOffset,
        onRefresh: function () {
            if (isLoadedAll) return;
            if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
            }
        },
        onScrollMove: function () {
            // 记录滚动的偏移
            if (isLoadedAll) return;
            if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpAction();
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                //this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (isLoadedAll) return;
            if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                pullUpAction(); // Execute custom function (ajax call?)
            }
        }
    });

    // 读取缓存和设置页面状态
    var index = $.cookie('checkIndex');
    if (index != null) {
        checkIndex = index;
    }
    initLoadInfo(checkIndex);
}

$(function(){
    loaded();
});

/*
* 禁止触摸事件
* */
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);