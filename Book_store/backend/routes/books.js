import express from "express";
const router = express.Router();

// Mock book data
const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    year: 1999,
    price: "$39.99"
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    price: "$34.99"
  },
  {
    id: 3,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    year: 2015,
    price: "$29.99"
  },
  {
    id: 4,
    title: "Refactoring",
    author: "Martin Fowler",
    year: 1999,
    price: "$44.99"
  },
  {
    id: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    price: "$24.99"
  }
];

// GET /api/books
router.get("/", (req, res) => {
  res.json(books);
});

export default router;
