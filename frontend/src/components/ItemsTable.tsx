import { useState } from 'react'
import DeleteBookModal from './DeleteBookModal'
import EditBookModal from './EditBookModal'

interface ItemsTableProps {
  title: string
}

function ItemsTable({ title }: ItemsTableProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <>
        <div className="group flex items-center justify-between bg-zinc-700/30 px-4 py-2 rounded-lg border border-transparent hover:border-zinc-600 hover:bg-zinc-700/50 transition-all">
            <span className="text-zinc-200 font-medium">{title}</span>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
                onClick={() => setIsEditOpen(true)}
                className="p-2 text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors"
            >
                <i className="fa-regular fa-pen-to-square"></i>
            </button>

            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
            >
                <i className="fa-solid fa-trash"></i>
            </button>
            </div>
        </div>

        <DeleteBookModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={() => {
            setIsOpen(false)
            }}
        />

        <EditBookModal
            isOpen={isEditOpen}
            onClose={() => setIsEditOpen(false)}
            onSave={(data) => {
            console.log(data)
            setIsEditOpen(false)
            }}
        />
    </>
  )
}

export default ItemsTable