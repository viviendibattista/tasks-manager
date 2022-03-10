<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tasksList/{q?}', 'App\Http\Controllers\TaskController@index');
Route::get('/tasks/edit/{id}', 'App\Http\Controllers\TaskController@edit');
Route::patch('/tasks/edit/{id}', 'App\Http\Controllers\TaskController@update');
Route::delete('/tasks/{id}', 'App\Http\Controllers\TaskController@destroy');
Route::post('/tasksList', 'App\Http\Controllers\TaskController@store');
