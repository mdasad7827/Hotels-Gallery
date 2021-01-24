import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addData: {
      reducer(state, action) {
        const { data } = action.payload;
        state.push({ data });
      },
    },
  },
});

export const { addData } = dataSlice.actions;
export const getData = (state) => state.data;

export default dataSlice.reducer;
