import { useState } from 'react'
import DeleteBookModal from './DeleteBookModal'
import EditBookModal from './EditBookModal'
import type { Category } from "../types/Category"

interface ExtendedItemsTableProps {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  categories: Category[];
  onDelete: (id: number) => void;
  onEdit: (id: number, data: { name: string, description: string, category: string }) => void;
}

function ItemsTable({ title, id, description, categoryId, categories, onDelete, onEdit }: ExtendedItemsTableProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <>
        <div className="group flex items-center justify-between bg-zinc-700/30 px-4 py-2 rounded-lg border border-transparent hover:border-zinc-600 hover:bg-zinc-700/50 transition-all">
            <span className="text-zinc-200 font-medium">{title}</span>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => setIsEditOpen(true)} className="p-2 text-zinc-400 hover:text-yellow-500 rounded-lg"><i className="fa-regular fa-pen-to-square"></i></button>
                <button onClick={() => setIsOpen(true)} className="p-2 text-zinc-400 hover:text-red-500 rounded-lg"><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>

        <DeleteBookModal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => { onDelete(id); setIsOpen(false); }} />

        <EditBookModal
            isOpen={isEditOpen}
            onClose={() => setIsEditOpen(false)}
            categories={categories}
            initialData={{ id, name: title, description, category: String(categoryId) }}
            onSave={(id, data) => {
              onEdit(id, data)
              setIsEditOpen(false)
            }}
        />
    </>
  )
}

export default ItemsTable