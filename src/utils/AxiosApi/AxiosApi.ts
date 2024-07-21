import axios, { AxiosInstance } from 'axios';
import { config } from '../../config';
import { handleRequestInterceptor, handleResponseInterceptor, responseInterceptorErrorFunc, requestInterceptorErrorFunc, verifyTokenRequestInterceptor } from './AxiosApiService';

const appBaseUrlInstance: AxiosInstance = axios.create({
    baseURL: config.APP_URL,
});

//Request Interceptor
appBaseUrlInstance.interceptors.request.use(handleRequestInterceptor, requestInterceptorErrorFunc);

//Response Interceptor
appBaseUrlInstance.interceptors.response.use(handleResponseInterceptor, responseInterceptorErrorFunc);

export {
    appBaseUrlInstance
}