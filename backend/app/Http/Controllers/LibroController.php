<?php

namespace App\Http\Controllers;
use App\Models\Libro;
use Illuminate\Http\Request;

class LibroController extends Controller
{
    public function index()
    {
        return Libro::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string',
            'id_categoria' => 'required|exists:categorias,id',
            'descripcion' => 'nullable|string'
        ]);

        return Libro::create($data);
    }

    public function show($id)
    {
        return Libro::with('categoria')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $libro = Libro::findOrFail($id);

        $data = $request->validate([
            'nombre' => 'required|string',
            'id_categoria' => 'required|exists:categorias,id',
            'descripcion' => 'nullable|string'
        ]);

        $libro->update($data);

        return $libro;
    }

    public function destroy($id)
    {
        $libro = Libro::findOrFail($id);

        $libro->delete();

        return response()->json([
            'message' => 'Libro eliminado'
        ]);
    }
}
