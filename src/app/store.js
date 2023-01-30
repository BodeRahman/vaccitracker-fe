import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import childReducer from "../features/child/childSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    children: childReducer,
  },
});

export default store;
