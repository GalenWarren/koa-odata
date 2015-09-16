var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var paths = require('../paths');
var babel = require('gulp-babel');
var babelOptions = require('../babel-options');

//enable the babel require hook for on-the-fly transpilation
//require("babel/register");

// register chai should
require("chai").should();

gulp.task( "test2", function( done ) {
  gulp.src(paths.test.specs)
//    .pipe(babel( babelOptions))
    .pipe(mocha({
      reporter: "nyan"
    }))
    .on('end', done);
});

// run the tests
gulp.task("test", function (done) {

  // run tests and gather code coverage
  gulp.src(paths.test.coverage)
    .pipe(babel( babelOptions))
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(paths.test.specs)
        .pipe(mocha({
          reporter: "nyan"
        }))
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
        .on('end', done);
    });
});
