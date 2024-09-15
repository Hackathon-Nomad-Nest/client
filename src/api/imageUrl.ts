import apiEndpoints from 'src/lib/apiEndpoints';
import apiRequest from './api';

export const getImageUrl = (imageKeys: string[]) => {
  return apiRequest({
    method: 'GET',
    url: `${apiEndpoints.IMAGE_URL}`,
    config: { params: { queries: imageKeys.join(",") } },
  });
};
