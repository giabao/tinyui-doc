var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');

var ts = require('gulp-typescript');

var tsProject = ts.createProject({
  typescript: require('typescript'),
  module: 'commonjs',//'amd',
  target: 'ES5',
  noImplicitAny: false//true
});

// transpiles changed .ts files to SystemJS format (--module amd or --module commonjs)
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', ['tinyui'], function () {
  return gulp.src(paths.tsSource)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.ts'}))
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['bundle', 'build-html'],
    callback
  );
});
