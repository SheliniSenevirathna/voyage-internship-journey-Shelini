import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useBooks from '../hooks/useBooks'
import { deleteBook } from '../api/books'
import useDebounce from '../hooks/useDebounce'

export default function BookList() {
  const [page, setPage] = useState(1)
  const [q, setQ] = useState('')
  const debouncedQ = useDebounce(q, 300)
  const pageSize = 5
  const queryClient = useQueryClient()

  const { data, isLoading } = useBooks({ page, pageSize, q: debouncedQ })
  const deleteMutation = useMutation(deleteBook, {
    onSuccess: () => queryClient.invalidateQueries(['books', page, pageSize, debouncedQ])
  })

  if (isLoading) return <div className="p-4">Loading...</div>

  const books = data?.data || []
  const total = data?.total || 0

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Book List</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border p-1 flex-1"
        />
        <Link to="/books/new" className="bg-blue-500 text-white px-4 py-1 rounded">
          Add Book
        </Link>
      </div>

      <table className="border-collapse border w-full mb-4">
        <thead>
          <tr className="border-b">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Title</th>
            <th className="border px-2 py-1">Author</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-b">
              <td className="border px-2 py-1">{book.id}</td>
              <td className="border px-2 py-1">{book.title}</td>
              <td className="border px-2 py-1">{book.author}</td>
              <td className="border px-2 py-1 flex gap-2">
                <Link
                  to={`/books/${book.id}/edit`}
                  className="bg-yellow-400 text-black px-2 py-1 rounded"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    if (window.confirm('Are you sure?')) deleteMutation.mutate(book.id)
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-2 py-1 border rounded"
        >
          Prev
        </button>
        <span>
          Page {page} of {Math.ceil(total / pageSize)}
        </span>
        <button
          disabled={page === Math.ceil(total / pageSize)}
          onClick={() => setPage((p) => p + 1)}
          className="px-2 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  )
}
