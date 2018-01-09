var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
  reloadBrowser = browserSync.reload;

gulp.task('sass', function(){
  return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
  return gulp.src('src/js/**/*.js')
    .pipe(concat("main.js"))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function(){
  browserSync.init({
    server: {baseDir: "build/"}
  });
  gulp.watch('src/scss/**/*.scss',  gulp.series('sass'));
  gulp.watch('src/js/**/*.js',  gulp.series('js'));
  gulp.watch("build/*.html").on('change', reloadBrowser);
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));
