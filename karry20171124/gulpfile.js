/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-02 15:51:32
 * @version $Id$
 */

var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.watch('scss/*.scss',['default']);

gulp.task('scss', function () {
   
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('css'));
   
});

gulp.task('default',['scss']);