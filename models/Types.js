const mongoose = require("../db/connection");
const { mongo } = require("../db/connection");
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  name: "String",
  size: "String",
  armor_class: Number,
  special_abilities: [
    {
      name: "String",
      desc: "String",
    },
  ],
});

module.exports = mongoose.model("Types", typeSchema);
