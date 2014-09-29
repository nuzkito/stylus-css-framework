var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var nib = require('nib');


gulp.task('stylus', function () {
  return gulp.src('./stylus/index.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(minifyCSS())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./assets'));
});

gulp.task('stylus-watch', ['stylus'], function () {
  gulp.watch('./stylus/**/*.styl', ['stylus']);
});

gulp.task('watch', ['stylus-watch']);



gulp.task('default', ['watch']);
