<?php

namespace App\Http\Controllers;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        return Categoria::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'sometimes|required|string',
            'descripcion' => 'sometimes|nullable|string'
        ]);

        return Categoria::create($data);
    }

    public function update(Request $request, $id)
    {
        $categoria = Categoria::findOrFail($id);

        $data = $request->validate([
            'nombre' => 'sometimes|required|string',
            'descripcion' => 'sometimes|nullable|string'
        ]);

        $categoria->update($data);

        return $categoria;
    }

    public function destroy($id)
    {
        $categoria = Categoria::findOrFail($id);

        $categoria->delete();

        return response()->json([
            'message' => 'Categoría eliminada'
        ]);
    }
}
