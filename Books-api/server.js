// server.js - Complete RESTful Books API with CRUD, Validation, and Inline Documentation
// Run: node server.js
// Base URL: http://localhost:3000

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory books storage
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, isbn: '9780743273565' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isbn: '9780061120084' }
];
let nextId = 3;

// Validation function
function validateBook(book) {
  if (!book || typeof book !== 'object') return { valid: false, error: 'Invalid book object' };
  if (!book.title || typeof book.title !== 'string' || book.title.length < 1) {
    return { valid: false, error: 'Title must be a non-empty string' };
  }
  if (!book.author || typeof book.author !== 'string' || book.author.length < 1) {
    return { valid: false, error: 'Author must be a non-empty string' };
  }
  if (!book.year || typeof book.year !== 'number' || book.year < 1000 || book.year > new Date().getFullYear()) {
    return { valid: false, error: 'Year must be a valid integer' };
  }
  if (!book.isbn || typeof book.isbn !== 'string' || !/^\d{13}$/.test(book.isbn)) {
    return { valid: false, error: 'ISBN must be a 13-digit string' };
  }
  return { valid: true };
}

// --- CRUD Endpoints ---

// GET all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// GET book by ID
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'ID must be a number' });
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.status(200).json(book);
});

// POST create new book
app.post('/books', (req, res) => {
  const validation = validateBook(req.body);
  if (!validation.valid) return res.status(400).json({ error: validation.error });
  const newBook = { id: nextId++, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'ID must be a number' });
  const validation = validateBook(req.body);
  if (!validation.valid) return res.status(400).json({ error: validation.error });
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books[index] = { id, ...req.body };
  res.status(200).json(books[index]);
});

// DELETE book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'ID must be a number' });
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  const deletedBook = books.splice(index, 1)[0];
  res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
});

// Root endpoint (simple API docs)
app.get('/', (req, res) => {
  res.send(`
    <h1>Books API</h1>
    <ul>
      <li>GET /books - List all books</li>
      <li>GET /books/:id - Get a book by ID</li>
      <li>POST /books - Add a new book (JSON: title, author, year, isbn)</li>
      <li>PUT /books/:id - Update a book by ID</li>
      <li>DELETE /books/:id - Delete a book by ID</li>
    </ul>
  `);
});

// 404 handler
app.use((req, res) => res.status(404).json({ error: 'Endpoint not found' }));

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
