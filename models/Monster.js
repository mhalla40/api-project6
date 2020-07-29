const mongoose = require("../db/connection");
const { mongo } = require("../db/connection");
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  index: "String",
  name: "String",
  url: "String",
});

module.exports = mongoose.model("Monster", monsterSchema);
