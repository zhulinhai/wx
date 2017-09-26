/**
 * Created by zhulinhai on 17/9/26.
 */
var gamePlayer = {
    imageList: null,
    init: function () {
        var canvas = document.getElementById('gameCanvas');
        canvas.width = $('.canvasBox').width();
        canvas.height = $('.canvasBox').height();

        this.imageList = ["images/1-car.png", "images/1-boom.png","images/1-car-destroy.png"];
        this.loadImages(this.imageList, this.startGame);
    },
    getPixelRatio: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    },
    loadImages: function(sources,callback){
        var loadedImages = 0;
        var numImages = sources.length;
        for (var src in sources) {
            var image = new Image();
            image.onload = function(){
                var per=parseInt(loadedImages/numImages *100);
                gamePlayer.updatePercent(per);
                if (++loadedImages >= numImages) {
                    callback&&callback();
                }
            };
            image.src = sources[src];
        }
    },
    updatePercent: function (percent) {
        // 更新页面进度
    },
    startGame: function () {

    },
    stopGame: function () {

    }
};
gamePlayer.init();