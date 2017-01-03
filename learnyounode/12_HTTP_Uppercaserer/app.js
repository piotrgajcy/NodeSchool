var http = require('http'),
  map = require('through2-map'),
  portNumber = process.argv[2];

var server = http.createServer(function (req, res) {
  return req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(portNumber);