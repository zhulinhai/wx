/**
 * 
 * @authors skylu (you@example.org)
 * @date    2017-12-01 15:47:10
 * @version $Id$
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var fontSpider = require( 'gulp-font-spider' );

gulp.watch(['scss/*.scss','./index.html'],['default']);

gulp.task('scss', function () {
   
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('css'));
   
});

gulp.task('fontspider', function() {
    return gulp.src('./index.html')
        .pipe(fontSpider());
});

gulp.task('default',['scss','fontspider']);