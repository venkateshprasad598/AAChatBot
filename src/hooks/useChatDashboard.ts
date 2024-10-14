// hooks/useChat.ts
import { useState } from "react";
import { ChatMessage } from "../types";
import { useBotResponse } from "./useBotResponse";

export const useChatDashboard = () => {
    const { loading, error, fetchBotResponse } = useBotResponse();
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleUserMessage = async (message: string) => {
        setChatMessages((prev: any) => [...prev, { sender: "user", question: message }]);
        setIsProcessing(true);

        try {
            const result = await fetchBotResponse(message);
            const botMessage = result.reduce(
                (acc: any, res: any) => ({
                    ...acc,
                    ...res,
                    sender: "bot",
                }),
                { sender: "bot" }
            );

            setChatMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            console.error("Error fetching bot response:", err);
        } finally {
            setIsProcessing(false);
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
        isProcessing
    };
};
