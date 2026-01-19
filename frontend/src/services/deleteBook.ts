const API_URL = "http://127.0.0.1:8000/api/libros";

export const deleteBook = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error al eliminar: ${response.statusText}`);
    }
};