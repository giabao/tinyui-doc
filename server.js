var server_port = process.env.OPENSHIFT_NODEJS_PORT || 80;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || null;

var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('.', {index: 'index.html', setHeaders: setHeaders});

var server = http.createServer(function(req, res){
  var done = finalhandler(req, res);
  serve(req, res, done)
});

server.listen(server_port, server_ip_address);

function setHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
}
