const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Import db pool
const pool = require("../db/pool");

// POST new model
exports.addNewModel = asyncHandler(async (req, res, next) => {
  const modelName = req.body.modelName;
  const manufacturer = req.body.manufacturer;
  const category = req.body.category;
  const year = req.body.year;
  const description = req.body.description;
  const price = req.body.price;

  pool.query(
    `INSERT INTO models (manufacturerid, name, year, description, price, vehiclecategoryid)
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [manufacturer, modelName, year, description, price, category]
  );
});

// DELETE model
