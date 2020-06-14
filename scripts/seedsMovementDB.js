const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/autocoach"
);

const movementSeed = [
  {
    name: "Burpee",
    equipment: [],
    body: "full"
  },
  {
    name: "Power Clean",
    equipment: ["barbell"],
    body: "full"
  }
];

  db.Movement
    .insertMany(movementSeed)
    .then(data => {
      console.log(data + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });

    