const Solution = require("../models/Solution");

module.exports = {
 
  createSolution: async (req, res) => {
    console.log(req)
    try {
    await Solution.create({
        solution: req.body.solution,
        numOne: req.body.numOne,
        numTwo:req.body.numTwo,
        user: req.user.id
      });
      console.log("solution has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
}}