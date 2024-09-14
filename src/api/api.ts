/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, Method } from 'axios';

import axiosInstance from './axios';

interface IRequestParams {
  method: Method;
  url: string;
  data?: unknown;
  contentType?: string; // New prop for content type
  config?: ICustomAxiosRequestConfig; // Use the custom interface here
}

interface ICustomAxiosRequestConfig extends AxiosRequestConfig {
  skipErrorMessage?: boolean;
}

const apiRequest = async <T>({ method, url, data = null, contentType, config = {} }: IRequestParams): Promise<any> => {
  // Set 'Content-Type' if provided, otherwise default to 'application/json' for certain methods
  if (!config.headers) {
    config.headers = {};
  }

  if (contentType) {
    config.headers['Content-Type'] = contentType;
  } else if (!config.headers['Content-Type'] && ['POST', 'PUT', 'PATCH'].includes(method)) {
    config.headers['Content-Type'] = 'application/json';
  }

  // Perform the request with the final configuration
  const response = await axiosInstance.request<T>({
    method,
    url,
    data,
    ...config,
    withCredentials: true,
  });

  // Return the response data
  return response.data;
};

export default apiRequest;
