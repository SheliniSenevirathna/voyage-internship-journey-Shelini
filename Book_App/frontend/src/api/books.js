import axios from "axios";

const API_URL = "http://localhost:3000/api/books";

export const getBooks = (token) =>
  axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });

export const addBook = (book, token) =>
  axios.post(API_URL, book, { headers: { Authorization: `Bearer ${token}` } });

export const updateBook = (id, book, token) =>
  axios.put(`${API_URL}/${id}`, book, { headers: { Authorization: `Bearer ${token}` } });

export const deleteBook = (id, token) =>
  axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
