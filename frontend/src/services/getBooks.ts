import type { Book } from "../types/Book";

const API_URL = "http://127.0.0.1:8000/api/libros";

export const getBooks = async(): Promise<Book[]> => {
    try{
        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }

        const data: Book[] = await response.json();

        return data;
    }
    catch(error){
        console.error('Error al obtener los libros:', error);

        return[]
    }
}