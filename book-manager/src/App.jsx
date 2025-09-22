import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import BookList from './pages/BookList'
import BookNew from './pages/BookNew'
import BookEdit from './pages/BookEdit'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/new" element={<BookNew />} />
          <Route path="/books/:id/edit" element={<BookEdit />} />
          <Route path="*" element={<div className="p-4">Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
