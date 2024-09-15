import apiEndpoints from 'src/lib/apiEndpoints';
import apiRequest from './api';
import { ItineraryDetailsFormValues } from 'src/lib/types';

export const createPlan = (data: ItineraryDetailsFormValues, userId: string) => {
  return apiRequest({
    method: 'POST',
    url: apiEndpoints.ITINERARY_PLAN,
    data: {
      travelInput: data,
      user: userId,
    },
  });
};
