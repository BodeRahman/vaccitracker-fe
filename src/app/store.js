import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import childReducer from "../features/child/childSlice";
import upcomingReducer from "../features/child/upcomingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    children: childReducer,
    upcoming: upcomingReducer,
  },
});

export default store;
