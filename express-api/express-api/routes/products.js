const express = require("express");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Cupcake", price: 200 },
    { id: 2, name: "Burger", price: 500 }
  ]);
});

// GET single product
router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.json({ id: productId, name: `Product ${productId}`, price: 100 });
});

module.exports = router;
