import { pool } from "../config/db.js";

export const getBooks = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM books ORDER BY created_at DESC");
  res.json(rows);
};

export const addBook = async (req, res) => {
  const { title, author, description, published_year } = req.body;
  await pool.query(
    "INSERT INTO books (title, author, description, published_year) VALUES (?, ?, ?, ?)",
    [title, author, description, published_year]
  );
  res.json({ message: "Book added" });
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, description, published_year } = req.body;
  await pool.query(
    "UPDATE books SET title=?, author=?, description=?, published_year=? WHERE id=?",
    [title, author, description, published_year, id]
  );
  res.json({ message: "Book updated" });
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM books WHERE id=?", [id]);
  res.json({ message: "Book deleted" });
};
