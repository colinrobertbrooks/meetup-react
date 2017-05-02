var gulp = require('gulp');
var del = require('del');
var ghPages = require('gulp-gh-pages');

gulp.task('clean', function(){
  return del('./.publish', { force: true });
});

gulp.task('deploy', ['clean'], function() {
  var files = [
    './index.html',
    './dist/**'
  ];
  return gulp.src(files, { base: './' })
  .pipe(ghPages());
});
