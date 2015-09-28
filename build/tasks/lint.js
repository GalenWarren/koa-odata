var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var taskUtilities = require("../utilities");
var config = require("../build.json5");

// runs jshint on all .js files
gulp.task('lint', function() {
  return gulp.src( config.source)
    .pipe(jshint({
      esnext: true
    }))
    .pipe(jshint.reporter(stylish));
});
