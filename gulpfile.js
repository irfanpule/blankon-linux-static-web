
var gulp    = require('gulp');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var clean   = require('gulp-clean');
var concat  = require('gulp-concat');
var del = require('del');

gulp.task('clean', function() {
  return del(['dist/fonts/raleway/*', 'dist/fonts/*', 'dist/images/installer/*', 'dist/images/*', 'dist/*']);
});

gulp.task('styles', function() {
  gulp.src('css/*')
  .pipe(cleanCss())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./dist/'))
});

gulp.task('libs', function() {
  gulp.src('js/*')
  .pipe(uglify())
  .pipe(concat('libs.js'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('images', function() {
  gulp.src('images/*')
  .pipe(gulp.dest('./dist/images'))
  gulp.src('images/installer/*')
  .pipe(gulp.dest('./dist/images/installer'))
});

gulp.task('favicon', function() {
  gulp.src('favicon.ico')
  .pipe(gulp.dest('./dist'));
});
gulp.task('fonts', function() {
  gulp.src('fonts/*')
  .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('html', function() {
  gulp.src('*.html')
  .pipe(gulp.dest('./dist'));
});

var tasks = ['clean', 'styles', 'libs', 'fonts', 'images', 'favicon', 'html'];

gulp.task('default', tasks);
