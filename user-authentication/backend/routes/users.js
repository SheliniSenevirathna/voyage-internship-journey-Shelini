import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const JWT_SECRET = "replace_this_with_a_long_random_secret_for_prod";

// In the demo we read the same in-memory users array from auth.js.
// To keep this file self-contained, re-declare the in-memory users reference:
// (In a real app you'd have a shared DB or a proper module to access users.)
const users = []; // NOTE: in demo real users are stored in auth.js runtime memory

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Missing token" });

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = payload;
    next();
  });
}

// GET /api/users/me
router.get("/me", authenticateToken, (req, res) => {
  // WARNING: since this demo uses separate in-memory users arrays in two modules,
  // this route won't find users added in auth.js. For a working demo, we suggest
  // merging user storage into a shared module. For simplicity, return the token payload:
  res.json({ id: req.user.id, email: req.user.email });
});

export default router;
