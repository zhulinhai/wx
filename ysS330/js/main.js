/**
 * Created by zhulinhai on 17/8/28.
 */
require.config({
    baseUrl: "./js",
    paths: {
        "jquery": "./libs/jquery-1.12.1.min",
        'commit': './libs/commitInfo'
    }
});

require(['commit','jquery'], function (commit, $) {
    <!-- 预约时间绑定信息 -->
    commit.bindInfo();


});
