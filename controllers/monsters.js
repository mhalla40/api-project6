const Monster = require("../models/Monster");

module.exports = {
  index: (req, res) => {
    Monster.find({}).then((monsters) => {
      res.json(monsters);
    });
  },
  getName: (req, res) => {
    Monster.find({ name: req.params.name }).then((monster) => {
      res.json(monster);
    });
  },
  create: (req, res) => {
    Monster.create(req.body).then((monster) => {
      res.json(monster);
    });
  },
  edit: (req, res) => {
    Monster.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true,
    }).then((monster) => {
      res.json(monster);
    });
  },
  delete: (req, res) => {
    Monster.findOneAndDelete({ name: req.params.name }).then((monster) => {
      res.json(monster);
    });
  },
};
