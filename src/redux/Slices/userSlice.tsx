import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { IUser } from '../types';
import { LOGIN_USER } from '../asyncActions';
import axios from 'axios';
import { login } from 'src/api/user';
import { getItem, setItem } from 'src/lib/localStorageUtils';
import { STORAGE_KEYS } from 'src/lib/constants';

const initialState: IUser = {
  error: null,
  data: null,
  isLoading: false,
};

export const loginUser = createAsyncThunk<IUser['data'], string, { rejectValue: string }>(
  LOGIN_USER,
  async (accessToken, thunkAPI) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });
      const data: Omit<IUser['data'], 'id'> = {
        name: response.data.name ?? '',
        email: response.data.email ?? '',
        picture: response.data.picture ?? '',
        given_name: response.data.given_name ?? '',
        family_name: response.data.family_name ?? '',
      };
      const { user } = await login(data);
      setItem<IUser['data']>(STORAGE_KEYS.userKey, user);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Failed to load with error ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state) => {
      const user = getItem<IUser['data']>(STORAGE_KEYS.userKey);
      state.data = user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = 'Login failed. Please try again.';
    });
  },
});

export const getUserDetails = (state: RootState) => state.user;

export const { fetchUser } = userSlice.actions;

export default userSlice.reducer;
