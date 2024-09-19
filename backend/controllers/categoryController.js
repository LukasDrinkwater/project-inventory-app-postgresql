const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// import db pool
const pool = require("../db/pool");

// POST new category
exports.addNewCategory = asyncHandler(async (req, res, next) => {
  const newCategory = req.body.newCategory;
  const newVehicleType = req.body.newVehicleType;

  pool.query(
    "INSERT INTO vehicleCategory (category, vehicleType) VALUES ($1, $2)",
    [newCategory, newVehicleType]
  );

  res.status(200).send();
});

// DELETE CATEGORY
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  res.send;
});

// EDIT category
exports.editCategory = asyncHandler(async (req, res, next) => {
  res.send;
});

// GET list of all categories
exports.allGategoryList = asyncHandler(async (req, res, next) => {
  const { rows } = await pool.query(
    "SELECT id, category, vehicletype FROM vehicleCategory ORDER BY category"
  );

  res.json(rows);
});
