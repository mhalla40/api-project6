const Monster = require("../models/Monster");
const monstersJson = require("./monsters.json");
const monsterDetail = require("./monstersDetail.json");
const Types = require("../models/Types");

const monsters = monstersJson.results.map((item) => {
  const monster = {};
  monster.index = item.index;
  monster.name = item.name;
  monster.url = item.url;
  return monster;
});

// Monster.remove({});
// Monster.collection
//   .insert(monstersJson)
//   .then((monsters) => {
//     console.log(monstersJson);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Monster.deleteMany({}).then(() => {
  Monster.create(monsters).then((monsters) => {
    console.log(monsters);
    // process.exit();
  });
});

const details = monsterDetail.map((item) => {
  const monster = {};
  monster.name = item.name;
  monster.size = item.size;
  monster.alignment = item.alignment;
  monster.armor_class = item.armor_class;
  monster.strength = item.strength;
  return monster;
});
Types.deleteMany({}).then(() => {
  Types.create(details).then((details) => {
    console.log(details);
    process.exit();
  });
});
