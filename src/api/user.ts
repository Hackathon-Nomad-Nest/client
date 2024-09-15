import apiEndpoints from 'src/lib/apiEndpoints';
import apiRequest from './api';
import { IUser } from 'src/redux/types';

export const login = (data: Omit<IUser['data'], 'id'>) => {
  return apiRequest({
    method: 'POST',
    url: apiEndpoints.LOGIN,
    data,
  });
};
