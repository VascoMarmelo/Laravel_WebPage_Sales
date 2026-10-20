<?php

use App\Http\Controllers\PersonelController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ChatBotController;
use App\Services\ChatBotService;
use Illuminate\Support\Facades\Route;

#Route::inertia('/', 'welcome')->name('home');
Route::get('/', [ProductController::class, 'index_public'])->name('home');
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product_page');
Route::get('/product/type/{type}', [ProductController::class, 'show_by_type'])->name('product_page_list');

Route::post('/chatbot', [ChatBotController::class, 'generate']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::resource('products', ProductController::class); // Cria os GET; POST; PUT; DELETE
    Route::resource('personel', PersonelController::class); // Cria os GET; POST; PUT; DELETE
});

require __DIR__.'/settings.php';
