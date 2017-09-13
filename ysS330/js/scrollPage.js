/**
 * Created by zhulinhai on 17/9/12.
 */
var $downTip = $('#downTip');
var $s1 = $('.section-1'), $s2 = $('.section-2'), $s3 = $('.section-3'), $s4 = $('.section-4'), $s5 = $('.section-5');
var flag1 = false, flag2 = false, flag3 = false, flag4 = false, flag5 = false;

function updatePosition() {
    if (this.y <= this.maxScrollY ) {
        $downTip.hide();
    } else {
        $downTip.show();
    }

    var curY = Math.abs(parseInt( this.y));

    var h1 = parseInt($s1.height()),h2 = parseInt($s2.height()),h3 = parseInt($s3.height()),h4 = parseInt($s4.height()),h5 = parseInt($s5.height());

    // console.log('curY:' + curY + ' h1-2-2:' + (h1+h2/2) + ' h1-2:' + (h1+h2));
    console.log('curY:' + curY + ' h1-2-3:' + (h1+h2+h3) + ' maxY:' + this.maxScrollY);

    if ( curY >= 0 && curY <= (h1 + h2/2)) {
        if (!flag1) {
            playSection1Ani(this.y);
            flag1 = true;
        } else {
            $('#zhuifeijiCanvas').hide();
            $('#ximalayaCanvas').show();
            $('#placeHolder-1').hide();
        }
    } else if (curY >= (h1+h2/2) && curY < (h1+h2 + h3/2)) {
        if (!flag3) {
            playSection3Ani(curY);
            flag3 = true;
        } else {
            $('#ximalayaCanvas').hide();
            $('#placeHolder-1').show();
            $('#danceCanvas').hide();
            $('#zhuifeijiCanvas').show();
        }
    } else if (curY >= (h1+h2 + h3/2) && curY < (h1+h2+h3 + h4/2)) {
        if (!flag4) {
            playSection4Ani(curY);
            flag4 = true;
        } else {
            $('#zhuifeijiCanvas').hide();
            $('#placeHolder-2').show();
            $('#danceCanvas').show();
            $('#placeHolder-3').hide();
        }
    } else if (curY >= (h1+h2+h3) && curY <= Math.abs(parseInt( this.maxScrollY))) {
        if (!flag5) {
            playSection5Ani(curY);
            flag5 = true;
        } else {
            $('#placeHolder-3').show();
            $('#danceCanvas').hide();
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
    }, 1700);
    setTimeout(function () {
        $s1.find('.bottom').show().addClass('animated fadeInUp');
    }, 4500);
    setTimeout(function () {
        $s1.find('.car').show().addClass('animated fadeInRight');
        setTimeout(playSection2Ani, 1000);
    }, 5200);
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
    setTimeout(function () {
        $content.show();
    }, 3000);
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
    setTimeout(function () {
        $content.show();
    }, 3000);
}

function playSection4Ani(y) {
    var $tl = $s4.find('.titleFrame');
    var $topDiv = $s4.find('.topDiv');
    var $content = $s4.find('.content');
    $tl.show();
    $tl.find('title').show();
    /*雪花效果*/

    setTimeout(function () {
        $topDiv.show();
    }, 700);
    setTimeout(function () {

        loadingHandler.playGif('danceCanvas', loadingHandler.danceImages);
    }, 1400);
    setTimeout(function () {
        $content.show();
    }, 3000);
}

function playSection5Ani(y) {
    var $topDiv = $s5.find('.topDiv');
    var $content = $s5.find('.content');

    setTimeout(function () {
        $topDiv.show();
    }, 700);

    setTimeout(function () {
        $content.show();
    }, 1400);
}
