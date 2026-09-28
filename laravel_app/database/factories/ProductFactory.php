<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => fake()->name(),
            'description' => fake()->sentence(),
            'type' => fake()->randomElement(['Used Desktop', 'Used Laptop', 'New Desktop', 'New Laptop']),
            'image' => 'https://picsum.photos/640/480?random=' . fake()->unique()->numberBetween(1, 10000),
            'price' => fake()->randomFloat(2, 10, 500),
        ];
    }
}