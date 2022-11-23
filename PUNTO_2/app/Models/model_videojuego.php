<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class model_videojuego extends Model
{
    /* Defining the table name. */
    protected $table = 'videojuegos';
    use HasFactory;
}
