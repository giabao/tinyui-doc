var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var mergeStream = require('merge-stream');

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
gulp.task('build-system-ts', function () {
  return gulp.src(paths.tsSource)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.ts'}))
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system-ts
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build-ts', function(callback) {
  return runSequence(
    'clean',
    ['build-system-ts', 'build-html'],
    callback
  );
});

gulp.task('tinyui', function() {
  function cp(dir) {
    return gulp.src('../example/' + dir + '/**')
      .pipe(gulp.dest(paths.output + 'exam/' + dir));
  }

  var merged = mergeStream();
  for(var dir of ['ui', 'src', 'ui-codegen']) {
    merged.add(cp(dir));
  }

  return merged;
});
