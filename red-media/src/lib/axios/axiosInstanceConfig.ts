import axios from "axios";

const API_URL = 'to_be_replaced_with_your_api_url';

// Create an instance of axios
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = 'to_be_replaced_with_your_token_from_your_token_storage_logic';

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    };
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
