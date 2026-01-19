import { useState, useEffect } from 'react'
import ItemsTable from "./components/ItemsTable"
import AddBookModal from "./components/AddBookModal"
import { getBooks } from "./services/getBooks"
import type { Book } from "./services/getBooks"

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks()
      setBooks(data)
      setLoading(false)
    }
    fetchBooks()
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4 font-sans selection:bg-green-500/30">
      <div className="w-full max-w-md bg-zinc-800/50 p-8 rounded-2xl shadow-2xl border border-zinc-700 backdrop-blur-sm">
        
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">Mis Libros</h1>
          <p className="text-zinc-400 text-sm mt-1">Gestiona tu colección personal</p>
        </header>

        <div className="flex gap-2 mb-8">
          <input 
            type="text"
            placeholder="Título del libro..."
            className="flex-1 bg-zinc-700/50 border border-zinc-600 rounded-xl px-4 py-2 text-white outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all placeholder:text-zinc-500"
          />
          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-green-600 hover:bg-green-500 text-white font-medium px-5 py-2 rounded-xl transition-all active:scale-95 shadow-lg shadow-green-900/20"
          >
            Agregar
          </button>
        </div>

        <div className="space-y-1">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1">Tu Lista</h2>

          {loading ? (
            <p className="text-center text-zinc-500 py-4">Cargando...</p>
          ) : (
            books.map((book) => (
              <ItemsTable key={book.id} title={book.nombre} />
            ))
          )}

          {!loading && books.length === 0 && (
            <p className="text-center text-zinc-500 py-4 italic">No hay libros en la lista</p>
          )}
        </div>
      </div>

      <AddBookModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSave={(data) => {
          console.log('Nuevo libro:', data)
          setIsAddOpen(false)
        }}
      />
    </div>
  )
}

export default App