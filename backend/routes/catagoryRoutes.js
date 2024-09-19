const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

// POST new category
router.post("/create", categoryController.addNewCategory);

// GET list of all categories
router.get("/all-categories", categoryController.allGategoryList);

module.exports = router;
