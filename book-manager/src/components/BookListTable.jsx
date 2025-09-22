import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import useBooks from '../hooks/useBooks'
import { deleteBook } from '../api/books'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import ConfirmModal from './ConfirmModal'

export default function BooksListTable() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || 1)
  const pageSize = Number(searchParams.get('pageSize') || 5)
  const qParam = searchParams.get('q') || ''

  const [q, setQ] = useState(qParam)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [toDelete, setToDelete] = useState(null)

  const { data, isLoading } = useBooks({ page, pageSize, q })
  const queryClient = useQueryClient()

  const deleteMut = useMutation((id) => deleteBook(id), {
    onSuccess: () => queryClient.invalidateQueries(['books']),
  })

  const onDeleteClick = (book) => {
    setToDelete(book)
    setConfirmOpen(true)
  }

  const onConfirmDelete = async () => {
    if (!toDelete) return
    await deleteMut.mutateAsync(toDelete.id)
    setConfirmOpen(false)
    setToDelete(null)
  }

  const total = data?.total || 0
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    if (q) params.q = q
    else delete params.q
    setSearchParams(params)
  }, [q])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-xl font-bold">Books</h2>
        <Link to="/books/new" className="px-3 py-1 bg-green-600 text-white rounded">
          Add Book
        </Link>
      </div>

      <SearchBar value={q} onChange={setQ} />

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 border">Title</th>
              <th className="px-3 py-2 border">Author</th>
              <th className="px-3 py-2 border">Genre</th>
              <th className="px-3 py-2 border">Published</th>
              <th className="px-3 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.items.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-2">
                  No books found. <Link to="/books/new" className="text-blue-600">Add one</Link>
                </td>
              </tr>
            ) : (
              data.items.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{b.title}</td>
                  <td className="px-3 py-2 border">{b.author}</td>
                  <td className="px-3 py-2 border">{b.genre}</td>
                  <td className="px-3 py-2 border">{b.publishedDate}</td>
                  <td className="px-3 py-2 border flex gap-2">
                    <Link
                      to={`/books/${b.id}/edit`}
                      className="px-2 py-1 border rounded text-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onDeleteClick(b)}
                      className="px-2 py-1 border rounded text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(p) =>
          setSearchParams({ ...Object.fromEntries([...searchParams]), page: p })
        }
      />

      <ConfirmModal
        open={confirmOpen}
        title="Delete Book"
        message={`Are you sure you want to delete "${toDelete?.title}"?`}
        onConfirm={onConfirmDelete}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  )
}
