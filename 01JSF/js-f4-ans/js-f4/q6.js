const readlineSync = require("readline-sync");

// let x = 0;
// while (x < 5) {
//   x = x + 1;
// }
let playerArr = [];
let isNaming = true;
while (isNaming) {
  let playerName = readlineSync.question(`Enter player ${playerArr.length + 1} name (enter nothing to stop): `);
  if (playerName == "") {
    isNaming = false;
  } else {
    playerArr.push(playerName);
  }
}

console.log(`Here are the player names: ${playerArr.join(", ")}`);
