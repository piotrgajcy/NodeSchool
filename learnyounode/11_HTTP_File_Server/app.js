const http = require('http');
const fs = require('fs');

const portNum = process.argv[2];
const fileLoc = process.argv[3];

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(fileLoc);
  stream.pipe(res);
});
server.listen(portNum);
