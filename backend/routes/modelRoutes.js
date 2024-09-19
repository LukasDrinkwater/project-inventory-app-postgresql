const express = require("express");
const router = express.Router();

const modelController = require("../controllers/modelControler");

// POST new model
router.post("/create", modelController.addNewModel);
