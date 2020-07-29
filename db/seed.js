const Monster = require("../models/Monster");
const monstersJson = require("./monsters.json");
const monsterDetail = require("./monstersDetail.json");
const Types = require("../models/Types");

const monsters = monsterDetail.map((item) => {
  const monster = {};
  (monster.index = item.index), (monster.name = item.name);
  monster.url = item.url;
});

Monster.remove({});
Monster.collection
  .insert(monstersJson)
  .then((monsters) => {
    console.log(monstersJson);
  })
  .catch((err) => {
    console.log(err);
  });

// Types.remove({});
// Types.collection
//   .insert(monsterDetail)
//   .then((details) => {
//     console.log(details);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
