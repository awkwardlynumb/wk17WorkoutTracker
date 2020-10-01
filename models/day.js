const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const day = mongoose.Schema({
  excercisess: Array,
});

const Day = mongoose.model("Day", day);

module.exports = Day;
