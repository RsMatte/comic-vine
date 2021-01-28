import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const api = axios.create({
  baseURL: `${proxy}https://comicvine.gamespot.com`,
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
