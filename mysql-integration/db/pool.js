import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

dotenv.config(); // load .env

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


// Test connection
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log('✅ MySQL Connected!');
    conn.release();
  } catch (err) {
    console.error('❌ MySQL Connection Error:', err.code, err.message);
  }
})();
