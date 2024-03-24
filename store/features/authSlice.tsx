"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TokenType = {
  token: string;
  refreshToken: string
}
export type AlarmTypes = {
  tokenReducer?: TokenType;
};
const initialState: AlarmTypes = {
  tokenReducer: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state: AlarmTypes, action: PayloadAction<AlarmTypes>) => {
      state.tokenReducer = action.payload.tokenReducer;
    },
  },
});

export default authSlice;