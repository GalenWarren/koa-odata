var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require("gulp-istanbul");
var runSequence = require('run-sequence');
var del = require('del');
var path = require("path");
var vinylPaths = require('vinyl-paths');
var taskUtilities = require("../utilities");
var _ = require("lodash");
var config = require("../build.json5");

// create the clean task
gulp.task('test-clean', function() {
  return gulp.src(config.test.targetFolder)
    .pipe(vinylPaths(del));
});

// create the build task
gulp.task( "test-transpile",
  taskUtilities.transpileCallback( config.test.source, config.test.targetFolder, config.babel, "common"));

// initialize code coverage
gulp.task("test-coverage-init", function () {
  return gulp.src(config.test.coverage.source)
    .pipe(istanbul(config.istanbul))       // Covering files
    .pipe(istanbul.hookRequire());        // Force `require` to return covered files
});

// run tests and generate coverage reports
gulp.task("test-run", ["test-coverage-init"], function () {
  return gulp.src(config.test.specs)
    .pipe(mocha())
    .pipe(istanbul.writeReports())        // Creating the reports after tests ran
    .pipe(istanbul.enforceThresholds(config.test.coverage.enforceThresholds)) // Enforce coverage
});

// test sequence
gulp.task('test', function(callback) {
  return runSequence(
    ["build", "test-clean"],
    "test-transpile",
    "test-run",
    callback
  );
});
