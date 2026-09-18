<?php

use App\Http\Controllers\PersonelController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::resource('products', ProductController::class); // Cria os GET; POST; PUT; DELETE
    Route::resource('personel', PersonelController::class); // Cria os GET; POST; PUT; DELETE
});

require __DIR__.'/settings.php';
