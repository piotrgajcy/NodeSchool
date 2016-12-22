var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
var buf = Buffer.from(data);
var str = buf.toString();
var result = str.split('\n').subArray.length - 1;


console.log(result);
