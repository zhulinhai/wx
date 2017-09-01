/**
 * Created by zhulinhai on 17/8/28.
 */

require.config({
    baseUrl: "./js",
    paths: {
        "commit": "./libs/commitInfo",
        "helper": "./libs/helper",
        "wx_share": "./libs/wx_share",
        'mmd': './libs/mmd.videoPlayer.min',
        'player': './libs/videoPlayer',
        "jquery": "http://wx.bjczxda.com/public/scripts/jquery-1.12.1.min",
        "jweixin": 'http://res.wx.qq.com/open/js/jweixin-1.0.0',
        "pace": 'http://wx.bjczxda.com/public/scripts/pace'
    }
});

Pace.once('hide', function () {
    require(['commit', 'wx_share', 'jquery', 'player', 'mmd'], function (commit, wx_share, $, player) {
        document.getElementById('loading-percent').innerHTML = '100%';
        clearInterval(myInterval);
        myInterval = -1;
        $('#loadingDialog').hide();

        let src = 'src/email.mp4';
        let v_el = 'video_1', p_el = 'videoContainer';
        <!-- 初始化播放器相关 -->
        player.init(src, v_el, p_el);


        <!-- 预约时间绑定信息 -->
        commit.bindInfo();
        <!-- 初始化微信 -->
        wx_share.initWxConf();

    });
});

