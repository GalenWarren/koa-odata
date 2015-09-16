var gulp = require('gulp');
var paths = require('../paths');
var yuidoc = require('gulp-yuidoc');

// uses yui to generate documentation to doc/api.json
gulp.task('doc', function(){
  return gulp.src(paths.code.source)
    .pipe(yuidoc.parser(null, 'api.json'))
    .pipe(gulp.dest(paths.doc));
});
