const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

const paths = {
  src: {
    js: 'scripts/*.js',
    css: 'style/**/*.scss'
  },
  dest {
    js: 'assets/scripts/js/',
    css: 'assets/css/'
  }
}

gulp.task('pack-js', function () {
  return gulp.src(paths.src.js)
    .pipe(concat('allJavaScript.min.js'))
    .pipe(terser())
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('pack-css', function () {
  return gulp.src(paths.src.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(rename('allCss.min.css'))
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task('watch:scripts', function() {
  gulp.watch(paths.src.js, gulp.series('pack-js'));
});

gulp.task('watch:style', function() {
  gulp.watch(paths.src.css, gulp.series('pack-css'));
});

gulp.task('watch', gulp.parallel('watch:scripts', 'watch:style'));

gulp.task('default', gulp.series('watch'));
