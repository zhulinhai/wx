/**
 * Created by zhulinhai on 17/9/11.
 */
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) { // 遍历传入的对象的属性
            if (Object.prototype.hasOwnProperty.call(source, key)) { // 只操作该实例上的属性和方法, 避免循环原型
                target[key] = source[key];
            }
        }
    }
    return target;
};

function Sprite(canvas, opts) {
    var defaults = {
        loop: false,  // 是否循环播放
        frameIndex: 0,  // 当前第几帧
        startFrameIndex: 0, // 其实渲染位置
        tickCount: 0, // 每个时间段内计数器
        ticksPerFrame: 1, // 每个渲染时间段帧数，通过这个来控制动画的渲染速度
        numberOfFrames: 1, // 动画总帧数
        numberOfPerLine: undefined, // 每行动画帧数
        width: 0, // 画布宽度
        height: 0, // 画屏高度
        sprite: undefined  // 图片 image 对象
    };

    var params = opts || {};
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.options = _extends({}, defaults, params);

    if (this.image) throw new Error('请传入图片对象');

    // 这里的取 Math.min() 的原因是，在 safari 下面，如果图片的大小超过了画布的大小，那么将不会渲染任何图像
    // 所以在这里，我们去画布和图片中的小者。
    this.options.width = Math.min(this.canvas.width, this.options.sprite.width);
    this.options.height = Math.min(this.canvas.height, this.options.sprite.height);
    if (!this.options.numberOfPerLine) {
        this.options.numberOfPerLine = this.options.numberOfFrames || 9999;
    }
}

Sprite.prototype.render = function () {
    this.ctx.clearRect(0, 0, this.options.width, this.options.height);
    // 核心绘制代码，主要使用了 canvas.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) API
    // this.options.frameIndex % this.options.numberOfPerLine 每次求余数，判断是否换行
    // Math.floor(this.options.frameIndex / this.options.numberOfPerLine)
    this.ctx.drawImage(this.options.sprite, this.options.width * (this.options.frameIndex % this.options.numberOfPerLine), this.options.height * Math.floor(this.options.frameIndex / this.options.numberOfPerLine), this.options.width, this.options.height, 0, 0, this.options.width, this.options.height);
};

Sprite.prototype.update = function () {
    this.options.tickCount++;
    // 控制帧率的核心部分，在每个绘制时间点，判断当前的计数器是否大于我们传入的值
    if (this.options.tickCount > this.options.ticksPerFrame) {
        this.options.tickCount = 0;

        // 动画循环判断
        if (this.options.frameIndex < this.options.numberOfFrames - 1) {
            this.options.frameIndex++;
        } else if (this.options.loop) {
            // 每次循环都从给定的 startFrameIndex 开始
            this.options.frameIndex = this.options.startFrameIndex;
        }
    }
};