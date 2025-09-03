import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
    baseURL: import.meta.env.VITE_API_URL || "https://hilal-backend-three.vercel.app",
    // Remove trailing slash to prevent double slash issues
    withCredentials: true, // Ensure cookies are sent with requests
},);


api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        // if (accessToken) {
        //     config.headers.Authorization = `Bearer ${accessToken}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;