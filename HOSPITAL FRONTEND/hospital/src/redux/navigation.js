import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../redux/features.js";  

export default configureStore({
  reducer: {
    user: useReducer,
  },
});