// src/context/BookContext.jsx
import React, { createContext, useState, useContext } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const addBook = (book) => setBooks(prev => [...prev, book]);
  const removeBook = (id) => setBooks(prev => prev.filter(b => b.id !== id));

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, loading, setLoading }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
