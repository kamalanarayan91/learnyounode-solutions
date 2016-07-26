var http = require('http')
var fs =  require('fs')
var fileToServe = process.argv[3]
var server = http.createServer(function(res,resp){
  var fileStream = fs.createReadStream(process.argv[3])
  fileStream.pipe(resp)
})

server.listen(process.argv[2])
