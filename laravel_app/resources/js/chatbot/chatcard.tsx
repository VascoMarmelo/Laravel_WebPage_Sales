import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Product } from "@/types"
import { useState } from "react";

import { SlClose } from "react-icons/sl";

export default function ChatCard() {

    const [disabled, setDisabled] = useState(false);
    const [prompts, setPrompt] = useState<string[]>([])
    const [promptText, setPromptText] = useState("")
    

    const sendPrompt = async () => {
        if (!promptText.trim()) {
            return;
        }

        try {
            const response = await fetch("/chatbot", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN":
                    document
                        .querySelector('meta[name="csrf-token"]')
                        ?.getAttribute("content") ?? "",
                },
                body: JSON.stringify({
                    prompt: promptText,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send prompt");
            }

            const data = await response.json();

            console.log(data);

            setPrompt((previous) => [
                ...previous,
                promptText,
                data.response,
            ]);

            setPromptText("");
        } catch (error) {
            console.error(error);
        }
    };

    if (disabled) {
        return null;
    }

    return (
        <Card className="fixed bottom-4 right-4 w-96">
            <CardHeader>
                <div className="flex justify-between align-middle items-center">
                    <CardTitle className="">ChatBot</CardTitle>
                    <Button className="bg-transparent border border-transparent hover:bg-transparent hover:border hover:border-gray-300 justify-center" onClick={() => setDisabled(true)}><SlClose className="text-white "/></Button>
                </div>
                <Card className="overflow-scroll h-99%">
                    {prompts.map((p, index : number) => {
                        return (
                            <div>
                                {index % 2 == 0 ? (
                                    <div className="px-3">
                                        {p}
                                    </div>
                                ) : (
                                    <div className="px-3 text-right">
                                        <i>{p}</i>
                                    </div>
                                )}
                            </div>
                        )
                    })} 
                </Card>
                <Input 
                    id="promptText" 
                    name="promptText"
                    type="promptText"
                    value={promptText} 
                    placeholder="Write here to talk"   
                    onChange={(event) => setPromptText(event.target.value)}             
                />
            </CardHeader>
            <CardFooter>
                <Button className="w-full" onClick={sendPrompt}>Send</Button>
            </CardFooter>
        </Card>
    );
}
