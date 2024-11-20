//productService.ts
import axiosInstance from './Interceptor'; 

export const getProductsService = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
