const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/autocoach");

const benchmarkSeed = [
  {
    name: "Angie",
    type: "For Time",
    workout: ["100 Pull-ups", "100 Push-ups", "100 Sit-ups", "100 Air Squats"],
  },
  {
    name: "Cindy",
    type: "AMRAP - 20 mins",
    workout: ["5 pull-ups", "10 push-ups", "15 air squats"],
  },
  {
    name: "Helen",
    type: "3 Rounds for Time",
    workout: ["400m Run", "21 KBS @ 55/35 lb", "12 pull-ups"],
  },
  {
    name: "Jackie",
    type: "For Time",
    workout: ["1000m Row", "50 Thrusters 45/35 lb", "30 pull-ups"],
  },
  {
    name: "Baseline",
    type: "For Time",
    workout: [
      "500m Row",
      "40 Air Squats",
      "30 Sit-ups",
      "20 push-ups",
      "10 Pull-ups",
    ],
  },
  {
    name: "Fight Gone Bad",
    type: "3 Rounds for Time - One minute each move, max reps",
    workout: [
      "Wall Balls 20/14lb 10/8ft target",
      "Sumo Deadlift High Pull 75/55lbs",
      "Box Jumps 20' box",
      "Push-Press 75/55 lb",
      "Row (calories)",
      "Rest",
    ],
  },
  {
    name: "The Ghost",
    type: "6 rounds",
    workout: [
      "1 min Rowing",
      "1 min Burpess",
      "1 min double-unders",
      "1 min Rest",
    ],
  },
  {
    name: "Christine",
    type: "3 Rounds for Time",
    workout: [
      "500m Row",
      "12 deadlifts (bodyweight)",
      "21 Box Jumps (24/20 box)",
    ],
  },
  {
    name: "Fran",
    type: "For Time: 21-15-9",
    workout: ["Thruster 95/65 lb", "Pull-ups"],
  },
  {
    name: "Row Cindy Row",
    type: "AMRAP: 20 mins",
    workout: ["5 Pull-ups", "10 Push-ups", "15 Air Squats", "20 Cal Row"],
  },
  {
    name: "555 Standard",
    type: "5 rounds fot time",
    workout: ["15 Air Squats", "15 Burpees", "15 Hand-Release Push-ups"],
  },
];

db.Benchmark.insertMany(benchmarkSeed)
  .then((data) => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
