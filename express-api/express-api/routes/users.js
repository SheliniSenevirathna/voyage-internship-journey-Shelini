const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Shelini" },
    { id: 2, name: "John Doe" }
  ]);
});

// GET single user
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
});

module.exports = router;
