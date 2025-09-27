import React, { useState } from "react";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addBook = () => {
    if (!title) return;
    if (editingId) {
      setBooks(books.map(b => b.id === editingId ? { ...b, title } : b));
      setEditingId(null);
    } else {
      setBooks([...books, { id: books.length + 1, title }]);
    }
    setTitle("");
  };

  const editBook = (book) => {
    setTitle(book.title);
    setEditingId(book.id);
  };

  const deleteBook = (id) => setBooks(books.filter(b => b.id !== id));

  const filteredBooks = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Books Page</h1>

      <input
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <input
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addBook}>{editingId ? "Update" : "Add"}</button>
      </div>

      <ul>
        {filteredBooks.map((b) => (
          <li key={b.id}>
            {b.title} 
            <button onClick={() => editBook(b)}>Edit</button>
            <button onClick={() => deleteBook(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
