const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/autocoach"
);

const habitSeed = [
  {
    name: "Drink 80oz water",
    interval: "daily",
    frequency: 1,
    reward: "1 bite sized candy"
  },
  {
    name: "Exercise",
    interval: "weekly",
    frequency: 5,
    reward: "eat out for dinner"
  }
];

  db.Habit
    .insertMany(habitSeed)
    .then(data => {
      console.log(data + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });