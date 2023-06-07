let x = 2
let y = "hi"
let z = 5
// H + i -> true
if (y[0].toUpperCase() + y[1] == "Hi") {
    a1 = y * x
    a2 = parseInt(z + "")
} else {
    a3 = "True"
}
// "hi" * 2 -> NaN, type number
console.log(a1);
console.log(typeof a1);
// 5(number) -> "5" (string) -> 5(number)
console.log(a2);
console.log(typeof a2);
// error
// console.log(a3);