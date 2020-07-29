const fetch = require("node-fetch");
const fs = require("fs");

const url = "https://www.dnd5eapi.co/api/monsters";

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let monsters = JSON.stringify(res);
    console.log(monsters);
    fs.writeFile("./db/monsters.json", monsters, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });
