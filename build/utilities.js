var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var _ = require("lodash");
var path = require("path");

var taskUtilities = module.exports = {

  /**
  * Helper to build the babel config from a series of sections (first
  * ones take precedence)
  */
  getBabelConfig: function() {
    var args = _.toArray(arguments).map( function( section ) {
      return section.babel || {};
    });
    args.unshift( {} );
    return _.defaults.apply( _, args );
  },

  /**
  * Helper to create a transpile callback
  */
  transpileCallback: function( source, targetRoot, babelConfig, moduleName ) {

    // construct the target
    var target = [ targetRoot, moduleName ].join("/");

    // return the function
    return function () {
      return gulp.src(source)
        .pipe(plumber())
        .pipe(changed(target, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel(_.extend({}, babelConfig, { modules: moduleName })))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(target));
    };
  }

};
