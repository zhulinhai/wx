/**
 * Created by zhulinhai on 17/9/12.
 */
var $downTip = $('#downTip');
var $s1 = $('.section-1'), $s2 = $('.section-2'), $s3 = $('.section-3'), $s4 = $('.section-4'), $s5 = $('.section-5');
var flag1 = false, flag2 = false, flag3 = false, flag4 = false, flag5 = false;
var $xmlyC = $('#ximalayaCanvas'), $zfjC = $('#zhuifeijiCanvas'), $danceC = $('#danceCanvas');
var $placeHolder1 = $('#placeHolder-1'), $placeHolder2 = $('#placeHolder-2'), $placeHolder3 = $('#placeHolder-3');

function updatePosition() {
    if (this.y <= this.maxScrollY ) {
        $downTip.hide();
    } else {
        $downTip.show();
    }

    var curY = Math.abs(parseInt( this.y)), maxY = Math.abs(parseInt( this.maxScrollY));
    var h1 = parseInt($s1.height()),h2 = parseInt($s2.height()),h3 = parseInt($s3.height()),h4 = parseInt($s4.height()),h5 = parseInt($s5.height());
    var s1H = (h1 + h2/2), s2H = (h1+h2 + h3/2), s3H = (h1+h2+h3 + h4/2), s4H = s3H + h5/2;
    if ( curY >= 0 && curY <= s1H) {
        if (!flag1) {
            playSection1Ani(curY);
            flag1 = true;
        } else {
            $zfjC.hide();
            $xmlyC.show();
            $placeHolder1.hide();
        }
        if (curY > (s1H - 30) && curY <= s1H) {
            $s2.find('.content').show();
        }
    } else if (curY > (s1H + h2/4) && curY <= s2H) {
        if (!flag3) {
            playSection3Ani(curY);
            flag3 = true;
        } else {
            $xmlyC.hide();
            $placeHolder1.show();
            $danceC.hide();
            $zfjC.show();
        }
        if (curY > (s2H - 30) && curY <= s2H) {
            $s3.find('.content').show();
        }
    } else if (curY > (s2H + h3/4) && curY <= s3H) {
        if (!flag4) {
            playSection4Ani(curY);
            flag4 = true;
        } else {
            $zfjC.hide();
            $placeHolder2.show();
            $danceC.show();
            $placeHolder3.hide();
        }
        if (curY > (s3H - 30) && curY <= s3H) {
            $s4.find('.content').show();
        }
    } else if (curY > (maxY - h5/2) && curY <= maxY) {
        $s5.find('.topDiv').show();
        $placeHolder3.show();
        $danceC.hide();
        if (curY > (maxY- 30) && curY <= maxY) {
            $s5.find('.content').show();
            setTimeout(function () {
                $('#infoFinger').show();
            }, 2100);
        }
    }
}

function playSection1Ani(y) {
    var $tl = $s1.find('.titleFrame');
    var $content = $s1.find('.content');
    $tl.show();
    $tl.find('title').show();
    $tl.find('sun').show();
    setTimeout(function () {
        $content.show();
    }, 700);
    setTimeout(function () {
        $s1.find('.bottom').show().addClass('animated fadeInUp');
    }, 3500);
    setTimeout(function () {
        $s1.find('.car').show().addClass('animated fadeInRight');
        setTimeout(playSection2Ani, 1000);
    }, 4200);
}

function playSection2Ani(y) {
    var $tl = $s2.find('.titleFrame');
    var $topDiv = $s2.find('.topDiv');
    var $content = $s2.find('.content');
    $tl.show();
    $tl.find('title').show();
    /*雪花效果*/

    setTimeout(function () {
        $topDiv.show();
    }, 700);
    setTimeout(function () {
        $('#ximalayaCanvas').show();
        loadingHandler.playGif('ximalayaCanvas', loadingHandler.ximalaImages);
        $downTip.show();
    }, 1400);
}

function playSection3Ani(y) {
    var $tl = $s3.find('.titleFrame');
    var $topDiv = $s3.find('.topDiv');
    var $content = $s3.find('.content');
    $tl.show();
    $tl.find('title').show();
    /*雪花效果*/

    setTimeout(function () {
        $topDiv.show();
    }, 700);
    setTimeout(function () {
        $('#zhuifeijiCanvas').show();
        loadingHandler.playGif('zhuifeijiCanvas', loadingHandler.zfjImages);
    }, 1400);
}

function playSection4Ani(y) {
    var $tl = $s4.find('.titleFrame');
    var $topDiv = $s4.find('.topDiv');
    var $content = $s4.find('.content');
    $tl.show();
    $tl.find('title').show();
    setTimeout(function () {
        $topDiv.show();
    }, 700);
    setTimeout(function () {
        $('#danceCanvas').show();
        loadingHandler.playGif('danceCanvas', loadingHandler.danceImages);
    }, 1400);
    setTimeout(function () {
        $content.show();
    }, 3000);
}
