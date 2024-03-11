import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regions: []
};

export const { actions: regionActions, reducer: regionReducer } = createSlice(
  {
    name: "regions",
    initialState,
    reducers: {
      setRegions: (state: any, { payload }) => {                        
        state.regions = payload;
      },
    },
  }
);
