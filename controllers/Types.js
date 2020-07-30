const Monster = require("../models/Monster");
const Types = require("../models/Types");

module.exports = {
  index: (req, res) => {
    Types.find({}).then((types) => {
      res.json(types);
    });
  },
  getName: (req, res) => {
    console.log(req.params.name);
    Types.find({ name: req.params.name }).then((types) => {
      res.json(types);
    });
  },
  create: (req, res) => {
    Types.create(req.body).then((type) => {
      res.json(type);
    });
  },
  edit: (req, res) => {
    Types.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true,
    }).then((type) => {
      res.json(type);
    });
  },
  delete: (req, res) => {
    Types.findOneAndDelete({ name: req.params.name }).then((type) => {
      res.json(type);
    });
  },
};
