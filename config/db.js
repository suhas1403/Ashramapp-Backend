require('dotenv').config();
const { Pool } = require('pg');

// Create a new PostgreSQL client instance
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Export the query function
module.exports = pool;