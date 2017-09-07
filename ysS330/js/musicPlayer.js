/**
 * Created by zhulinhai on 17/9/7.
 */
let music= document.getElementById('clickSound');

function clickToggle(){
    if (music.paused){
        music.play();
        $('#audioPlayer').css('background-position-x', 0).addClass('rotateRingAni');
    } else {
        music.pause();
        $('#audioPlayer').css('background-position-x', '100%').removeClass('rotateRingAni');
    }
}