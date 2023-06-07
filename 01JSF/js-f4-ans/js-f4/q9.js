const readlineSync = require("readline-sync");
const fs = require("fs");

function createPlayers() {
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
  return playerArr;
}
let playerArr = createPlayers();

for (let i = 0; i < 3; i++) {
  console.log(`==Round ${i + 1}==`);
  playGuessGame(playerArr);
  fs.writeFile("result.json", JSON.stringify(playerArr, null, 2), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function playGuessGame(playerArr) {
  let randomNumber = Math.random();
  let result = Math.floor(randomNumber * 6) + 1;
  for (player of playerArr) {
    let guess = readlineSync.question(`${player.name}'s  guess the number (Big, Small): `);
    // 1-3 -> Small, 4-6 Big
    if ((result < 4 && guess == "Small") || (result > 3 && guess == "Big")) {
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
}
