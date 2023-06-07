let numArr = [1, 2, 3];
// sum all number in numArr

// 1: current: 1, next: 2
// 2: current: 3, next: 3
// reduceArr = 6
let reduceArr = numArr.reduce(function (current, next) {
  return current + next;
});
// 1: current: 0, next: 1
// 2: current: 1, next: 2
// 3: current: 3, next: 3
// reduceArr2 = 6
let reduceArr2 = numArr.reduce(function (current, next) {
  return current + next;
}, 0);

console.log(reduceArr);
console.log(reduceArr2);
