// hooks/useBotResponse.ts
import { useState } from "react";
import { getBotResponse } from "../api";
import { errorNotification } from "../utils";

export const useBotResponse = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchBotResponse = async (userMessage: string) => {
        setLoading(true);
        setError(null);
        try {
            const params = { user_message: userMessage, user_id: "1", auth_token: "jwt" };
            const result = await getBotResponse(params);
            return result?.data?.response || [];
        } catch (err) {
            setError("Failed to fetch bot response.");
            errorNotification("Something went wrong.")
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, fetchBotResponse };
};
