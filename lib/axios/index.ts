import { deleteCookieStore, redirectToLogin, setCookieLocal } from "@/utils/auth";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "http://192.168.101.79:8000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
});

let token :any;
let cookieInstance :any;

axiosInstance.interceptors.request.use(async (config :any) => {
  if(config.url != '/movon/api/v1/auth/refresh-token') {
    if (typeof window === "undefined") {
      const { cookies: serverCookies } = await import("next/headers");
      cookieInstance = serverCookies;
      token = cookieInstance().get("token")?.value;
    } else {
      const { default: clientCookies } = await import("js-cookie");
      cookieInstance = clientCookies;
      token = cookieInstance.get("token");
    }
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response :any) => response,
  async (error: any) => {
    let refreshToken;
    if (typeof window === "undefined") {
      refreshToken = cookieInstance().get("refreshToken")?.value;
    } else {
      refreshToken = cookieInstance.get("refreshToken");
    }

    if (!token && !refreshToken) {
      redirectToLogin();
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest.url != '/movon/api/v1/auth/refresh-token') {
      try {
        const response = await axiosInstance.get('/movon/api/v1/auth/refresh-token', {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          }
        });
        await setCookieLocal('token', response.data.data.accessToken);
        originalRequest.headers['Authorization'] = `Bearer ${response.data.data.accessToken}`;
        // return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        deleteCookieStore('token');
        deleteCookieStore('refreshToken');
        redirectToLogin();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject({
      status: error.response?.status || 500,
      message: error.message || 'Internal Server Error',
    });
  },
);

export default axiosInstance;
