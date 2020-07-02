const db = require("../models");

module.exports = {
  findAllMovement: function (req, res) {
    db.Movement.find()
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOneMovement: function (req, res) {
    db.Movement.findOne({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createMovement: function (req, res) {
    db.Movement.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateMovement: function (req, res) {
    db.Movement.findOneAndUpdate(
      { _id: req.params.id },
      { equipment: req.body.equipment },
      { saved: true }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeMovement: function (req, res) {
    db.Movement.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAllHabit: function (req, res) {
    db.Habit.find()
      // .sort({name: -1})
      .then((dbModel) => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
      .catch((err) => res.json(err));
  },
  findOneHabit: function (req, res) {
    db.Habit.findOne({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createHabit: function (req, res) {
    db.Habit.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateHabit: function (req, res) {
    db.Habit.findOneAndUpdate({ _id: req.params.id }, { saved: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeHabit: function (req, res) {
    db.Habit.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAllUsers: function (req, res) {
    db.User.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};
