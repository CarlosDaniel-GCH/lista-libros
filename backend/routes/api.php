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

Route::get('categorias', [CategoriaController::class, 'index']);
Route::post('categorias', [CategoriaController::class, 'store']);
Route::put('categorias/{id}',[CategoriaController::class, 'update']);
Route::delete('categorias/{id}', [CategoriaController::class, 'destroy']);

Route::get('libros', [LibroController::class, 'index']);
Route::post('libros', [LibroController::class, 'store']);
Route::put('libros/{id}',[LibroController::class, 'update']);
Route::delete('libros/{id}', [LibroController::class, 'destroy']);


// Tambien podemos utilizar
// Route::apiResource('categorias', CategoriaController::class);
// Route::apiResource('libros', LibroController::class);