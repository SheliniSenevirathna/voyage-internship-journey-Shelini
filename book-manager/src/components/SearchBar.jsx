export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by title or author"
      className="border p-1 rounded w-full mb-2"
    />
  )
}
