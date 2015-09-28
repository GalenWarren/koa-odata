var gulp = require('gulp');
var yuidoc = require('gulp-yuidoc');
var taskUtilities = require("../utilities");
var config = require("../build.json5");

// uses yui to generate documentation to doc/api.json
gulp.task('doc', function(){
  return gulp.src( config.source)
    .pipe(yuidoc.parser(null, config.doc.name))
    .pipe(gulp.dest(config.targetRoot));
});
