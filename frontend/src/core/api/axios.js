import axios from 'axios';
import authProvider from '../auth/authProvider';

const userServiceApi = import.meta.env.USER_SERVICE_API || 'http://localhost:8000/api';

const instance = axios.create({
  baseURL: userServiceApi,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = authProvider.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authProvider.logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;
