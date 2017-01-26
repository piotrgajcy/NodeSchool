const fs = require('fs');

const data = fs.readFileSync(process.argv[2]);
const buf = Buffer.from(data);
const str = buf.toString();
const result = str.split('\n').length - 1;

console.log(result);
