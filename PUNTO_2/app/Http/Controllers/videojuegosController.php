<?php

namespace App\Http\Controllers;

use App\Models\model_videojuego;
use Illuminate\Http\Request;

class videojuegosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $videojuegos = model_videojuego::all();
        return $videojuegos;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        /* Creating a new instance of the model_videojuego class and saving it to the database. */
        $videojuegos = new model_videojuego();
        $videojuegos -> name = $request->name;
        $videojuegos -> description = $request->description;
        $videojuegos -> fecha_lanzamiento = $request->fecha_lanzamiento;
        $videojuegos -> genero = $request->genero;
        $videojuegos -> plataform = $request->plataform;
        $videojuegos -> save();

        // $videojuegos = model_videojuego::all();
        return $videojuegos;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $videojuegos = model_videojuego::find($id);
        $videojuegos -> name = $request->name;
        $videojuegos -> description = $request->description;
        $videojuegos -> fecha_lanzamiento = $request->fecha_lanzamiento;
        $videojuegos -> genero = $request->genero;
        $videojuegos -> plataform = $request->plataform;
        $videojuegos -> save();

        $videojuegos = model_videojuego::all();
        return $videojuegos;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
