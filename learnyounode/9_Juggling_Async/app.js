var http = require('http'),
  urlsArray = [process.argv[2], process.argv[3], process.argv[4]];

function printURLs(urls) {
  var url = urls.shift();
  
  http.get(url, function (response) {
    var data = '';
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      if (urls.length) {
        console.log(data);
        printURLs(urlsArray);
      } else {
        console.log(data);
        return;
      }
    });
  });
}

printURLs(urlsArray);