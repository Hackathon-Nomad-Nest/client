import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index"

export interface IData {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface ITask {
  error: string | null;
  data: IData[];
  isLoading: boolean;
}

const initialState: ITask = {
  error: null,
  data: [],
  isLoading: false,
}

export const fetchTasks = createAsyncThunk<IData[], string, { rejectValue: string }>(
  "tasks/fetchTasks", // TODO : extract this from constant file
  async (url, thunkAPI) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(`Failed to load with error ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
);

const formatSlice = createSlice({
  name: "task", // actions will be having type name/reducerName
  initialState,
  reducers: {
    reducerName: ( ) => {
      // logic
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.data = [];
      state.error = null
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
      state.error = 'Failed to load';
    })
  }
})

export const getTasks = (state: RootState) => state.tasks;

export const { reducerName } = formatSlice.actions

export default formatSlice.reducer;