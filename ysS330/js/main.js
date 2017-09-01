/**
 * Created by zhulinhai on 17/9/1.
 */

let gamePlayer = {
    init: function () {
        this.resizeVideo();

    },
    initPlayer: function (src, v_id, p_id, ) {
        let player=new MMD.VideoPlayer(
            document.getElementById('videoContainer'),//video对象的父级div,这样有利于覆盖在video上方的内容对位,诸如loading,落地页等;
            document.getElementById('video_1'),//video对象;
            'src/email.mp4',//video地址;
            STANDARD_WIDTH,STANDARD_HEIGHT,//video原始宽高;
            'auto',//内容对齐方式:auto[根据video比例进行判断,铺满全屏,或裁剪高度或裁剪宽度],width[宽度显示完全],height[高度显示完全]
            true//竖屏/横屏:true/false;
        );

        if(player1.isVideoCanAutoPlay){//可以自动播放
            setTimeout(function(){
                player1.play();
            },1000);
        }else{//不能自动播放时
            $('#btnClick').show().click(function () {
                player1.play();
            });
        }

        return player;
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