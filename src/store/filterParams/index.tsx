import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {},
  open: false,
};

export const { actions: filterActions, reducer: filterReducer } = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterData: (state: any, { payload: { pageName, filterParams } }) => {
      state.filter[pageName] = filterParams;
    },
    setOpen: (state, { payload }) => {
      state.open = payload;
    },
    clearFilterData: () => initialState,
  },
});
