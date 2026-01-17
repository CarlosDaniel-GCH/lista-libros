<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\LibroController;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*
|--------------------------------------------------------------------------
| CATEGORÍAS
|--------------------------------------------------------------------------
*/
Route::get('categorias', [CategoriaController::class, 'index']);
Route::get('categorias/{id}', [CategoriaController::class, 'show']); 
Route::post('categorias', [CategoriaController::class, 'store']);
Route::put('categorias/{id}',[CategoriaController::class, 'update']);
Route::delete('categorias/{id}', [CategoriaController::class, 'destroy']);

/*
|--------------------------------------------------------------------------
| LIBROS
|--------------------------------------------------------------------------
*/
Route::get('libros', [LibroController::class, 'index']);
Route::get('libros/{id}', [LibroController::class, 'show']);
Route::post('libros', [LibroController::class, 'store']);
Route::put('libros/{id}',[LibroController::class, 'update']);
Route::delete('libros/{id}', [LibroController::class, 'destroy']);


// Tambien podemos utilizar
// Route::apiResource('categorias', CategoriaController::class);
// Route::apiResource('libros', LibroController::class);