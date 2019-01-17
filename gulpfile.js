const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

const paths = {
  src: {
    vendorJs: 'src/scripts/js/vendor/*.js',
    js: 'src/scripts/js/*.js',
    vendorCss: 'src/style/vendor/*.css',
    css: 'src/style/**/*.scss'
  },
  dest: {
    vendorJs: 'assets/scripts/js/vendor/',
    js: 'assets/scripts/js/',
    vendorCss: 'assets/css/vendor/',
    css: 'assets/css/'
  }
}

gulp.task('pack-js', function () {
  return gulp.src(paths.src.js)
    .pipe(concat('allJavaScript.min.js'))
    .pipe(terser())
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('pack-vendor-js', function () {
  return gulp.src([
      'src/scripts/js/vendor/jquery-3.3.1.min.js',
      'src/scripts/js/vendor/bootstrap-3.3.7.min.js',
      paths.src.vendorJs
    ])
    .pipe(concat('vendorJavaScript.min.js'))
    .pipe(terser())
    .pipe(gulp.dest(paths.dest.vendorJs));
});

gulp.task('pack-css', function () {
  return gulp.src(paths.src.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(autoPrefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('allCss.min.css'))
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task('pack-vendor-css', function () {
  return gulp.src(paths.src.vendorCss)
    .pipe(concat('vendorCss.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.dest.vendorCss));
});

gulp.task('watch:scripts', function() {
  gulp.watch(paths.src.js, gulp.series('pack-js'));
});

gulp.task('watch:style', function() {
  gulp.watch(paths.src.css, gulp.series('pack-css'));
});

gulp.task('watch', gulp.parallel('watch:scripts', 'watch:style'));

gulp.task('default', gulp.series('watch'));
