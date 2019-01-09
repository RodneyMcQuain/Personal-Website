const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

gulp.task('pack-js', function () {
  return gulp.src(['scripts/*.js'])
    .pipe(concat('allJavaScript.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('assets/scripts/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/js/**/*.js', ['pack-js']);
});

gulp.task('default', gulp.parallel('watch'));
