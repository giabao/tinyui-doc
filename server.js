var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('.', {index: 'index.html', setHeaders: setHeaders});

var server = http.createServer(function(req, res){
  var done = finalhandler(req, res);
  serve(req, res, done)
});

server.listen(80);

function setHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
}
