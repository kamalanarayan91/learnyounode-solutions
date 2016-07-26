var http =require('http');
var fs = require('fs');
var map = require('through2-map')

var server = http.createServer(function(req, res) {

  if(req.method==='POST') {


    req.on('data', function(chunk) {
      var dataString = chunk.toString();
      var dataUpper = dataString.toUpperCase();
      res.write(dataUpper)
    });

    req.on('end', function() {
      res.writeHead(200, "OK", {'Content-Type': 'text/plain' });
    });

  }
});


server.listen(process.argv[2]);
