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

// Types.remove({});
// Types.collection
//   .insert(monsterDetail)
//   .then((details) => {
//     console.log(monsterDetail);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Monster.deleteMany({}).then(() => {
  Monster.create(monsters).then((monsters) => {
    console.log(monsters);
    process.exit();
  });
});
