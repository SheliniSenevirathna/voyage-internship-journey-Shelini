export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex gap-2 mt-4">
      <button disabled={page <= 1} onClick={() => onPageChange(page - 1)} className="px-2 py-1 border rounded">Prev</button>
      <span className="px-2 py-1 border rounded">{page} / {totalPages}</span>
      <button disabled={page >= totalPages} onClick={() => onPageChange(page + 1)} className="px-2 py-1 border rounded">Next</button>
    </div>
  )
}
