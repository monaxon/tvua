<?php

namespace App\Http\Controllers;

use App\Models\College;

class Colleges extends Controller
{
    public function getColleges()
    {
        $Colleges = College::all();
            return response()->json($Colleges)
                ->header('Access-Control-Allow-Origin', '*');
    }
}
