import axios from 'axios';

const api = axios.create({
  baseURL: 'https://matte-static.s3.sa-east-1.amazonaws.com',
});

api.interceptors.request.use((axiosConfig) => ({
  ...axiosConfig,
  params: {
    ...axiosConfig.params,
    api_key: 'cdc1474b7c4efb8def4ae2a4eaca7f104c567a43',
    format: 'json',
  },
}));

export default api;
