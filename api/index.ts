import axios from "axios";
import { mainModule } from "process";

export const DEV_API = "https://dev.adu24.com/";
export const PROD_API = "https://api.adu24.com/";

export const $api = axios.create({
  baseURL: PROD_API,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }
});

export const $imageApi = "https://adu24file.ams3.digitaloceanspaces.com";
