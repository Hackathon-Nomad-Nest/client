import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './Slices/userSlice';
import itineraryPlanSlice from './Slices/itineraryPlanSlice';

const rootReducer = combineReducers({
  user: userSlice,
  itineraryPlan: itineraryPlanSlice,
});

export default rootReducer;
