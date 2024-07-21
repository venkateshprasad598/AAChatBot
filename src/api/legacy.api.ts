import { appBaseUrlInstance } from "../utils/AxiosApi/AxiosApi";


// Define API endpoints
const API_BASE = '/users';

export const getUserById = async (userId: string) => {
    try {
        const response = await appBaseUrlInstance.get(`${API_BASE}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to get user:', error);
        throw error;
    }
};

export const createUser = async (userData: { name: string; email: string }) => {
    try {
        const response = await appBaseUrlInstance.post(API_BASE, userData);
        return response.data;
    } catch (error) {
        console.error('Failed to create user:', error);
        throw error;
    }
};

export const getProducts = async (filters: { category?: string; priceRange?: string }) => {
    try {
        const response = await appBaseUrlInstance.get('/products', { params: filters });
        return response.data;
    } catch (error) {
        console.error('Failed to get products:', error);
        throw error;
    }
};
