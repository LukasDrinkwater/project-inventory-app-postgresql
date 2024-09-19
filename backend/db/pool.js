const { Pool } = require("pg");
// import env
require("dotenv").config();
console.log(process.env.PG_USER);
console.log(process.env.PG_DATABASE);
console.log(process.env.PG_PASSWORD);

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: 5432, // Default port for PostgreSQL
});
