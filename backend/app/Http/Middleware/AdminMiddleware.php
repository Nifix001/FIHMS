<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        // // if($user->role->id === 1 ){
        //     // $user = $request->user();
        //     if($user->role->id === 1){
        //         return response()->json(["data"=> ""]);
        //     }
            if($user->role->id === 2 ){
            return $next($request);
        }
        return response()->json("Unauthorized");
    }
}
