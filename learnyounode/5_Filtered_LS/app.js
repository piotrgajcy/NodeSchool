var fs = require('fs');
var path = require('path');
var pathFiles = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(pathFiles, function (err, data) {
  if (err) {
    throw err;
  } else {
    var fileExtName;
    for (var i = 0; i <data.length; i++) {
      fileExtName = path.extname(data[i]);
      if(fileExtName === extension) {
        console.log(data[i]);
      }
    }
  }
});