import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

function isTokenExpired(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;
    const now = Math.floor(Date.now() / 1000);
    return now > expiry;
}

export const handleRequestInterceptor = async (config: AxiosRequestConfig) => {
    // Retrieve token from localStorage or any other storage mechanism
    const token = localStorage.getItem('authToken');

    if (token) {
        // Attach the token to the Authorization header
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Check token validity (optional)
    if (token && isTokenExpired(token)) {
        // Log out user if token is expired
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // Redirect to login page
        return Promise.reject(new Error('Token expired. Please log in again.'));
    }

    return config;
}

export const handleResponseInterceptor = (response: AxiosResponse) => {
    return response;
}

export const requestInterceptorErrorFunc = (error: AxiosError) => {
    return Promise.reject(error);
}

export const responseInterceptorErrorFunc = (error: AxiosError) => {
    if (error.response?.status === 401) {
        // Unauthorized error
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // Redirect to login page
    } else if (error.response?.status === 500) {
        // Server error
        console.error('Server error:', error.response?.data);
    } else {
        console.error('Error:', error.message);
    }
    return Promise.reject(error);
}