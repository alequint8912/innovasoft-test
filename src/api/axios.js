import axios from "axios";

const HOST = "https://pruebareactjs.test-class.com/Api/api";

const axiosInstance = axios.create({
  baseURL: HOST,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosInstance };
