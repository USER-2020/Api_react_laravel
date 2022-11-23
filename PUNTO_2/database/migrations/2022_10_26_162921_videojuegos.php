<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Videojuegos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('videojuegos' , function(Blueprint $table){
            $table -> id();
            $table ->string('name');
            $table ->string('description');
            $table ->string('fecha_lanzamiento');
            $table ->string('genero');
            $table ->string('plataform');
            $table ->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('videojuegos');
    }
}
