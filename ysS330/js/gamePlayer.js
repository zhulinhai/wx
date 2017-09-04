/**
 * Created by zhulinhai on 17/9/1.
 */
const STANDARD_WIDTH = 750;
const STANDARD_HEIGHT = 1206;
const scale = STANDARD_WIDTH/STANDARD_HEIGHT;

let gamePlayer = {
    init: function () {
        this.resizeVideo();
    },
    createPlayer: function (vc, vi, src, el) {
        let player=new MMD.VideoPlayer(
            document.getElementById(vc),//video对象的父级div,这样有利于覆盖在video上方的内容对位,诸如loading,落地页等;
            document.getElementById(vi),//video对象;
            src,//video地址;
            STANDARD_WIDTH,STANDARD_HEIGHT,//video原始宽高;
            'auto',//内容对齐方式:auto[根据video比例进行判断,铺满全屏,或裁剪高度或裁剪宽度],width[宽度显示完全],height[高度显示完全]
            true//竖屏/横屏:true/false;
        );

        if(player.isVideoCanAutoPlay){//可以自动播放
            setTimeout(function(){
                player.play();
            },1000);
        }else{//不能自动播放时
            $(el).show().click(function () {
                player.play();
            });
        }

        return player;
    },
    playNow: function (player, el) { // 无法自动播放，点击el with #id 播放
        if(player.isVideoCanAutoPlay){//可以自动播放
            setTimeout(function(){
                player.play();
            },1000);
        }else{//不能自动播放时
            $(el).show().click(function () {
                player.play();
            });
        }
    },
    resizeVideo: function () {
        let videos = document.getElementsByClassName('video');
        let bodyW = document.body.clientWidth;
        let bodyH = document.body.clientHeight;
        let height = bodyW/scale;
        for(let i =0; i < videos.length; i++){
            let video = videos[i];
            if(height >= bodyH){
                video.style.width = bodyW + 'px';
                video.style.height = height + 'px';
                video.style.top = (bodyH-height) + 'px';
            }else {
                video.style.height = bodyH + 'px';
                video.style.width = bodyH * scale + 'px';
                video.style.left = (bodyW - scale * bodyH)/2 + 'px';
            }
        }
    }
};

(function () {
    gamePlayer.init();
    let player1 = gamePlayer.createPlayer('videoContainer', 'video_1', 'src/launch.mp4', '#btnClick');
    document.getElementById('video_1').addEventListener('stop', function () {
       console.log('end');
    });
})();
