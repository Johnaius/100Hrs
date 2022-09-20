const mongoose = require("mongoose");

const SolutionSchema = new mongoose.Schema({
  solution: {
    type: Array,
    required: true,
  },
  numOne: {
    type: Number,
    required: true,
  },
  numTwo: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Solution", SolutionSchema);