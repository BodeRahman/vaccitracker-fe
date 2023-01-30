import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000/wards";
const { jwt } = JSON.parse(localStorage.getItem("user")) || "";

export const fetchChildren = createAsyncThunk("children/fetchChildren", async () => {
  const response = await fetch(API_URL, {
    headers: { Authorization: jwt },
  });
  const data = await response.json();
  return data;
});

export const childSlice = createSlice({
  name: "children",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchChildren.fulfilled]: (state, action) => action.payload,
  },
});

// export const { reset } = menuSlice.actions;
export const selectChildren = (state) => state.children;
export default childSlice.reducer;
