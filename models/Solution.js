const mongoose = require("mongoose");

const SolutionSchema = new mongoose.Schema({
  solution: {
    type: Array,
    required: true,
  },
  ans: {
    type: Array,
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