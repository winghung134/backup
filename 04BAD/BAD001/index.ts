// factorial means !n in maths
// e.g. (!3 = 3 * 2 * 1) (!4 = 4 * 3 * 2 * 1)
function factorial(num: number): number {
    if (num == 0 || num == 1) {
        return 1;
    }

    return factorial(num - 1) * num;
}

// Basically will output
//    num: 1  2  3  4  5  6  7   8    9
// Output: 1, 1, 2, 3, 5, 8, 13, 21, 34
// Check "fibonacci sequence" for more info
function fibonacci(num: number): number {
    if (num == 1 || num == 2) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}
export default factorial;

