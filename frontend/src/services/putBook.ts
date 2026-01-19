import type { Book } from "../types/Book";

const API_URL = "http://127.0.0.1:8000/api/libros";

export const putBook = async (id: number, bookData: { nombre: string, descripcion: string, id_categoria: number }): Promise<Book> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(bookData)
    });

    if (!response.ok) {
        throw new Error(`Error al actualizar: ${response.statusText}`);
    }

    return await response.json();
};