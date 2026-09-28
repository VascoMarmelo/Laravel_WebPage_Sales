<?php

namespace App\Services;

use GuzzleHttp\Handler\Timeout;
use Illuminate\Support\Facades\Http;


class ChatBotService
{

    // Typed integer class property
    private int $timeout = 120;

    public function generate(string $userId, string $prompt): string
    {
        $response = Http::timeout($this->timeout)->post(
            config('services.python_api.url') . '/model/',
            [
                'user_id' => $userId,
                'prompt_text' => $prompt,
            ]
        );

        $response->throw();

        return $response;
    }
}