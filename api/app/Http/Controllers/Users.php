<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class Users extends Controller
{
    public function dateTime()
    {
        $currentDateTime = Carbon::now();
        return response()->json($currentDateTime->addYear()->toDateTimeString())
            ->header('Access-Control-Allow-Origin', '*');
    }
    public function hashPassword($passphrase)
    {
        $hashedPass = Hash::make($passphrase);
        return response()->json($hashedPass)
            ->header('Access-Control-Allow-Origin', '*');
    }
    public function checkPassword($username, $password)
    {
        $user = User::where('username', $username)->first();
        if ($user === null) {
            return response()->json("404Username")
                ->header('Access-Control-Allow-Origin', '*');
        } else {
            if (Hash::check($password, $user->password)) {
                return response()->json($user)
                    ->header('Access-Control-Allow-Origin', '*');
            } else {
                return response()->json("404Password")
                    ->header('Access-Control-Allow-Origin', '*');
            }
        }
    }
    public function login(Request $request)
    {
        $username = $request->input('Username');
        $password = $request->input('Password');
        $user = User::where('username', $username)->first();
        if ($user === null) {
            return response()->json("404Username")
                ->header('Access-Control-Allow-Origin', '*');
        } else {
            if (Hash::check($password, $user->password)) {
                return response()->json($user)
                    ->header('Access-Control-Allow-Origin', '*');
            } else {
                return response()->json("404Password")
                    ->header('Access-Control-Allow-Origin', '*');
            }
        }
    }
}
