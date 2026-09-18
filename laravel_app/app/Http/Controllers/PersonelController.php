<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormPersonelRequest;
use App\Http\Requests\FormProductRequest;
use App\Http\Resources\PersonalResource;
use Illuminate\Http\Request;

use Inertia\Inertia;

use App\Models\Personel;
use Laravel\Pail\ValueObjects\Origin\Console;

class PersonelController extends Controller
{
    //


    public function index(Request $request){

        $personel = Personel::query();

        return Inertia::render('personel/index', [
            'collection' => PersonalResource::collection(
                $personel->orderBy('id','desc')->get()
            ),
        ]);
    }

    public function create(){
        return Inertia::render('personel/form', [
            'personel' => new Personel(),
        ]);
    }

    public function store(FormPersonelRequest $request){
        Personel::create($request->validated());
        return to_route('personel.index')->with('message', 'New Personel Added Sucessfuly');
    }

    public function edit(Personel $personel){
        return Inertia::render('personel/form', [
            'personel' => new PersonalResource($personel)
        ]);
    }

    public function update(FormPersonelRequest $request, Personel $personel){
        $personel->update($request->validated());
        return to_route('personel.index')->with('message', 'Personal Information Updated Sucessfuly');
    }

    public function destroy(Personel $personel){
        $personel->delete();
        return to_route('personel.index')->with('message', 'Remove Personal Sucessfuly');
    }
}
