import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import vaccineService from "./vaccineService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const updateVaccine = createAsyncThunk(
  "vaccine/updateVaccine",
  async (vaccineData, wardId, id, thunkAPI) => {
    try {
      return await vaccineService.updateVaccine(vaccineData, wardId, id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const vaccineSlice = createSlice({
  name: "vaccine",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateVaccine.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateVaccine.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(updateVaccine.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = vaccineSlice.actions;
export const selectVaccine = (state) => state.vaccine;
export default vaccineSlice.reducer;
