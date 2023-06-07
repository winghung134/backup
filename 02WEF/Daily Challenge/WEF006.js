const PATTERN = " ";

// The logic for handling the question:
// Observation of the pattern:
//  Symmetric for row-side and column-side
// Therefore we will finish top side of the diamond first, then copy the top to the bottom
// For the each line of the diamond, we finish the left side first, then copy the left to the right

const rows = (letter) => {
    // Convert the letter to index, E.g. A -> 0, B -> 1, ...
    // Here we are using `charCodeAt(0)` to convert the letter to UTF-16 code first,,,
    // In UTF-16 code,,, A = 65,, therefore we minus 65 to convert the number to index
    const letterIndex = letter.charCodeAt(0) - 65;

    // Init a row for returning
    const resultArr = [];

    // letterIndex + 1 is the number of rows for top of the diamond;
    for (let i = 0; i < letterIndex + 1; i++) {
        let line = "";

        // Generate space for left side of the line
        // Number of space = letterIndex - i
        // E.g. if letter = "C", letterIndex = 2, first line (index 0) should have 2 * 0
        for (let j = 0; j < letterIndex - i; j++) {
            line += PATTERN;
        }
        line += String.fromCharCode(65 + i);

        // Generate space for middle of the line
        // Number of space = i * 2 - 1
        // E.g. if letter = "C", letterIndex = 2,
        //          first line (index 0) should have 0 * 2 - 1 = -1, loop will not trigger
        //          second line (index 1) should have 1 * 2 - 1 = 1, should have 1 space
        for (let j = 0; j < i * 2 - 1; j++) {
            line += PATTERN;
        }

        // Copy left of the line to the right
        // Start from letterIndex - i,,,
        // If j < letterIndex,,, means first or last line
        for (let j = letterIndex - i; j >= 0; j--) {
            if (j < letterIndex) {
                line += line[j];
            }
        }
        resultArr.push(line);
    }

    // Copy top of the diamond to the bottom
    // resultArr.length - 1 is the index of last row,,
    // However we need to start from second last,,,
    // Therefore we use resultArr.length - 2
    for (let i = resultArr.length - 2; i >= 0; i--) {
        resultArr.push(resultArr[i]);
    }
    return resultArr;
};

console.log(rows("A"));
console.log(rows("C"));
console.log(rows("E"));