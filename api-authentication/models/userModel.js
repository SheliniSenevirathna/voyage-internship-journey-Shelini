// models/userModel.js
import { pool } from '../db.js';

export async function findUserByEmail(email) {
  const [rows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);
  return rows[0];
}

export async function findUserById(id) {
  const [rows] = await pool.query('SELECT id, name, email, role, created_at FROM Users WHERE id = ?', [id]);
  return rows[0];
}

export async function createUser({ name, email, password, role = 'user' }) {
  const [result] = await pool.query(
    'INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, password, role]
  );
  return { id: result.insertId, name, email, role };
}
