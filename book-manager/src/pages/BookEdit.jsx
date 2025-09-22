import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getBook, updateBook } from '../api/books'

export default function BookEdit() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBook() {
      const book = await getBook(id)
      if (!book) {
        alert('Book not found')
        navigate('/books')
        return
      }
      setTitle(book.title)
      setAuthor(book.author)
      setLoading(false)
    }
    fetchBook()
  }, [id, navigate])

  const mutation = useMutation((data) => updateBook(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries('books')
      navigate('/books')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ title, author })
  }

  if (loading) return <div className="p-4">Loading book...</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Edit Book ID: {id}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-1"
          required
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate('/books')}
            className="bg-gray-300 px-4 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
