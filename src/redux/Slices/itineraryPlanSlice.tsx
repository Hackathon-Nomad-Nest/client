import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { IItineraryPlan } from '../types';
import { CREATE_ITINERARY_PLAN } from '../asyncActions';
import { ItineraryDetailsFormValues } from 'src/lib/types';
import { createPlan } from 'src/api/itineraryPlan';

const initialState: IItineraryPlan = {
  error: null,
  data: null,
  isLoading: false,
};

export const createItineraryPlan = createAsyncThunk<
  IItineraryPlan['data'],
  { formData: ItineraryDetailsFormValues; userId: string },
  { rejectValue: string }
>(CREATE_ITINERARY_PLAN, async (details, thunkAPI) => {
  try {
    const response = await createPlan(details.formData, details.userId);
    return response.plan;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(`Failed to create plan`);
  }
});

const ItineraryPlanSlice = createSlice({
  name: 'itineraryPlan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createItineraryPlan.pending, (state) => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(createItineraryPlan.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(createItineraryPlan.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = 'Failed to create a plan at the moment. Please try again.';
    });
  },
});

export const getItineraryPlan = (state: RootState) => state.itineraryPlan;

export default ItineraryPlanSlice.reducer;
