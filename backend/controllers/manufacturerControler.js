const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Import db pool
const pool = require("../db/pool");

// POST new manufacturer
exports.addNewManufacturer = asyncHandler(async (req, res, next) => {
  const newManufacturerName = req.body.name;
  const newCountry = req.body.country;

  pool.query("INSERT INTO manufacturers (name, country) VALUES ($1, $2)", [
    newManufacturerName,
    newCountry,
  ]);

  res.status(200).send();
});

// GET list of all manufacturers
exports.allManufacturerList = asyncHandler(async (req, res, next) => {
  const { rows } = await pool.query(
    "SELECT id, name, country FROM manufacturers ORDER BY name"
  );
  res.json(rows);
});
