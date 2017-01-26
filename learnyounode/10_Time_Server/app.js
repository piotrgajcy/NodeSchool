const net = require('net');
const moment = require('moment');

const portNumber = process.argv[2];

const server = net.createServer((socket) => {
  const date = `${moment().format('YYYY-MM-DD HH:mm')}\n`;
  console.log(date);
  socket.end(date);
});

server.listen(portNumber);
