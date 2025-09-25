import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "db", // use env or fallback to 'db' (for Docker)
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("DB connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});


// Use environment PORT or default to 3000
const DEFAULT_PORT = parseInt(process.env.PORT) || 3000;

// Function to find a free port
import net from "net";
function findFreePort(port, callback) {
  const server = net.createServer();
  server.listen(port, () => {
    server.close(() => callback(port));
  });
  server.on("error", () => findFreePort(port + 1, callback));
}

// Start server on free port
findFreePort(DEFAULT_PORT, (port) => {
  app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
  });
});
