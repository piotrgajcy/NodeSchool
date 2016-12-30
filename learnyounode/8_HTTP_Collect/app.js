var http = require('http'),
  bl = require('bl'),
  urlName = process.argv[2];


http.get(urlName, function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      console.log('Something went wrong: ' + err.message);
    } else {
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }
  }));
});