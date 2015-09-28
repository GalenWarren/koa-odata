var gulp = require('gulp');
var shell = require("gulp-shell");
var config = require("../build.json5");

// create the debug task
gulp.task( "debug", ["build"], shell.task(["iron-node " + config.main]));
