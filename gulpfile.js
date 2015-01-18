var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./scripts/**/[^_]*.js')
    .pipe(concat('voltic.js'))
    .pipe(gulp.dest('./'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
    .on('error', function() {
      gutil.log(e);
    });
});

gulp.task('templates', function() {
  return gulp.src('./templates/**/[^_]*.jade')
    .pipe(
      jade(
        {
          pretty: true
        }
      )
    )
    .pipe(gulp.dest("./"))
    .on('error', function() {
      gutil.log(e);
    });
});

gulp.task('styles', function() {

  return sass('styles/')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer({ cascade: true }))
    .pipe(rename("voltic.css"))
    .pipe(gulp.dest('./'));

});

gulp.task('watch', function() {

  gulp.watch('./templates/**/*.jade', ['templates']);
  gulp.watch('./scripts/**/*.js', ['scripts']);
  gulp.watch('./styles/**/*.scss', ['styles']);

});
