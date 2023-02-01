import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import childService from "./childService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addChild = createAsyncThunk(
  "ward/addChild",
  async (childData, thunkAPI) => {
    try {
      return await childService.addChild(childData);
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

export const wardSlice = createSlice({
  name: "ward",
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
      .addCase(addChild.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addChild.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addChild.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = wardSlice.actions;
export const selectWards = (state) => state.ward;
export default wardSlice.reducer;
