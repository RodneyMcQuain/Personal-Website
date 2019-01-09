const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

gulp.task('pack-js', function () {
  return gulp.src('scripts/*.js')
    .pipe(concat('allJavaScript.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('assets/scripts/'));
});

gulp.task('pack-css', function () {
  return gulp.src('style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(rename('allCss.min.css'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('watch:scripts', function() {
  gulp.watch('scripts/*.js', gulp.series('pack-js'));
});

gulp.task('watch:style', function() {
  gulp.watch('style/**/*.scss', gulp.series('pack-css'));
});

gulp.task('watch', gulp.parallel('watch:scripts', 'watch:style'));

gulp.task('default', gulp.series('watch'));
