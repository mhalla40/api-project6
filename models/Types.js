const mongoose = require("../db/connection");
const { mongo } = require("../db/connection");
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  name: "String",
  size: "String",
  alignment: "String",
  armor_class: Number,
  strength: Number,
});

module.exports = mongoose.model("Types", typeSchema);
