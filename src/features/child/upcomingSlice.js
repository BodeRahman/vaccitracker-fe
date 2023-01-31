import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000/upcoming";
const { jwt } = JSON.parse(localStorage.getItem("user")) || "";

export const fetchUpcoming = createAsyncThunk("upcoming/fetchUpcoming", async () => {
  const response = await fetch(API_URL, {
    headers: { Authorization: jwt },
  });
  const data = await response.json();
  return data;
});

export const upcomingSlice = createSlice({
  name: "upcoming",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchUpcoming.fulfilled]: (state, action) => action.payload,
  },
});

export const selectUpcoming = (state) => state.upcoming;
export default upcomingSlice.reducer;

