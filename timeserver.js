/***var net = require('net')
var strftime = require('strftime')
var server = net.createServer(function(socket)
{
  socket.end(strftime('%F %R',new Date()))
})

server.listen(Number(process.argv[2]))
*/
var net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
