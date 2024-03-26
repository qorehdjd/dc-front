import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { InittialState } from '@/types/user';
import { CustomError } from '@/types/error';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState: InittialState = {
  me: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: false,
  signupLoading: false,
  signupDone: false,
  signupError: false,
  loginLoading: false,
  loginDone: false,
  loginError: false,
  logoutloading: false,
  logoutDone: false,
  logoutError: false,
};

export const loadMyInfo = createAsyncThunk('user/loadMyInfo', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/user');
    console.log('=>(user.js:65) response', response.data);
    return response.data || null;
  } catch (err) {
    const customErr = err as CustomError;
    return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
  }
});

export const signup = createAsyncThunk(
  'user/signup',
  async (data: { id: string; password: string; nickname: string }, thunkAPI) => {
    try {
      const response = await axios.post('/user/signup', data);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const login = createAsyncThunk('user/login', async (data: { id: string; password: string }, thunkAPI) => {
  try {
    const response = await axios.post('/user/login', data);
    return response.data;
  } catch (err) {
    const customErr = err as CustomError;
    return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await axios.post('/user/logout');
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: AnyAction) => ({
        ...state,
        ...action.payload.user,
      }))
      .addCase(loadMyInfo.pending, (state) => {
        state.loadMyInfoLoading = true;
        state.loadMyInfoDone = false;
        state.loadMyInfoError = false;
      })
      .addCase(loadMyInfo.fulfilled, (state, action) => {
        state.loadMyInfoLoading = false;
        state.loadMyInfoDone = true;
        state.me = action.payload || null;
      })
      .addCase(loadMyInfo.rejected, (state, action) => {
        state.loadMyInfoLoading = true;
        state.loadMyInfoError = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.signupLoading = true;
        state.signupDone = false;
        state.signupError = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
        state.loginDone = false;
        state.loginError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginDone = true;
        state.me = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.logoutloading = true;
        state.logoutDone = false;
        state.logoutError = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.logoutloading = false;
        state.logoutDone = true;
        state.me = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutloading = false;
        state.logoutError = action.payload;
      }),
});

export default userSlice;
