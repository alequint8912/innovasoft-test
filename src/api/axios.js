import axios from "axios";

const HOST = "https://pruebareactjs.test-class.com/Api/api";

const axiosInstance = axios.create({
  baseURL: HOST,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const sessionStringify = localStorage.getItem("session");
    const { token } = JSON.parse(sessionStringify ?? "{}");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosInstance };
