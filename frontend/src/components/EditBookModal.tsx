import { useState } from 'react'
import type { Category } from "../types/Category"

interface EditBookModalProps {
    isOpen: boolean
    onClose: () => void
    categories: Category[]
    initialData: {
      id: number
      name: string
      description: string
      category: string
    }
    onSave: (id: number, data: {
      name: string
      description: string
      category: string
    }) => void
}

function EditBookModal({ isOpen, onClose, onSave, categories, initialData }: EditBookModalProps) {
    const [name, setName] = useState(initialData.name)
    const [description, setDescription] = useState(initialData.description)
    const [category, setCategory] = useState(initialData.category)

    if (!isOpen) return null

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-zinc-800 rounded-lg p-6 w-[90%] max-w-md">
          <h2 className="text-zinc-100 text-lg font-semibold mb-4">Editar libro</h2>
  
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <textarea
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
          </div>
  
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => onSave(initialData.id, { name, description, category })}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              Guardar
            </button>
            <button onClick={onClose} className="px-4 py-2 rounded-lg bg-zinc-600 text-zinc-200 hover:bg-zinc-500 transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
}
  
export default EditBookModal