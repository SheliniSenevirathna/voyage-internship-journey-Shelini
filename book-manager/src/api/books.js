let books = [
  { id: 1, title: 'Book One', author: 'Author A' },
  { id: 2, title: 'Book Two', author: 'Author B' }
]

export function getBooks({ page = 1, pageSize = 5, q = '' }) {
  const filtered = books.filter(b => b.title.toLowerCase().includes(q.toLowerCase()))
  const start = (page - 1) * pageSize
  const data = filtered.slice(start, start + pageSize)
  return Promise.resolve({ data, total: filtered.length })
}

export function getBook(id) {
  const book = books.find(b => b.id === Number(id))
  return Promise.resolve(book)
}

export function createBook({ title, author }) {
  const id = books.length ? books[books.length - 1].id + 1 : 1
  const newBook = { id, title, author }
  books.push(newBook)
  return Promise.resolve(newBook)
}

export function updateBook(id, { title, author }) {
  const book = books.find(b => b.id === Number(id))
  if (book) {
    book.title = title
    book.author = author
  }
  return Promise.resolve(book)
}

export function deleteBook(id) {
  books = books.filter(b => b.id !== Number(id))
  return Promise.resolve()
}
