import { appBaseUrlInstance } from "../utils/AxiosApi/AxiosApi";

// Define API endpoints
const API_BASE = '/api/dynamic-response';

export const getBotResponse = async (params: any) => {
    try {
        const response = await appBaseUrlInstance({
            method: "POST",
            url: API_BASE,
            params: params,
        });
        return response;
    } catch (error) {
        console.error("Failed to login:", error);
        throw error;
    }
};

export const getMoreNodes = async (params: any) => {
    try {
        const response = await appBaseUrlInstance({
            method: "GET",
            url: API_BASE,
            params: params,
        });
        return response;
    } catch (error) {
        console.error("Failed to login:", error);
        throw error;
    }
};