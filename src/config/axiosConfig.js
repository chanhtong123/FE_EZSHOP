import axios from 'axios';
import { getToken } from '../utils/authUtils';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

// Thêm token vào tất cả các yêu cầu
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
