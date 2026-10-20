<?php

namespace App\Http\Controllers;

use App\Services\ChatBotService;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Log;

class ChatBotController extends Controller
{
    # Call for the API chat_model_apis
    # Request $request -> frontend input and data for the api call
    # ChatBotService $chatBotService -> Service object
    public function generate(Request $request, ChatBotService $chatBotService)
    {
        $validated = $request->validate([
            'prompt' => ['required', 'string', 'max:5000'],
        ]);

        $response = $chatBotService->generate(
            $request->session()->getId(),
            $validated['prompt']
        );

        # Remove " from the response string
        $response = str_replace("\"", "", $response);

        return response()->json([
            'response' => $response,
        ]);
    }
}