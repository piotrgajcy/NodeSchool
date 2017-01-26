const argArray = process.argv;
let sum = 0;

for (let i = 2; i < argArray.length; i += 1) {
  sum += Number(argArray[i]);
}

console.log(sum);
