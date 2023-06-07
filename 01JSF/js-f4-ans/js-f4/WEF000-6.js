function checkMarkSix(resultArr, bidArr) {
  let counter = 0;
  for (let i = 0; i < resultArr.length; i++) {
    let resultElem = resultArr[i];
    for (let j = 0; j < bidArr.length; j++) {
      let bidElem = bidArr[j];
      if (resultElem == bidElem) {
        counter++;
      }
    }
    if (counter == bidArr.length) {
      return true;
    }
  }
  return false;
  //   return resultArr.includes(bidArr[0]) && resultArr.includes(bidArr[1]);
}

let result1 = checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
let result2 = checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
let result3 = checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true

console.log(result1);
console.log(result2);
console.log(result3);

// bonus 1
function quickPicks(resultArr, bidTimes) {
  let arr = [];
  for (let i = 0; i < bidTimes; i++) {
    let random1 = Math.random();
    let random2 = Math.random();

    let bid1 = Math.floor(random1 * 11) + 1;
    let bid2 = Math.floor(random2 * 11) + 1;

    let bidArr = [bid1, bid2];

    let bidResult = checkMarkSix(resultArr, bidArr);
    let resultObj = { bid: bidArr, win: bidResult };
    arr.push(resultObj);
    // [{"bid": [1, 3], "win": true}]
  }
  return arr;
}

// let quickPick1 = quickPicks([1, 3, 5, 7, 9, 11], 1); // returns: [{"bid": [1, 3], "win": true}]
// let quickPick2 = quickPicks([1, 3, 5, 7, 9, 11], 3); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]
// console.log(quickPick1);
// console.log(quickPick2);

//bonus 2
function quickPickInterVal(resultArr, bidTimes) {
  let arr = [];
  for (let i = 0; i < bidTimes; i++) {
    let random1 = Math.random();
    let random2 = Math.random();

    let bid1 = Math.floor(random1 * 11) + 1;
    let bid2 = Math.floor(random2 * 11) + 1;

    let bidArr = [bid1, bid2];

    let bidResult = checkMarkSix(resultArr, bidArr);
    let resultObj = { bid: bidArr, win: bidResult };
    arr.push(resultObj);
    // [{"bid": [1, 3], "win": true}]
  }
  for (let j = 0; j < arr.length; j++) {
    setTimeout(() => {
      console.log(`Your quick pick: ${arr[j].bid}`);
      console.log(`${arr[j].win}`);
    }, "1000" * (j + 1));
  }
}
quickPickInterVal([1, 3, 5, 7, 9, 11], 3);
