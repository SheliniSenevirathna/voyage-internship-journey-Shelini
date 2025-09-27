import express from "express";
import db from "../config/db.js"; // your MySQL connection

const router = express.Router();

// Register User
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user already exists
  const checkUser = "SELECT * FROM users WHERE email = ?";
  db.query(checkUser, [email], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Insert new user
    const insertUser = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(insertUser, [username, email, password], (err, result) => {
      if (err) return res.status(500).json({ error: "Database insert failed" });
      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

export default router;
