var gulp = require('gulp');
var gutil = require('gulp-util');
var NwBuilder = require('node-webkit-builder');

gulp.task('nwjs', function() {
  var nw = new NwBuilder({
    files: ['package.json', 'config.js', 'index.html', 'nwjs-app.js',
      'dist/**',
      'styles/**',
      'jspm_packages/**',
      'node_modules/finalhandler/**',
      'node_modules/http/**',
      'node_modules/serve-static/**'
    ],
    platforms: ['win'],
    buildDir: 'nwdist'
  });

  nw.on('log', gutil.log);

  return nw.build().catch(gutil.log);
});
