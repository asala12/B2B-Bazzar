import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import providerService from "./providerService";

export const getProviders = createAsyncThunk(
  "provider/get-providers",
  async (thunkAPI) => {
    try {
      return await providerService.getProviders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createProviders = createAsyncThunk(
  "provider/create-providers",
  async (providerData, thunkAPI) => {
    try {
      return await providerService.createProvider(providerData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");

const initialState = {
  providers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const providerSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProviders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProviders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.providers = action.payload;
      })
      .addCase(getProviders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createProviders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProviders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createProviders = action.payload;
      })
      .addCase(createProviders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default providerSlice.reducer;
