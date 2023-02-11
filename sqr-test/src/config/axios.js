// connect backend
import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
// axios.defaults.baseURL = 'http://localhost:8205';

axios.interceptors.request.use(
  config => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err); // ส่ง error object in promise
  }
  // => after this fo to auth context
);

export default axios;
