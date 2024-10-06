import axiosInstance from '@lib/axios/axiosInstanceConfig';
import axios from 'axios';

// This is an example of how to make a request without a bearer token. Call the request with axios instead of axiosInstance.
export const getSomeData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data
    } catch (error) {
        throw error;
    };
};

// This is an example of how to make a request with a bearer token. Call the request with axiosInstance instead of axios.
export const getSomeDataWithBearerToken = async () => {
    try {
        const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/posts');
        return response.data
    } catch (error) {
        throw error;
    };
};