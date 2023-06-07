let star = "*";
let space = " ";
for (let i = 0; i < 3; i++) {
    let result = "";

    // create spaces
    // i = 0, "  " , k < 2
    // i = 1, " ", k < 1
    // i = 2, "", k < 0
    //   for (let k = 0; k < 2 - i; k++) {
    //     result = result + space;
    //   }
    for (let k = 2; k > i; k--) {
        result = result + space;
    }
    // create stars
    // i = 0, * -> j < 1
    // i = 1, *** -> j < 3
    // i = 2, ***** -> j < 5
    for (let j = 0; j < 2 * i + 1; j++) {
        result = result + star;
    }
    console.log(result);
}

let x = 0;
while (x < 3) {
    console.log(space.repeat(2 - x) + star.repeat(2 * x + 1));
    // x++
    // x += 1;
    x = x + 1;
}