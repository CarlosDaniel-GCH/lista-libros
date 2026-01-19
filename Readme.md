# 📚 Lista de Libros

Sistema de gestión de libros desarrollado con un stack moderno. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de una colección personal de libros organizada por categorías.

## 🛠️ Tecnologías Utilizadas

### Backend
- **Framework:** Laravel 10
- **Lenguaje:** PHP 8.2+
- **Base de Datos:** MySQL / PostgreSQL
- **Arquitectura:** MVC (Model, Controller, Routes, Migrations)

### Frontend
- **Librería:** React 18
- **Lenguaje:** TypeScript (Tipado estricto)
- **Estilos:** Tailwind CSS (Diseño oscuro/Dark Mode)
- **Herramienta de Construcción:** Vite

## 🏗️ Estructura del Proyecto

### Backend (Laravel)
- **Migrations:** Definición de esquemas para las tablas `libros` y `categorias` con integridad referencial.
- **Models:** Relaciones Eloquent entre Libros y Categorías.
- **Controllers:** `LibroController` para gestionar la lógica de negocio y respuestas JSON.
- **Routes:** Endpoints API RESTful (`api/libros`, `api/categorias`).

### Frontend (React + TS)
- **Components:** Piezas reutilizables como `ItemsTable` para el listado de elementos.
- **Modales:** Componentes para confirmación de borrado (`DeleteBookModal`), edición (`EditBookModal`) y creación (`AddBookModal`).
- **Services:** Capa de abstracción para peticiones asíncronas fetch (GET, POST, PUT, DELETE).
- **Interfaces/Types:** Definiciones de TypeScript para asegurar la integridad de los datos (`Book`, `Category`).

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone [https://github.com/CarlosDaniel-GCH/lista-libros.git](https://github.com/CarlosDaniel-GCH/lista-libros.git)
cd lista-libros