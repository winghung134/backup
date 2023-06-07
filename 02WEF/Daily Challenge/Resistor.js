// The band colors are encoded as follows:

let c = {

        Black: 0,
        Brown: 1,
        Red: 2,
        Orange: 3,
        Yellow: 4,
        Green: 5,
        Blue: 6,
        Violet: 7,
        Grey: 8,
        White: 9
    }
    // From the example above: brown - green should
    //     // return 15 brown - green - violet should
    // return 15 too, ignoring the third color.

let input = [color, color]
let num;

function count(input) {
    for (let x of input) {
        if (input.length < 3) {
            if (x == c.key()) {
                num += c.value().toString()

            } else { console.log('no such color') }

        }
    }
    console.log(num)
}