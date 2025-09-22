// src/components/BookItem.jsx
import React, { useCallback } from 'react';
import { useBooks } from '../context/BookContext';

export default function BookItem({ book }) {
  const { removeBook } = useBooks();

  const handleDelete = useCallback(() => {
    removeBook(book.id);
  }, [book.id, removeBook]);

  return (
    <li>
      {book.title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
