import axios, { type AxiosRequestConfig } from "axios";

import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers) {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
