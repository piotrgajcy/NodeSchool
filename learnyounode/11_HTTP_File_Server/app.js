var http = require('http'),
  fs = require('fs'),
  portNum = process.argv[2],
  fileLoc = process.argv[3];

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(fileLoc);
    stream.pipe(res);
  });
server.listen(portNum);