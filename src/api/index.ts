import axios from "axios";

console.log('Here is api')
export const DEV_API = "http://146.190.22.28/";
// export const PROD_API = "https://";

export const $api = axios.create({
  baseURL: DEV_API,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }
});

// export const $imageApi = "https://adu24file.ams3.digitaloceanspaces.com";
