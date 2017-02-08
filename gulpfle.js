var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  precss = require('precss'),
  cssnano = require('cssnano'),
  animation = require('postcss-animation'),

  development = 'development/css/',
  production = 'production/postcss/';

gulp.task('html', function() {
  gulp.src(production + '*.html');
});

gulp.task('css', function() {
  gulp.src(development + 'style.css')
  .pipe(postcss([
    precss(),
    animation(),
    autoprefixer(),
    cssnano()
  ]))
  .on('error', gutil.log)
  .pipe(gulp.dest(production + 'css'));
});

gulp.task('watch', function() {
  gulp.watch(development + '**/*.css', ['css']);
  gulp.watch(production + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(production)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['html', 'css', 'webserver','watch']);
