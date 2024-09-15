import apiEndpoints from 'src/lib/apiEndpoints';
import apiRequest from './api';

interface IPlanChangeProps {
  day: string;
  keyName: string;
  newValue: string;
}

export const getPlanById = (id: string) => {
  return apiRequest({
    method: 'GET',
    url: `${apiEndpoints.GET_PLAN_BY_ID}/` + id,
  });
};

export const removePlanById = (id: string, data: { day: string; keyName: string }) => {
  return apiRequest({
    method: 'PUT',
    url: `${apiEndpoints.GET_PLAN_BY_ID}/` + id,
    config: { params: { action: 'remove' } },
    data,
  });
};

export const addPlanById = (id: string, data: IPlanChangeProps) => {
  return apiRequest({
    method: 'PUT',
    url: `${apiEndpoints.GET_PLAN_BY_ID}/` + id,
    config: { params: { action: 'add' } },
    data,
  });
};
