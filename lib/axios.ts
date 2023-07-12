{
  /**Not in use yet */
}

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.SERVER_URL,
});

const get = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.get<T, R>(url, config);
};

const post = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.post<T, R>(url, data, config);
};

const put = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.put<T, R>(url, data, config);
};

const _delete = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.delete<T, R>(url, config);
};

export default {
  get,
  post,
  put,
  delete: _delete,
};
