const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/autocoach"
);

const movementSeed = [
  {
    name: "Toes to Bar",
    equipment: "pull-up-bar",
    focus: "upper",
    scaled: "Hanging Knee Raises"
  },
  {
    name: "Push-ups",
    equipment: "none",
    focus: "upper",
    scaled: "Knee Push-ups"
  },
  {
    name: "Pull-Ups",
    equipment: "pull-up-bar",
    focus: "upper",
    scaled: "Ring Rows/Jumping Pull-ups"
  },
  {
    name: "Strict Press",
    equipment: "barbell",
    focus: "upper",
    scaled: ""
  },
  {
    name: "Push Jerk",
    equipment: "barbell",
    focus: "upper",
    scaled: "Push Press"
  },
  {
    name: "Bent Over Rows (Dumbbell)",
    equipment: "dumbbell",
    focus: "upper",
    scaled: ""
  },
  {
    name: "Bent Over Rows (Barbell)",
    equipment: "barbell",
    focus: "upper",
    scaled: ""
  },
  {
    name: "Upright Rows",
    equipment: "dumbbell",
    focus: "upper",
    scaled: ""
  },
  {
    name: "Back Squat",
    equipment: "barbell",
    focus: "lower",
    scaled: "Air Squat"
  },
  {
    name: "Lunges",
    equipment: "none",
    focus: "lower",
    scaled: ""
  },
  {
    name: "Overhead Lunges",
    equipment: "dumbbell",
    focus: "lower",
    scaled: "Lunges"
  },
  {
    name: "Overhead Squats",
    equipment: "barbell",
    focus: "lower",
    scaled: "Front Squats"
  },
  {
    name: "Goblet Squats",
    equipment: "kettlebell",
    focus: "lower",
    scaled: "Air Squat"
  },
  {
    name: "Box Jumps",
    equipment: "box",
    focus: "lower",
    scaled: "Box Step-ups"
  },
  {
    name: "Front Squats (Barbell)",
    equipment: "barbell",
    focus: "lower",
    scaled: "Air Squats"
  },
  {
    name: "Front Squats (Dumbbell)",
    equipment: "dumbbell",
    focus: "lower",
    scaled: "Air Squats"
  },
  {
    name: "Deadlifts",
    equipment: "barbell",
    focus: "lower",
    scaled: ""
  },
  {
    name: "Power Snatch (Barbell)",
    equipment: "barbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Power Snatch (Dumbbell)",
    equipment: "dumbbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Hang Power Snatch (Barbell)",
    equipment: "barbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Burpee",
    equipment: "none",
    focus: "full",
    scaled: ""
  },
  {
    name: "Power Cleans (Barbell)",
    equipment: "barbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Power Cleans (Dumbbell)",
    equipment: "dumbbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Hang Power Cleans (Barbell)",
    equipment: "barbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Clean and Jerk (Barbell)",
    equipment: "barbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Burpee Box Jumps",
    equipment: "box",
    focus: "full",
    scaled: "Burpee Box Step-ups"
  },
  {
    name: "Double Unders",
    equipment: "jump-rope",
    focus: "full",
    scaled: "Single Unders"
  },
  {
    name: "Kettlebell Swings",
    equipment: "kettlebell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Thruster (Barbell)",
    equipment: "barbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Thruster (Dumbbell)",
    equipment: "dumbbell",
    focus: "full",
    scaled: ""
  },
  {
    name: "Wall Balls",
    equipment: "med-ball",
    focus: "full",
    scaled: ""
  },
  {
    name: "Row",
    equipment: "rower",
    focus: "cardio",
    scaled: ""
  },
  {
    name: "Air Bike",
    equipment: "air-bike",
    focus: "cardio",
    scaled: ""
  },
  {
    name: "Run",
    equipment: "none",
    focus: "cardio",
    scaled: ""
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

    