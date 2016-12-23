var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extension, cb) {
  fs.readdir(directoryName, function (err, data) {
    if (err) {
      return cb(err);
    } else {
      data = data.filter(function (file) {
        return path.extname(file) === '.' + extension;
      });
    }
    cb(null, data);
  });
};