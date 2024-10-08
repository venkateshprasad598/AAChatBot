// hooks/useBotResponse.ts
import { useState } from "react";
import { getBotResponse } from "../api";

export const useBotResponse = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchBotResponse = async (userMessage: string) => {
        setLoading(true);
        setError(null);
        try {
            const payload = { user_message: userMessage };
            // const result = await getBotResponse(payload);
            // return result.data.response;
            return [
                {
                    "markdown_text": "Hi, Excited to chat"
                },
                {
                    "buttons": {
                        "button1": {
                            "label": "Yes",
                            "payload": "Yes, I want this: 0.6628455798212751"
                        },
                        "button2": {
                            "label": "No",
                            "payload": "No, I don't want this: 0.7491683557126406"
                        }
                    }
                },

            ]
        } catch (err) {
            setError("Failed to fetch bot response.");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, fetchBotResponse };
};
