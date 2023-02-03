import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import childReducer from "../features/child/childSlice";
import upcomingReducer from "../features/child/upcomingSlice";
import wardReducer from "../features/child/wardSlice";
import vaccineReducer from "../features/vaccination/vaccineSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    children: childReducer,
    ward: wardReducer,
    upcoming: upcomingReducer,
    vaccine: vaccineReducer,
  },
});

export default store;
