<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DoctorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        // if($user->role->id === 1 || $user->role->id=== 3){
            if($user->role->id === 1){
                return response()->json([
                    "status"=>false,
                    "data"=> "Unverified",
                ]);
            }
            if($user->role->id === 2 || $user->role->id=== 4 ){
            return $next($request);
        }
        return response()->json("Unauthorized");
    }
}
