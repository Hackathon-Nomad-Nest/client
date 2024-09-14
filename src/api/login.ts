
import apiEndpoints from 'src/lib/apiEndpoints';
import apiRequest from './api';

// TODO: Replace this dummy api endpoint
export const refreshTokens = () => {
  return apiRequest({
    method: 'POST',
    url: `${apiEndpoints.AUTH_REFRESH_TOKEN}`,
    data: {},
  });
};
