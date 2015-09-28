var path = require("path");
var gulp = require('gulp');
var runSequence = require('run-sequence');
var _ = require("lodash");
var taskUtilities = require("../utilities");
var config = require("../build.json5");

// create the transpile task
gulp.task( "transpile",
  taskUtilities.transpileCallback( config.source, config.targetRoot, config.babel, "common" ));

// build sequence
gulp.task('build', function(callback) {
  return runSequence(
    "clean",
    "transpile",
    callback
  );
});
