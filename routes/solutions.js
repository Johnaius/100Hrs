const express = require("express");
const router = express.Router();
const solutionsController = require("../controllers/solutions");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comments Routes - simplified for now

router.post("/createSolution/:_id", solutionsController.createSolution);
// router.delete("/deletePost/:id", commentsController.deleteComment);

module.exports = router;