var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('../../package.json');

gulp.task('electron', function() {
  gulp.src('.')
    .pipe(electron({
      src: ['package.json', 'config.js', 'index.html', 'electron-main.js',
        'dist',
        'styles',
        'jspm_packages'],
      packageJson: packageJson,
      release: 'electron-dist',
      cache: 'cache',
      version: 'v0.26.1',
      platforms: ['win32-ia32']
    }));
});
