const Monster = require("../models/Monster");
const monsters = require("./monsters.json");

const monsterData = monsters.map((item) => {
  const monster = {};
  monster.index = item.index;
  monster.name = item.name;
  monster.url = item.url;

  return monster;
});
console.log(monstersData);

Monster.remove({}).then(() => {
  Monster.create(monsterData)
    .then((monsters) => {
      console.log(monsters);
    })
    .catch((err) => {
      console.log(err);
    });
});
