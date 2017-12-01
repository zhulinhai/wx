/**
 * Created by zhulinhai on 17/11/30.
 */
var codeInfoList = [
    {'tip1':'世界上最漫长的时间','tip2':'就是等你的日子','bgImg':'src/4-1-pic.png','codeImg': 'src/codeA.jpg'},
    {'tip1':'我们很有家族相','tip2':'','bgImg':'src/4-2-pic.png','codeImg': 'src/codeB.jpg'},
    {'tip1':'拉钩拉到一辈子','tip2':'','bgImg':'src/4-3-pic.png','codeImg': 'src/codeC.jpg'}
];
var mainHandler = {
    pageSlider: null,
    musicPlayer: null,
    isUserTouch: false,
    init: function () {
        mainHandler.bindClicks();
        mainHandler.initSlider();

        // 横屏提示
        new WxMoment.OrientationTip();
    },
    initSlider: function () {
        this.pageSlider = new WxMoment.PageSlider({
            pages: $('.screen'),
            direction: 'vertical',          //可选，vertical 或 v 为上下滑动，horizontal 或 h 为左右滑动，默认为 vertical
            currentClass: 'current',        //可选, 当前屏的class (方便实现内容的进场动画)，默认值为 'current'
            rememberLastVisited: true,      //可选，记住上一次访问结束后的索引值，可用于实现页面返回后是否回到上次访问的页面
            animationPlayOnce: true,       //可选，切换页面时，动画只执行一次
            oninit: function () {
                Snowflake("snowflake");
                $('.screen1 .man').show().addClass('animated zoomIn');
                setTimeout(function () {
                    $('.screen1 .girl').show().addClass('animated fadeInRight');
                }, 500);
                setTimeout(function () {
                    $('.screen1 .gift').show().addClass('animated bounceInDown');
                    $('.screen1 .arrow').show();
                }, 800);
            },
            onchange: function () {
                if (this.index == 0) {
                    Snowflake("snowflake");
                } else {
                    stopSnow();
                }

                if (this.index == 1) {
                    /* 音乐播放状态  当前浏览器不支持自动播放 */
                    if (mainHandler.musicPlayer.paused && !mainHandler.isUserTouch) {
                        mainHandler.isUserTouch = true;
                        mainHandler.musicPlayer.play();
                    }
                    mainHandler.play2ContentAni();
                    $('.screen2 .div-1').show();
                    setTimeout(function () {
                        $('.screen2 .div-2').show();
                    }, 400);
                    setTimeout(function () {
                        $('.screen2 .div-3').show();
                    }, 800);
                } else {
                    TWEEN.removeAll();
                    $('.screen2 .div-1').hide();
                    $('.screen2 .div-2').hide();
                    $('.screen2 .div-3').hide();
                    $('.screen2 .content').height('0');
                    $('.screen2 .bottom').css({'top': '12.4rem'});
                }

            }
        });
    },
    play2ContentAni: function () {
        var position = { h : 0 };
        var tween = new TWEEN.Tween(position).to({h: 28}, 1000);
        tween.onUpdate(function(){
            $('.screen2 .content').height(this.h + 'rem');
            $('.screen2 .bottom').css({'top': Math.min(this.h + 12.4, 39.3) + 'rem'});
        });
        tween.start();

        requestAnimationFrame(animate);
        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
    },
    bindClicks: function () {
        this.musicPlayer = document.getElementById('clickSound');
        var music = mainHandler.musicPlayer;
        $('#audioPlayer').click(function () {
            mainHandler.isUserTouch = true;
            if (music.paused){
                music.play();
                $(this).css('background-position-x', 0).addClass('rotateRingAni');
            } else {
                music.pause();
                $(this).css('background-position-x', '100%').removeClass('rotateRingAni');
            }
        });

        $('#btnDetail').click(function () {
            var $actDialog = $('#actRuleDialog');
            $actDialog.show().find('.content').addClass('animated rollIn');
            $actDialog.find('.closeDiv').click(function () {
                $actDialog.find('.content').removeClass('animated rollIn').addClass('animated rollOut');
                setTimeout(function () {
                    $actDialog.hide().find('.content').removeClass('animated rollOut');
                }, 700);
            });
        });

        $('#btnGetCode').click(function () {
            alert("获取验证码");
        });

        var resultIndex = 1;
        $('#btnSubmit').click(function () {
            // 多次提交，清除索引状态 todo


            // 获取结果 并设置结果展示内容
            var info = codeInfoList[resultIndex];
            $('.screen4 .tipDialog').css('background-image','url('+ info.bgImg +')');
            $('.screen4 .p-1').html(info.tip1);
            $('.screen4 .p-2').html(info.tip2);
            $('.screen4 .qrCode').attr('src', info.codeImg);
            // 切屏
            mainHandler.pageSlider.next();
        });
    }
};

$(function () {
    mainHandler.init();
});


/* 下雪功能 */
var handleId = -1;
/**
 * 雪球
 * @param {[type]} elementName [description]
 */
function Snowflake(elementName) {

    var snowElement = document.getElementById(elementName)
    var canvasContext = snowElement.getContext("2d");
    var width = $(document).width();
    var height = $(document).height();

    //canvas尺寸修正
    snowElement.width = width;
    snowElement.height = height;
    snowElement.style.width = width;
    snowElement.style.height = height;

    //构建雪球的数量
    var snowNumber = 50;

    //构建雪球对象
    var snowArrObjs = initSnow(snowNumber, width, height);
    var snowArrNum = snowArrObjs.length;
    /**
     * 绘制页面
     * @return {[type]} [description]
     */
    var render = function() {
        //清理之前的矩形数据
        canvasContext.clearRect(0, 0, width, height);
        for (var i = 0; i < snowArrNum; ++i) {
            snowArrObjs[i].render(canvasContext);
        }
    };

    /**
     * 更新雪花
     * @return {[type]} [description]
     */
    var update = function() {
        for (var i = 0; i < snowArrNum; ++i) {
            snowArrObjs[i].update();
        }
    };

    /**
     * 绘制与更新
     * @return {[type]} [description]
     */
    var renderAndUpdate = function() {
        render();
        update();

        handleId = requestAnimationFrame(renderAndUpdate);
    };

    renderAndUpdate();
}

/*停止雪花*/
function stopSnow() {
    if (handleId != -1) {
        window.cancelAnimationFrame(handleId);
    }
}

function initSnow(snowNumber, width, height) {
    //雪球参数
    var options = {
        //雪球的半球距离
        minRadius: 2,
        maxRadius: 6,
        // 运动的范围区域
        maxX: width,
        maxY: height,
        //速率
        minSpeedY: 0.5,
        maxSpeedY: 2,
        speedX: 0.2,
        //滤镜
        minAlpha: 0.2,
        maxAlpha: 0.5,
        minMoveX: 4,
        maxMoveX: 18
    };
    var snowArr = [];
    for (var i = 0; i < snowNumber; ++i) {
        snowArr[i] = new Snow(options);
    }
    return snowArr;
}

/**
 * 雪球类
 */
function Snow(snowSettings) {
    this.snowSettings = snowSettings;
    this.radius = randomInRange(snowSettings.minRadius, snowSettings.maxRadius);
    //初始的x位置
    this.initialX = Math.random() * snowSettings.maxX;
    this.y = -(Math.random() * 500);
    //运行的速率
    this.speedY = randomInRange(snowSettings.minSpeedY, snowSettings.maxSpeedY);
    this.speedX = snowSettings.speedX;
    //滤镜
    this.alpha = randomInRange(snowSettings.minAlpha, snowSettings.maxAlpha);
    //角度.默认是360
    this.angle = Math.random(Math.PI * 2);
    //运行的距离
    this.x = this.initialX + Math.sin(this.angle);
    //x移动距离
    this.moveX = randomInRange(snowSettings.minMoveX, snowSettings.maxMoveX);
}

/**
 * 绘制雪球
 * @param  {[type]} canvasContext [description]
 * @return {[type]}               [description]
 */
Snow.prototype.render = function(canvasContext) {
    //清除路径
    //开始一个画布中的一条新路径（或者子路径的一个集合）
    canvasContext.beginPath();
    //用来填充路径的当前的颜色，白色的雪球
    canvasContext.fillStyle = "rgba(255, 255, 255, " + this.alpha + ")";
    canvasContext.shadowBlur= 10;
    canvasContext.shadowColor="#fff";
    //一个中心点和半径，为一个画布的当前子路径添加一条弧线
    //坐标，圆，沿着圆指定弧的开始点和结束点的一个角度
    //弧沿着圆周的逆时针方向（TRUE）还是顺时针方向（FALSE）遍历
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    //关闭子路径
    canvasContext.closePath();
    //fill() 方法使用 fillStyle 属性所指定的颜色、渐变和模式来填充当前路径
    canvasContext.fill();
};

Snow.prototype.update = function() {
    this.y += this.speedY;
    if (this.y > this.snowSettings.maxY) {
        this.y -= this.snowSettings.maxY;
    }
    this.angle += this.speedX;
    if (this.angle > Math.PI * 2) {
        this.angle -= Math.PI * 2;
    }
    //?
    this.x += this.speedX;
    if (this.x > this.snowSettings.maxX) {
        this.x -= this.snowSettings.maxX;
    }
};


/**
 * 随机处理
 * @param  {[type]} min [description]
 * @param  {[type]} max [description]
 * @return {[type]}     [description]
 */
function randomInRange(min, max) {
    var random = Math.random() * (max - min) + min;
    return random;
}