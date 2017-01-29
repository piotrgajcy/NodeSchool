const fs = require('fs');
const path = require('path');

const pathFiles = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(pathFiles, (err, data) => {
  if (err) {
    throw err;
  } else {
    for (let i = 0; i < data.length; i += 1) {
      const fileExtName = path.extname(data[i]);
      if (fileExtName === extension) {
        console.log(data[i]);
      }
    }
  }
});
