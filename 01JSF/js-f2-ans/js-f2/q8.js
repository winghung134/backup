console.log(process.argv); // [
// '/opt/homebrew/Cellar/node/19.5.0/bin/node',
// '/Users/alvin/code/js-f2/q8.js',
//   'elephant',
//   'e'
// ]
let asdasd = process.argv[2]; // elephant
let char = process.argv[3]; // e

let result = "";
for (let i = 0; i < asdasd.length; i++) {
  if (asdasd[i] != char) {
    result += asdasd[i];
  }
}
console.log(result);

console.log(asdasd.replaceAll(char, ""));
