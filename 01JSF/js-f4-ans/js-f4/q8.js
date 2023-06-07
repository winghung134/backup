const readlineSync = require("readline-sync");

let playerArr = [];
let isNaming = true;
while (isNaming) {
  let playerName = readlineSync.question(`Enter player ${playerArr.length + 1} name (enter nothing to stop): `);
  if (playerName == "") {
    isNaming = false;
  } else {
    playerArr.push({ name: playerName, score: 0 });
  }
}

console.log(
  `Here are the player names: ${playerArr
    .map(function (playerObj) {
      return `${playerObj.name} (${playerObj.score})`;
    })
    .join(", ")}`
);

let result = 5;
for (player of playerArr) {
  let guessNumber = readlineSync.question(`${player.name}'s  guess the number (1-6): `);
  if (result == guessNumber) {
    player.score += 1;
  }
}

console.log(`The result is ${result}`);
console.log(
  `The scores : ${playerArr
    .map(function (playerObj) {
      return `${playerObj.name} (${playerObj.score})`;
    })
    .join(", ")}`
);
