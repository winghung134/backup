console.log(process.argv);

let str = process.argv[2];
console.log(str);
let strArr = str.split(",");
console.log(strArr);
let sum = 0;
for (let i = 0; i < strArr.length; i++) {
  sum += Number(strArr[i]);
  //   sum += parseInt(strArr[i]);
}
console.log(`The sum of the numbers is ${sum}`);
