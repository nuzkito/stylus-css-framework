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

gulp.task('stylus-docs', function () {
  return gulp.src('./ui-docs/docs.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('./ui-docs'));
});

gulp.task('stylus-watch', ['stylus'], function () {
  gulp.watch('./stylus/**/*.styl', ['stylus']);
});

gulp.task('stylus-watch-docs', ['stylus-docs'], function () {
  gulp.watch('./ui-docs/*.styl', ['stylus-docs']);
});

gulp.task('watch', ['stylus-watch', 'stylus-watch-docs']);



gulp.task('default', ['watch']);
