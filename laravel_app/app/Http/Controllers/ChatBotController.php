<?php

namespace App\Http\Controllers;

use App\Services\ChatBotService;
use Illuminate\Http\Request;

class ChatBotController extends Controller
{
    public function generate(Request $request, ChatBotService $chatBotService)
    {
        $validated = $request->validate([
            'prompt' => ['required', 'string', 'max:5000'],
        ]);

        $response = $chatBotService->generate(
            $request->session()->getId(),
            $validated['prompt']
        );

        return response()->json([
            'response' => $response,
        ]);
    }
}