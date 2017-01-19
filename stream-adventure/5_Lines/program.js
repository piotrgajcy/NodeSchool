var through = require('through2'),
split = require('split'),
lineCounter = 0;

var stream = through(function (buffer, encoding, next) {
  var line = buffer.toString();
  this.push(lineCounter % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n');
  lineCounter++;
  next();
});

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);