var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var config = require("../build.json5");

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([config.targetRoot])
    .pipe(vinylPaths(del));
});
