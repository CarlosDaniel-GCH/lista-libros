import type { Category } from "../types/Category";

const API_URL = "http://127.0.0.1:8000/api/categorias";

export const getCategories = async (): Promise<Category[]> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al obtener categorías");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};