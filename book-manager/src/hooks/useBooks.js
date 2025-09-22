import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../api/books'

export default function useBooks({ page, pageSize, q }) {
  return useQuery(['books', page, pageSize, q], () => getBooks({ page, pageSize, q }))
}
