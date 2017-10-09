/**
 * Created by zhulinhai on 17/9/28.
 */
var toolHelper = {
    getPixelRatio: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    },
    windowToCanvas: function (canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();
        return {
            x : (x - bbox.left) * (canvas.width / bbox.width),
            y : (y - bbox.top) * (canvas.height / bbox.height)
        };
    }
};
