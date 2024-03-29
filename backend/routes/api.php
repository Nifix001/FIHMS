<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\DrugController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;
use App\Models\User;
// use Vendor\Sanctum\Src\Http\Controllers\CsrfCookieController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// Route::get('/sanctum/csrf-cookie',[CsrfCookieController::class, 'show']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

     $request->user();
});
// Route::post('/tokens/create', function (Request $request) {
//     $token = $request->user()->createToken($request->token_name);
 
//     return ['token' => $token->plainTextToken];
// });
Route::middleware('auth:sanctum','admin')->post('/mail', function (Request $request) {
     // $user = User::findOrFail($request->id);
     $url = URL::temporarySignedRoute('doc',now()->addSeconds(60),['name'=>'sia']);
     Mail::to($request->email)->send(new WelcomeMail($url));
     return response()->json(["message"=>"email sent"]);
     //     return ['token' => $token->plainTextToken];
     });
Route::middleware('auth:sanctum')->get('/patients',[PatientController::class, 'total']);
Route::middleware('auth:sanctum')->get('/patient',[PatientController::class, 'show']);
Route::middleware('auth:sanctum','admin')->post('/patient',[PatientController::class, 'store']);
Route::middleware('auth:sanctum','admin')->put('/patient/{id}',[PatientController::class, 'update']);
Route::middleware('auth:sanctum','admin')->delete('patient/{id}', [PatientController::class, 'delete']);

Route::middleware('auth:sanctum')->get('/drugs',[DrugController::class, 'show']);
Route::middleware('auth:sanctum','pharm')->post('/drugs',[DrugController::class, 'store']);
Route::middleware('auth:sanctum','pharm')->put('/drugs/{id}',[DrugController::class, 'update']);
Route::middleware('auth:sanctum','pharm')->delete('/drugs/{id}',[DrugController::class, 'delete']);

Route::middleware('auth:sanctum')->get('/prescriptions',[PrescriptionController::class, 'total']);
Route::middleware('auth:sanctum')->get('/prescription/patients/',[PrescriptionController::class, 'get']);
Route::middleware('auth:sanctum')->get('/prescription',[PrescriptionController::class, 'show']);
Route::middleware('auth:sanctum','doc')->post('/prescription',[prescriptionController::class, 'store']);
Route::middleware('auth:sanctum','pharm')->put('/prescription/{id}',[PrescriptionController::class, 'update']);
Route::middleware('auth:sanctum')->get('/prescription/history',[PrescriptionController::class, 'history']);

// doctor endpoint
Route::middleware('auth:sanctum','doc')->get('/patients/history',[PatientController::class, 'search']);
Route::middleware('auth:sanctum','admin')->get('/users',[UserController::class, 'show']);
Route::middleware('auth:sanctum','admin')->put('/user/role/{id}',[UserController::class, 'update']);



Route::get('/boom/{name}', function(\Illuminate\Http\Request $request,$name){
    if(!$request->hasValidSignature()){
        abort(401);
    }
    return redirect("https://google.com");
//     response()->json(array( 'details'=>true));
})->name('doc');

// Route::get('/sign',function(){
//  $url = URL::temporarySignedRoute('doc',now()->addSeconds(30),['name'=>'sia']);
//  return $url;
// });

