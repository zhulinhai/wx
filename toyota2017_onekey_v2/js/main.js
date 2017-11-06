var pageSlider;
var codeInfoList = [
    {'tip':'images/5-result_A.png','lampClass':'lampA','codeImg': 'images/codeA.jpg'},
    {'tip':'images/5-result_B.png','lampClass':'lampB','codeImg': 'images/codeB.jpg'},
    {'tip':'images/5-result_C.png','lampClass':'lampC','codeImg': 'images/codeC.jpg'}
];
var $screen3 = $('.screen3');
var lampInterval = -1, curLampIndex = 0, isPage2Loaded = false;
function bindClicks() {
    $('#btnStart').click(function () {
        pageSlider.next();
    });

    $('#btnDetail').click(function () {
        $('#actRuleDialog').show().click(function () {
            $(this).hide();
        })
    });

    $('.icon8').click(function () {
        page2Ani();
    });

    $('#btnAllGet').click(function () {
        pageSlider.next();
    });

    $('#btnGetCode').click(function () {
        alert("获取验证码");
    });

    var resultIndex = 1;
    $('#btnSubmit').click(function () {
        // 多次提交，清除索引状态 todo


        // 获取结果 并设置结果展示内容
        var info = codeInfoList[resultIndex];
        $('.screen5 .lamp').addClass(info.lampClass);
        $('.screen5 .title').attr('src', info.tip);
        $('.screen5 .qrcode').attr('src', info.codeImg);
        // 切屏
        pageSlider.next();
    });

    $('#btnShare').click(function () {
        $('#shareDialog').show().click(function () {
            $(this).hide();
        });
    });
}
function page2Ani() {
    $('.icon8').css({
        'backgroundImage': 'url("images/2-logoHover.png")',
        'background-size': 'cover'
    });
    $('.screen2 li').css({
        'backgroundImage': 'url("images/2-bgNone.png")',
        'background-size': '5.7rem 5.6rem'
    });
    $('#itemCheck8').removeClass('uncheck');
    $('.hand').removeClass('handAni');

    $('.screen2 .title').hide();
    $('.screen2 .title-get').addClass('animated fadeInUp').show();
    setTimeout(function () {
        if (pageSlider.index === 1) {
            pageSlider.next();
        }
    }, 1700);
}

function startLampAni() {
    if (lampInterval == -1) {
        lampInterval = setInterval(function () {
            if (curLampIndex >= 2) {
                curLampIndex = 0;
            } else {
                curLampIndex++;
            }
            $('.lampLeft').css('background-position-x', curLampIndex * 50 + '%');
            $('.lampMid').css('background-position-x', (curLampIndex+1)%3 * 50 + '%');
            $('.lampRight').css('background-position-x', (curLampIndex+2)%3 * 50 + '%');
        }, 500);
    }
}
function stopLampAni() {
    if (lampInterval != -1) {
        clearInterval(lampInterval);
        lampInterval = -1;
        curLampIndex = 0;
    }
}

$(function () {
    pageSlider = new WxMoment.PageSlider({
        pages: $('.screen'),
        direction: 'vertical',          //可选，vertical 或 v 为上下滑动，horizontal 或 h 为左右滑动，默认为 vertical
        currentClass: 'current',        //可选, 当前屏的class (方便实现内容的进场动画)，默认值为 'current'
        rememberLastVisited: true,      //可选，记住上一次访问结束后的索引值，可用于实现页面返回后是否回到上次访问的页面
        animationPlayOnce: true,       //可选，切换页面时，动画只执行一次
        oninit: function () {

        },         //可选，初始化完成时的回调
        onbeforechange: function () {}, //可选，开始切换前的回调
        onchange: function () {
            if (this.index === 0) {
                startLampAni();
            } else  {
                stopLampAni();
            }
            if (this.index === 1) {
                // 2.5s未点击 自动跳转
                setTimeout(function () {
                    if (pageSlider.index === 1) {
                        page2Ani();
                    }
                }, 2500);
            }

            if (this.index === 2 && !isPage2Loaded) {
                isPage2Loaded = true;
                $('.screen3 .title').show().addClass('animated fadeInUp');
                setTimeout(function () {
                    $('.screen3 .tip').show().addClass('animated fadeInUp');
                    setTimeout(function () {
                        $('.screen3 .btnDetail').show();
                    }, 700);
                }, 300);
                setTimeout(function () {
                    $('.s-item1 .box').show().addClass('animated bounceInDown');
                    setTimeout(function () {
                        $('.s-item1 .light').show().addClass('animated flash infinite');
                        $('.s-item1 .gift-title').show().addClass('animated zoomIn');
                    }, 300);
                    setTimeout(function () {
                        $('.s-item1 .gift-txt01').show().addClass('animated fadeInUp');
                    }, 500);
                }, 1000);
                setTimeout(function () {
                    $('.s-item2 .box').show().addClass('animated bounceInDown');
                    setTimeout(function () {
                        $('.s-item2 .light').show().addClass('animated flash infinite');
                        $('.s-item2 .gift-title').show().addClass('animated zoomIn');
                    }, 300);
                    setTimeout(function () {
                        $('.s-item2 .gift-txt02').show().addClass('animated fadeInUp');
                        setTimeout(function () {
                            $('.s-item2 .p-1').show().addClass('animated fadeInUp');
                        }, 300);
                        setTimeout(function () {
                            $('.s-item2 .p-2').show().addClass('animated fadeInUp');
                        }, 600);
                    }, 500);
                }, 1500);
                setTimeout(function () {
                    $('.s-item3 .box').show().addClass('animated bounceInDown');
                    setTimeout(function () {
                        $('.s-item3 .light').show().addClass('animated flash infinite');
                        $('.s-item3 .gift-title').show().addClass('animated zoomIn');
                    }, 300);
                    setTimeout(function () {
                        $('.s-item3 .gift-txt03').show().addClass('animated fadeInUp');
                    }, 500);
                }, 2000);
                setTimeout(function () {
                    $('#btnAllGet').show();
                    $('.girl').show().addClass('animated fadeInUp');
                }, 2500);
            }
        },       //可选，每一屏切换完成时的回调
        onSwipeUp: function () {},      //可选，swipeUp 回调
        onSwipeDown: function () {},    //可选，swipeDown 回调
        onSwipeLeft: function () {},    //可选，swipeLeft 回调
        onSwipeRight: function () {}    //可选，swipeRight 回调
    });


    bindClicks();
    startLampAni();
    new WxMoment.OrientationTip();
});
