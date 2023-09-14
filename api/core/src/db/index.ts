const mysql = require("mysql2/promise");
require("dotenv").config();

export default async function getConnection() {
  return mysql.createConnection(process.env.DATABASE_URL);
}
