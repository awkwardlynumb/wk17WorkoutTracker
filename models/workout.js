const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        duration: {
          type: Number,
          required: true,
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
  }
);

// userSchema.virtual("domain").get(function () {
//   return this.email.slice(this.email.indexOf("@") + 1);
// });

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;
