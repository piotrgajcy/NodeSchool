var argArray = process.argv;
var sum = 0;

for (var i = 2; i < argArray.length; i++) {
  sum += Number(argArray[i]);
}

console.log(sum);