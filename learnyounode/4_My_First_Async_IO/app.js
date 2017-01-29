const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    const result = data.split('\n').length - 1;
    console.log(result);
  }
});
