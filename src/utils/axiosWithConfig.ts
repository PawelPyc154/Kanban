import axios from 'axios';

const axiosWithConfig = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
  withCredentials: true,
});

export default axiosWithConfig;
