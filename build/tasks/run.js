var gulp = require('gulp');
var path = require("path");
var config = require("../build.json5");

// create the run task
gulp.task( "run", ["build"], function() {
  require( path.join( __dirname, "../../", config.main));
});
