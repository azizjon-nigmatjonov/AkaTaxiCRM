import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: {}
};

export const { actions: websiteActions, reducer: websiteReducer } = createSlice(
  {
    name: "website",
    initialState,
    reducers: {
      setRoutes: (state: any, { payload }) => {
        state.routes = payload;
      },
    },
  }
);
