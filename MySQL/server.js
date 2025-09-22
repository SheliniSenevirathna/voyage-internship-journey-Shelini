// server.js
import express from "express";
import dotenv from "dotenv";
import { pool } from "./db.js"; // MySQL connection

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for JSON body parsing
app.use(express.json());

// Default route (so browser doesn't say Cannot GET /)
app.get("/", (req, res) => {
  res.send("🚀 API is running. Try GET /users or POST /users");
});

// Fetch all users
app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a user
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }
    const [result] = await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Test MySQL connection
app.get("/db-test", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    res.json({ success: true, server_time: rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
