var gulp = require('gulp');
var fs = require('fs');

gulp.task('tinyui', function(done){
  var uiDir = 'tinyui/example/ui/';
  fs.readdir(uiDir, function(err, files){
    var data = files.filter(function(f){
        return f.match(/^\d\d-.+\.xml$/) && fs.statSync(uiDir + f).isFile();
      })
      .map(function (f) {
        return f.substring(3, f.length - 4);
      });

    data = 'export = ' + JSON.stringify(data) + ';';

    fs.writeFile('src/example-data.ts', data, done);
  })
});
