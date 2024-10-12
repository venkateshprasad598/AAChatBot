// hooks/useChat.ts
import { useState } from "react";
import { apiResponse } from "../constants/common.cont";
import { ChatMessage } from "../types";
import { useBotResponse } from "./useBotResponse";

export const useChatDashboard = () => {
    const { loading, error, fetchBotResponse } = useBotResponse();
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

    const handleUserMessage = async (message: string) => {
        // Add user message to chat
        setChatMessages((prev) => [...prev, { sender: "user", text: message }]);

        // Fetch bot response
        // const result = await fetchBotResponse(message);
        const result = apiResponse.response;

        if (result) {
            const botMessage = result.reduce(
                (acc: any, res: any) => ({
                    ...acc,
                    ...res,
                    sender: "bot",
                }),
                { sender: "bot" }
            );

            setChatMessages((prev) => [...prev, botMessage]);
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
