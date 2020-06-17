const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const benchmarkSchema = new Schema({
    name: {type: String, required: true},
    type: {type:String},
    workout: [{type: String}]
});

const Benchmark = mongoose.model("Benchmark", benchmarkSchema);

module.exports = Benchmark;