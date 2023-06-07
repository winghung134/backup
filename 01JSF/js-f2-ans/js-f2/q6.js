// let space = " ";
// for (let i = 0; i < 4; i++) {
//   let str = "+-+-+-+";
//   let result = "";
//   result += space.repeat(i);
//   result += str.substring(i, str.length - i);
//   console.log(result);
// }

let space = " ";
let plus = "+";
let minus = "-";

for (let i = 0; i < 4; i++) {
  let result = "";
  for (let j = 0; j < 7 - 2 * i; j++) {
    // even row
    if (i % 2 == 0) {
      // even number
      if (j % 2 == 0) {
        result += plus;
        // odd number
      } else {
        result += minus;
      }
      // odd row
    } else {
      // even number
      if (j % 2 == 0) {
        result += minus;
        // odd number
      } else {
        result += plus;
      }
    }
  }
  console.log(result);
}

for (let i = 0; i < 4; i++) {
  let result = "";
  for (let j = i; j < 7 - i; j++) {
    // even number
    if (j % 2 == 0) {
      result += plus;
      // odd number
    } else {
      result += minus;
    }
  }
  console.log(result);
}
