var gulp = require('gulp');
var paths = require('../paths');
var jspm = require('jspm/api');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('do-bundle', ['build-system'], function(done){
  jspm.bundle(
    [ '*',
      'aurelia-bootstrapper',
      'aurelia-http-client',
      'aurelia-templating-binding',
      'aurelia-templating-resources',
      'aurelia-templating-router',
      'aurelia-history-browser',
      'aurelia-loader-default',
      'highlight.js'
    ].join(' + '),
    'app-bundle.js',
    {inject:true, minify: true}
  ).then(function () {
      gulp.src('app-bundle.js')
        .pipe(gulp.dest(paths.output))
        .on('finish', done);
    });
});


gulp.task('bundle', ['do-bundle'], function () {
  return gulp.src('app-bundle.js')
    .pipe(vinylPaths(del));
});
