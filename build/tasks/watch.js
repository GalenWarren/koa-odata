var gulp = require('gulp');
var path = require("path");
var shell = require("gulp-shell");
var changed = require("gulp-changed");
var config = require("../build.json5");
var runState = require("./run");

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// create the watch task
gulp.task( "watch", ["run"], function(callback) {
  gulp.watch( config.source, ["run"]).on( "change", reportChange );
});
