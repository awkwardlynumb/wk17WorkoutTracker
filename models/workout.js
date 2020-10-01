const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excercise = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number,
});

const Excercise = mongoose.model("Excercise", excercise);

module.exports = Excercise;
