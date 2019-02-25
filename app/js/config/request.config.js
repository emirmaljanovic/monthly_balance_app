import axios from 'axios';

const REQUEST_CONFIG = {
  BASE_URL: 'http://localhost',
  PORT: 5000,
  API_V: 'v1'
};

axios.defaults.baseURL = `${REQUEST_CONFIG.BASE_URL}:${REQUEST_CONFIG.PORT}/api/${REQUEST_CONFIG.API_V}`;

export default REQUEST_CONFIG;