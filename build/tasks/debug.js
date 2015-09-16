var gulp = require('gulp');
var paths = require('../paths');
var shell = require("gulp-shell");

gulp.task('debug', shell.task([
  'iron-node debug.js'
]));
