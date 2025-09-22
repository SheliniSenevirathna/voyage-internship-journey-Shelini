import pool from "../db.js";

// CREATE
export async function createUser(name, email, password) {
  const sql = "INSERT INTO Users (name, email, password) VALUES (?, ?, ?)";
  const [result] = await pool.query(sql, [name, email, password]);
  return result.insertId;
}

// READ
export async function getUsers() {
  const [rows] = await pool.query("SELECT id, name, email, created_at FROM Users");
  return rows;
}

export async function getUserById(id) {
  const [rows] = await pool.query("SELECT id, name, email, created_at FROM Users WHERE id = ?", [id]);
  return rows[0];
}

// UPDATE
export async function updateUser(id, name, email) {
  const sql = "UPDATE Users SET name = ?, email = ? WHERE id = ?";
  const [result] = await pool.query(sql, [name, email, id]);
  return result.affectedRows;
}

// DELETE
export async function deleteUser(id) {
  const sql = "DELETE FROM Users WHERE id = ?";
  const [result] = await pool.query(sql, [id]);
  return result.affectedRows;
}
