var concat = require('concat-stream');

var stream = concat(function (src) {
  var str = src.toString().split('').reverse().join('');
  console.log(str);
});

  process.stdin.pipe(stream);