var gulp = require( 'gulp' ),
 fontSpider = require( 'gulp-font-spider' );

gulp.watch(['./index.html']);
gulp.task('fontspider', function() {
    return gulp.src('./index.html')
        .pipe(fontSpider());
});

gulp.task('default', ['fontspider']);
//     concat = require("gulp-concat"),
//     uglify = require("gulp-uglify");
//
// gulp.task('minify-js', function () {
//     gulp.src('js/*.js') // 要压缩的js文件
//         .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
//         .pipe(gulp.dest('./dist/js')); //压缩后的路径
// });
// //
// gulp.task('default', ['minify-js']);

// <div style="display: none">1234567890Xx,
// 我已收集到****公里幸福里程，感谢您的陪伴，
// 求学：一路的勤学苦练
// 工作：同事的帮扶鼓励
// 买车：从未懈怠的自己
// 成家：最亲爱的你携手
// 谢谢你们对我们的信赖，未来刚刚开始.
// </div>
// <div style="display: block">1234567890Xx,
// 我已收集到****公里幸福里程，感谢您的陪伴，
// 求学：一路的勤学苦练
// 工作：同事的帮扶鼓励
// 买车：从未懈怠的自己
// 成家：与最亲爱的你携手
// 谢谢你们对我们的信赖，未来刚刚开始.您今日已参与抽奖，请明日再来您的幸福里程已收集完，点击“下一步”前往兑换好礼您还未收集幸福里程，至少要收集一项才可参与活动！
// 您今日已参与抽奖，请明日继续参加，和好友一起兑换旅程好礼！
// </div>