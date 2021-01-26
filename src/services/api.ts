import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const api = axios.create({
  baseURL: `${proxy}https://comicvine.gamespot.com`,
});

export default api;
