/**
 * Created by zhulinhai on 17/9/12.
 */
var $downTip = $('#downTip');
var flag1 = false, flag2 = false, flag3 = false, flag4 = false, flag5 = false;

function updatePosition() {
    console.log(this.y + ' max:' + this.maxScrollY);
    if (this.y <= this.maxScrollY ) {
        $downTip.hide();
    } else {
        $downTip.show();
        var $section2 = $('.section-2');
        var $section3 = $('.section-3');
        var $section4 = $('.section-4');
        var $section5 = $('.section-5');
        var h1 = $('.section-1').height();
        var h2 = $section2.height();
        var h3 = $section3.height();
        var h4 = $section4.height();
        var h5 = $section5.height();
        if ( this.y <= 0 && this.y >= -h1) {
            playSection1Ani();
        } else if (this.y <= -h1 && this.y >= -(h1+h2)) {
            if (flag2) return;
            $section2.find('.titleFrame').fadeIn(300);
            $section2.find('.topDiv').fadeIn(300);
            $section2.find('.content').show();
            $('#ximalayaCanvas').show();
            loadingHandler.playGif('ximalayaCanvas', loadingHandler.ximalaImages);
            flag2 = true;
        } else if (this.y <= -(h1+h2) && this.y >= -(h1+h2+h3)) {
            if (flag3) return;
            $section3.find('.titleFrame').fadeIn(300);
            $section3.find('.topDiv').fadeIn(300);
            $section3.find('.content').show();
            $('#zhuifeijiCanvas').show();
            loadingHandler.playGif('zhuifeijiCanvas', loadingHandler.zfjImages);
            flag3 = true;
        } else  if (this.y <= -(h1+h2+h3) && this.y >= -(h1+h2+h3 + h5)) {
            if (flag4) return;
            $section4.find('.titleFrame').fadeIn(300);
            $section4.find('.topDiv').fadeIn(300);
            $section4.find('.content').show();
            $('#danceCanvas').show();
            loadingHandler.playGif('danceCanvas', loadingHandler.danceImages);
            flag4 = true;
        } else if (this.y <= -this.maxScrollY) {
            if (flag5) return;
            $section5.find('.topDiv').fadeIn(300);
            $section5.find('.content').show();
            $('#danceCnvas').hide();
            flag5 = true;
        }
    }
}

function playSection1Ani() {
    if (flag1) return;

    var $section1 = $('.section-1');
    var $tl = $section1.find('.titleFrame');
    var $content = $section1.find('.content');
    $tl.fadeIn(300);
    $content.show();
    setTimeout(function () {
        $section1.find('.bottom').fadeIn(300);
        $section1.find('.car').show();
        $downTip.show();
        flag1 = true;
    }, 2400);
}
