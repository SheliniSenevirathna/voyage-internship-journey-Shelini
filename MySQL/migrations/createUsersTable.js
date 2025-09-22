import pool from "../db.js";

async function migrate() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  try {
    const conn = await pool.getConnection();
    await conn.query(sql);
    console.log("✅ Users table created/migrated");
    conn.release();
  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migrate();
