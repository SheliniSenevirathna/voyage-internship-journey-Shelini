export default function ConfirmModal({ open, title, message, onConfirm, onCancel }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow w-96">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="my-2">{message}</p>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
          <button onClick={onConfirm} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>
    </div>
  )
}
