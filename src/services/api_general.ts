import axios, { type InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090",
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const token: string | null = localStorage.getItem("token");

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
  }

  return config;
});

export default api;
