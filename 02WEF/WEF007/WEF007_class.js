//Linked list 
function link(a, b) {
    return {
        a,
        b,
    };
}

const n = link(1, link(2, link(3, null)));

function get(n, index) {
    let i = 0;
    let item = n;

    while (i < index) {
        if (!item.b) { console.log('error' + index) }
        item = item.b;
        i++
    }
    return item;
}
link(1, 2)
console.log((get(n, 2)))




function ceratelist() {

    function createtree() {}

    function createnode() {}




    return {
        createnode,
        createtree,
    }


}















//MAP
const park = new Map();
let a = 10
park.set('key1', a);
park.set('key2', a);
park.set('key3', a);

park.get('key3')
park.delete('dai')
console.log(park.size)
console.log(Array.from(park))

//Tree
function tree(value, left, right) {
    return {
        value,
        left,
        right,
    };
}
tree(
    2,
    tree(7, tree(2), tree(6, tree(5), tree(11))),
    tree(5, tree(9, tree(4)))
);
//Set
// no duplicated data is recorded
const j = new Set();
j.add(1)
j.add(2)
j.add(3)
j.add(1)
console.log(Array.from(j))




//graph
// no hierarachy
function node(value, nodes = []) {
    return {
        value,
        nodes,
    };
}

const ten = node(10);
const nine = node(9);
const two = node(2);

const eleven = node(11, [two, nine, ten]);
const eight = node(8, [nine]);
const five = node(5, [eleven]);
const seven = node(7, [eleven, eight]);
const three = node(3, [eight, ten]);









// Control speed of the Game of Life.(Checkout framerate(), you can use slider to control the framerate)

// Allow users to change the rules of survival.

// Allow users to change the rules of reproduction.

// Start / Stop the Game of life

// Multiple colors of life on the same board.

// Darken colors for stable life.

// Random initial states

// Well - known patterns of Game of Life to select from(Examples: Gosper Glider Gun, Glider, Lightweight train).

// Use Keyboard to control the cursor to place the life

// Resize board on windows resize(Check out windowsResized())

// Switching between different styles.

// Anything

// else that you could think of.