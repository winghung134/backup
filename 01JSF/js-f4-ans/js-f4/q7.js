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
        `Here are the player names: ${playerArr.map(function (playerObj) {
      return `${playerObj.name} (${playerObj.score})`;
    })
    .join(", ")}`
);