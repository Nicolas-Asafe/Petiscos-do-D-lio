import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-pdd.onrender.com',
  headers: {
    'x-api-key': import.meta.env.VITE_ACCESSKEY
  }
});

export default api;
