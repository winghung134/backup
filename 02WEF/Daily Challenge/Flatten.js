const { isArray } = require("util")

let a = [1, [2, 3, null, 4],
    [null], 5
]

let n = [];

function ArrayFlatten(a) {
    for (let c of a) {
        if (c instanceof Object) {
            if (Array.isArray(c)) {
                for (let h of c) { n.push(h) }
            }
        } else if (c == null) { c = '' } else {
            n.push(c)
        }
    }
}