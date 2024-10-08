// hooks/useChat.ts
import { useState } from "react";
import { useBotResponse } from "./useBotResponse";

interface ChatMessage {
    sender: "user" | "bot";
    text?: string;
    buttons?: {
        button1?: { label: string; payload: string };
        button2?: { label: string; payload: string };
    };
}

export const useChat = () => {
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const { loading, error, fetchBotResponse } = useBotResponse();

    const handleUserMessage = async (message: string) => {
        // Add user message to chat
        setChatMessages((prev) => [...prev, { sender: "user", text: message }]);

        // Fetch bot response
        const result = await fetchBotResponse(message);

        // Add bot response to chat
        if (result) {
            result.forEach((res: any) => {
                setChatMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: res.markdown_text,
                        buttons: res.buttons,
                    },
                ]);
            });
        }
    };

    const handleButtonClick = (msg: string) => {
        handleUserMessage(msg);
    };

    return {
        chatMessages,
        loading,
        error,
        handleUserMessage,
        handleButtonClick,
    };
};
