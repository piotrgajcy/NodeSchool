var net = require('net'),
  moment = require('moment'),
  portNumber = process.argv[2];

var server = net.createServer(function (socket) {
  var date = moment().format('YYYY-MM-DD HH:mm') + '\n';
  console.log(date);
  socket.end(date);
});

server.listen(portNumber);