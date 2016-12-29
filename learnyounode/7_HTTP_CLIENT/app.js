var http = require('http');
var urlName = process.argv[2];

http.get(urlName, function (response) {
  var result = '';
  response.setEncoding('utf8');
  response.on('data', function (chunk) {
    result += chunk + '\n';
  });
  response.on('end', function () {
    try {
      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  });
})
  .on('error', function (e) {
    console.log('Got error: ' + e.message);
  });