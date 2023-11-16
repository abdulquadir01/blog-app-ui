import axios from "axios";
import { getAccessToken } from "../util/AuthUtil";

export const BASE_URL = "http://localhost:8080/api";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    console.log("privateAxios() - accessToken :", accessToken);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    }
  },
  (error) => Promise.reject(error)
);
