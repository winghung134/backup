/**
 * @typedef  {Object} ListNode
 * @property {number} value
 * @property {ListNode|null} next
 */

/**
 *
 * @param {number} value
 * @returns {ListNode}
 */
function createListNode(value) {
    return {
        value,
        next: null,
    };
}
//return an object with a singly linked list 
function createSinglyLinkedList() {
    /**
     * @type {ListNode|null}
     */
    let head = null;

    return Object.freeze({
        addNewNode: () => {
            console.log("add a new node");
        },
        displayAllNodeValues: () => {
            console.log("display all the node values");
        },
        displayMiddleNodeValue: () => {
            console.log("display the middle node value");
        },
    });
}
//
/**
 * @param {number} value
 */
addNewNode: (value) => {
    const newNode = createListNode(value);
    if (head === null) {
        head = newNode;
        return;
    }

    let current = head;
    while (current.next !== null) {
        current = current.next;
    }

    // current now is the last node of the list !!
    current.next = newNode;
};

displayAllNodeValues: () => {
    if (head === null) {
        console.log("the list is empty!!!");
        return;
    }

    let current = head;
    do {
        console.log(current.value);
        current = current.next;
    } while (current !== null);
};

function createSinglyLinkedList() {
    /**
     * @type {ListNode|null}
     */
    let head = null;

    return Object.freeze({
        addNewNode: () => {
            // ...
        },
        displayAllNodeValues: () => {
            // ...
        },
        displayMiddleNodeValue: () => {
            // write your code here
        },
    });
}

createSinglyLinkedList(1)