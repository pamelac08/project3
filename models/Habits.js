const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    name: {type: String, required: true},
    interval: {type: String, required: true},
    frequency: {type: Number, required: true},
    reward: {type: String},
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;