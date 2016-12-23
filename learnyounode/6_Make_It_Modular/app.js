var filterModule = require('./filterModule');

var directoryName = process.argv[2];
var extension = process.argv[3];

filterModule(directoryName, extension, function (err, data) {
  if (err) {
    throw err;
  } else {
    data.forEach(function (file) {
      console.log(file);
    });
  }
});