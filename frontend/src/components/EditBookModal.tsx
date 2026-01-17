interface EditBookModalProps {
    isOpen: boolean
    onClose: () => void
    onSave: (data: {
      name: string
      description: string
      category: string
    }) => void
}

function EditBookModal({ isOpen, onClose, onSave, }: EditBookModalProps) {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-zinc-800 rounded-lg p-6 w-[90%] max-w-md">
          <h2 className="text-zinc-100 text-lg font-semibold mb-4">
            Editar libro
          </h2>
  
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <textarea
              placeholder="Descripción"
              className="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <select
              className="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar categoría</option>
            </select>
          </div>
  
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() =>
                onSave({
                  name: '',
                  description: '',
                  category: '',
                })
              }
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              Guardar
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-600 text-zinc-200 hover:bg-zinc-500 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
}
  
export default EditBookModal