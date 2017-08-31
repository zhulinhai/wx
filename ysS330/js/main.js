/**
 * Created by zhulinhai on 17/8/28.
 */
require.config({
    baseUrl: "./js",
    paths: {
        "jquery": "./libs/jquery-1.12.1.min",
        "commit": "./libs/commitInfo",
        "helper": "./libs/helper",
        "jweixin": 'http://res.wx.qq.com/open/js/jweixin-1.0.0',
        "wx_share": "./libs/wx_share"
    }
});

require(['commit','jquery', 'wx_share'], function (commit, $, wx_share) {

    <!-- 预约时间绑定信息 -->
    commit.bindInfo();
    <!-- 初始化微信 -->
    wx_share.initWxConf();
});
