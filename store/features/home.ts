"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type HomeTypes = {
  dataEventSocket?: any;
};
const initialState: HomeTypes = {
  dataEventSocket: undefined,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setEventSocket: (state: HomeTypes, action: PayloadAction<HomeTypes>) => {
      state.dataEventSocket = action.payload.dataEventSocket;
    },
  },
});

export default homeSlice;
