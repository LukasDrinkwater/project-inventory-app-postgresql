const express = require("express");
const router = express.Router();

const manufacturerController = require("../controllers/manufacturerControler");

// POST new manufacturer
router.post("/create", manufacturerController.addNewManufacturer);

// GET list of all manufacturers
router.get("/all-manufacturers", manufacturerController.allManufacturerList);

module.exports = router;
