
import apiEndpoints from 'src/lib/apiEndpoints';
import apiRequest from './api';

interface ISupportFormData {
  email: string;
  query: string;
}

export const submitSupportFormData = (data: ISupportFormData) => {
  return apiRequest({
    method: 'POST',
    url: `${apiEndpoints.SUPPORT_FORM}`,
    data,
  });
};
