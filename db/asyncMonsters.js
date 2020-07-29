const fetch = require("node-fetch");
const fs = require("fs");

const monsters = require("./monsters.json");

const monsterData = [];
async function getMonster(monsterPath) {
  const url = `https://www.dnd5eapi.co/api/monsters/${monsterPath}`;

  let res = await fetch(url);
  let jsonData = await res.json();
  console.log(`success: ${monsterPath}`);
  monsterData.push(jsonData);
}
function saveData(data) {
  fs.writeFile("./db/monstersDetail.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
}
async function getAllMonsters(monsterPath) {
  for (let i = 0; i < monsterPath.length; i++) {
    await getMonster(monsterPath[i].index);
  }

  saveData(monsterData);
}
getAllMonsters(monsters.results);
