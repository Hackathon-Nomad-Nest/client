import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { OptionsObject, SnackbarMessage } from 'notistack';

// You can set your base URL here
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// This will hold the reference to the enqueueSnackbar function
let enqueueSnackbar: ((message: SnackbarMessage, options?: OptionsObject | undefined) => string | number) | null = null;

// Function to be called in the root of the app to provide the enqueueSnackbar function
export function setSnackbar(
  enqueueSnackbarFn: (message: SnackbarMessage, options?: OptionsObject) => string | number
): void {
  enqueueSnackbar = enqueueSnackbarFn;
}

// Axios instance configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Include this line to send cookies with every request
  timeout: 50000,
  timeoutErrorMessage: 'Request timed out',
  // You can add your headers here
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    // You can add any additional processing for the response here
    return response;
  },
  async (error) => {
    const customConfig = error?.config;

    // Check if the error response should be skipped
    if (customConfig?.skipErrorMessage) {
      return Promise.reject(error);
    }

    // Handle other response errors
    if (enqueueSnackbar && error?.response?.data?.status !== 401) {
      enqueueSnackbar(`An error occurred: ${error?.response?.data?.message}`, {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
