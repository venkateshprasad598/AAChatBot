import { appBaseUrlInstance } from "../utils/AxiosApi/AxiosApi";

// Define API endpoints
const API_BASE = '/api/dynamic-response';

export const getBotResponse = async (payload: any) => {
    try {
        const response = await appBaseUrlInstance({
            method: "POST",
            url: API_BASE,
            data: payload,
        });
        return response;
    } catch (error) {
        console.error("Failed to login:", error);
        throw error;
    }
};