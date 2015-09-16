var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var babelOptions = require('../babel-options');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');

// create a build function for a particular type of target
function build( modules ) {
  return function () {
    return gulp.src(paths.code.source)
      .pipe(plumber())
      .pipe(changed(paths.code.output[modules], {extension: '.js'}))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(babel(assign({}, babelOptions, {modules: modules })))
      .pipe(sourcemaps.write({includeContent: true}))
      .pipe(gulp.dest(paths.code.output[modules]));
  };
}

// build system and umd modules
gulp.task("build-system", build("system"));
gulp.task("build-common", build("common"));

// build sequence
gulp.task('build', function(callback) {
  return runSequence(
    "clean",
    [ "build-system", "build-common" ],
    callback
  );
});
