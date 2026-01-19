import { useState, useEffect } from 'react'
import ItemsTable from "./components/ItemsTable"
import AddBookModal from "./components/AddBookModal"
import { getBooks } from "./services/getBooks"
import { postBook } from "./services/postBook"
import { deleteBook } from "./services/deleteBook"
import { getCategories } from "./services/getCategories"
import type { Category } from "./types/Category"
import type { Book } from "./types/Book"

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [books, setBooks] = useState<Book[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const loadInitialData = async () => {
      const [booksData, categoriesData] = await Promise.all([
        getBooks(),
        getCategories()
      ])
      setBooks(booksData)
      setCategories(categoriesData)
      setLoading(false)
    }
    loadInitialData()
  }, [])

  const handleSaveBook = async (data: { name: string, description: string, category: string }) => {
    try {
      const newBook = await postBook({
        nombre: data.name,
        descripcion: data.description,
        id_categoria: Number(data.category)
      })
      setBooks((prevBooks) => [...prevBooks, newBook])
      setIsAddOpen(false)
    } catch (error) {
      console.error(error)
      alert("Error al guardar el libro")
    }
  }

  const handleDeleteBook = async (id: number) => {
    try {
      await deleteBook(id)
      setBooks((prevBooks) => prevBooks.filter(book => book.id !== id))
    } catch (error) {
      console.error(error)
      alert("No se pudo eliminar el libro")
    }
  }

  const filteredBooks = books.filter((book) =>
    book.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
            placeholder="Buscar por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
            <p className="text-center text-zinc-500 py-4 italic">Cargando datos...</p>
          ) : (
            filteredBooks.map((book) => (
              <ItemsTable 
                key={book.id} 
                id={book.id} 
                title={book.nombre} 
                onDelete={handleDeleteBook}
              />
            ))
          )}
          {!loading && filteredBooks.length === 0 && (
            <p className="text-center text-zinc-500 py-4 italic text-zinc-600">
              {searchTerm ? "No se encontraron coincidencias" : "No hay libros en la lista"}
            </p>
          )}
        </div>
      </div>

      <AddBookModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSave={handleSaveBook}
        categories={categories}
      />
    </div>
  )
}

export default App