import axios, {  InternalAxiosRequestConfig, AxiosHeaders } from 'axios';

// Define the base URL for the API
const BASE_URL = 'https://api.escuelajs.co/api/v1';

// Create an axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: BASE_URL, // This is the base URL
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = sessionStorage.getItem("token");

  // Ensure headers are an instance of AxiosHeaders
  const headers = config.headers instanceof AxiosHeaders ? config.headers : new AxiosHeaders();

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  } else {
    headers.delete('Authorization');
  }

  config.headers = headers; // Attach updated headers to the request config
  return config;
});

export default axiosInstance;

// Now you can use this instance to make a request to the `products` endpoint.
export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('/products'); // This will make a GET request to https://api.escuelajs.co/api/v1/products
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
