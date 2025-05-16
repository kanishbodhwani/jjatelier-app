import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  headers: {
    Authorization: `Basic ${btoa(`${import.meta.env.VITE_ADMIN_USER}:${import.meta.env.VITE_ADMIN_PASS}`)}`
  }
});

export const fetchProducts = () => API.get('/products');
export const createProduct = (product) => API.post('/products/add', product);
export const deleteProduct = (id) => API.delete(`/products/remove/${id}`);