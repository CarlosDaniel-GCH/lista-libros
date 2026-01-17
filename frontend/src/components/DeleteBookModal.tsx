interface DeleteBookModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
}
  
function DeleteBookModal({ isOpen, onClose, onConfirm, }: DeleteBookModalProps) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-zinc-800 rounded-lg p-6 w-[90%] max-w-md">
          <h2 className="text-zinc-100 text-lg font-semibold mb-4">
            ¿Estás seguro que quieres eliminar el libro?
          </h2>
  
          <div className="flex justify-end gap-3">
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-colors"
            >
              Sí
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-600 text-zinc-200 hover:bg-zinc-500 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      </div>
    )
}
  
export default DeleteBookModal  