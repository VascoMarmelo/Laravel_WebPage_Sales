<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Requests\FormProductRequest;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index(Request $request){

        $products = Product::query();
        $keyword = $request->input("search");
        if ($keyword){
            $products->where('name', 'like','%'. $keyword .'%')->orderBy('id','DESC')->paginate(2);
        }

        return Inertia::render('products/index', [
            'search' => $keyword,
            'collection' => ProductResource::collection(
                $products->orderBy('id', 'DESC')->paginate(2)
            )
        ]);
    }

    public function featured(){
        $laptops = Product::where('type', 'Used Laptop')
            ->orderBy('id', 'DESC')
            ->get();

        $desktops = Product::where('type', 'Used Desktop')
            ->orderBy('id', 'DESC')
            ->get();

        return Inertia::render('frontpage/index', [
            'laptops' => ProductResource::collection($laptops),
            'desktops' => ProductResource::collection($desktops),
        ]);
    }

    public function create(){
        return Inertia::render('products/form', [
            'product' => new Product(),
        ]);
    }

    public function store(FormProductRequest $request){
        Product::create($request->validated());
        return to_route('products.index')->with('message', 'Product created sucessfully');
        

    }

    public function edit(Product $product){
        return Inertia::render('products/form', [
            'product'=> new ProductResource($product),
        ]);
    }

    public function update(FormProductRequest $request, Product $product){
        $product->update($request->validated());
        return to_route('products.index')->with('message','Product updated sucessfully');
    }

    public function destroy(Product $product){
        $product->delete();
        return to_route('products.index')->with('message','Product Deleted sucessfully');
    }
}
