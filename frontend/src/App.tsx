import { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import ItemsTable from "./components/ItemsTable"
import AddBookModal from "./components/AddBookModal"
import { getBooks } from "./services/getBooks"
import { postBook } from "./services/postBook"
import { deleteBook } from "./services/deleteBook"
import { putBook } from "./services/putBook"
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
      try {
        const [booksData, categoriesData] = await Promise.all([getBooks(), getCategories()])
        setBooks(booksData)
        setCategories(categoriesData)
      } catch (error) {
        toast.error("Error al cargar los datos" + error)
      } finally {
        setLoading(false)
      }
    }
    loadInitialData()
  }, [])

  const handleSaveBook = async (data: { name: string, description: string, category: string }) => {
    try {
      const newBook = await postBook({ nombre: data.name, descripcion: data.description, id_categoria: Number(data.category) })
      setBooks((prev) => [...prev, newBook])
      setIsAddOpen(false)
      toast.success("Libro agregado con éxito")
    } catch (error) {
      toast.error("No se pudo guardar el libro" + error)
    }
  }

  const handleDeleteBook = async (id: number) => {
    try {
      await deleteBook(id)
      setBooks((prev) => prev.filter(book => book.id !== id))
      toast.success("Libro eliminado correctamente")
    } catch (error) {
      toast.error("Error al eliminar el libro" + error)
    }
  }

  const handleEditBook = async (id: number, data: { name: string, description: string, category: string }) => {
    try {
      const updatedBook = await putBook(id, { nombre: data.name, descripcion: data.description, id_categoria: Number(data.category) })
      setBooks((prev) => prev.map(book => book.id === id ? updatedBook : book))
      toast.success("Libro actualizado con éxito")
    } catch (error) {
      toast.error("Error al actualizar el libro" + error)
    }
  }

  const filteredBooks = books.filter((book) => book.nombre.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4 font-sans">
      <Toaster 
        position="bottom-right" 
        richColors 
        theme="dark" 
        toastOptions={{
          style: { 
            background: '#18181b',
            color: '#f4f4f5',
            border: '1px solid #3f3f46'
          },
        }}
      />
      
      <div className="w-full max-w-md bg-zinc-800/50 p-8 rounded-2xl shadow-2xl border border-zinc-700 backdrop-blur-sm">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">Mis Libros</h1>
        </header>

        <div className="flex gap-2 mb-8">
          <input type="text" placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-1 bg-zinc-700/50 border border-zinc-600 rounded-xl px-4 py-2 text-white outline-none focus:ring-2 focus:ring-green-500" />
          <button onClick={() => setIsAddOpen(true)} className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-xl transition-all active:scale-95 shadow-lg shadow-green-900/20">Agregar</button>
        </div>

        <div className="space-y-1">
          {loading ? <p className="text-center text-zinc-500 py-4 italic">Cargando...</p> : 
            filteredBooks.map((book) => (
              <ItemsTable 
                key={book.id} 
                id={book.id} 
                title={book.nombre} 
                description={book.descripcion}
                categoryId={book.id_categoria}
                categories={categories}
                onDelete={handleDeleteBook}
                onEdit={handleEditBook}
              />
            ))
          }
        </div>
      </div>

      <AddBookModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onSave={handleSaveBook} categories={categories} />
    </div>
  )
}

export default App