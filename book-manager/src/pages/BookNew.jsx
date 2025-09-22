import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBook } from '../api/books'

export default function BookNew() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const mutation = useMutation(createBook, {
    onSuccess: () => {
      queryClient.invalidateQueries('books')
      navigate('/books')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ title, author })
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Add New Book</h1>
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
            Save
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
