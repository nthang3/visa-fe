"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import homeSlice from "./features/home";



const rootReducer = combineReducers({
  auth: authSlice.reducer,
  home: homeSlice.reducer,
},);

export const store = configureStore({
  reducer: rootReducer,
});


export {
  authSlice
};


export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;