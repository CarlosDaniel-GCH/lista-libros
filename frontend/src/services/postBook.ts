import type { Book } from "../types/Book";

const API_URL = "http://127.0.0.1:8000/api/libros";

export const postBook = async (bookData: { nombre: string, descripcion: string, id_categoria: number }): Promise<Book> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(bookData)
    });

    if (!response.ok) {
        throw new Error(`Error al guardar: ${response.statusText}`);
    }

    return await response.json();
};