var gulp = require('gulp');
var debug = require('gulp-debug');
var react = require('gulp-react');

gulp.task('build', function () {
  return gulp.src('lib/components/**/*.jsx')
    .pipe(debug({title: 'building: '}))
    .pipe(react({ harmony: true }))
    .pipe(gulp.dest('./lib/components'));
});