const mysql = require("mysql2/promise");
import "dotenv/config";

export default async function getConnection() {
  return mysql.createConnection(process.env.DATABASE_URL);
}
