var gulp = require( 'gulp' ),
 // fontSpider = require( 'gulp-font-spider' );

// gulp.watch(['./index.html']);
// gulp.task('fontspider', function() {
//     return gulp.src('./index.html')
//         .pipe(fontSpider());
// });
//
// gulp.task('default', ['fontspider']);
//     concat = require("gulp-concat"),
    uglify = require("gulp-uglify");
//
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
        .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('./dist/js')); //压缩后的路径
});
//
gulp.task('default', ['minify-js']);

// <div style="display: none">1234567890Xx,
//     "我已经收集到50万公里幸福里程，感谢您的陪伴，只愿你们身体健康，未来我们还要一起走。",
//     "我已经收集到100万公里幸福里程，感谢您的陪伴，感恩同事的帮扶，未来我们还要一起走。",
//     "我已经收集到150万公里幸福里程，感谢您的陪伴，感恩同事的帮扶，还有从未懈怠过的自己，未来我依然会继续努力。",
// "我已经收集到200万公里幸福里程，感谢您的陪伴，感恩同事的帮扶，以及从未懈怠过的自己，还有，亲爱的，谢谢你对我的信赖，未来刚刚开始。"
// </div>