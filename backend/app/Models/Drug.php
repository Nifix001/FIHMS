<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drug extends Model
{
    use HasFactory;
    public function prescription(){
        return $this->belongsToMany(prescription::Class)->withPivot('quantity');
    }
    public function drunIn(){
            return $this->belongsTo(Drug_in::class);
        
    }
}
