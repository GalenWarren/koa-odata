var gulp = require('gulp');
var path = require("path");
var shell = require("gulp-shell");
var changed = require("gulp-changed");
var config = require("../build.json5");
var fork = require('child_process').fork;

// the current child process
var childProcess = null;

// create a task to stop a running app
gulp.task( "run-stop", function( callback ) {
  if (childProcess) {
    childProcess.on( "close", function() {
      childProcess = null;
      callback();
    });
    childProcess.kill();
  }
  else {
    callback();
  }
});

// create the run task
gulp.task( "run", ["build", "run-stop"], function() {
  childProcess = fork( config.main );
});
