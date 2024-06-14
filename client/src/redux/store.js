import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import userManagement from "./slices/userManagementReducer";
import experimentReducer from "./slices/ExperimentReducer";
import BroadAreaReducer from "./slices/BroadAreaReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userManagement,
    exp: experimentReducer,
    BroadArea: BroadAreaReducer,
  },
});

export default store;
