import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "../Saga/saga";

export const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    fetchData: {
      reducer(state, action) {
        const { data } = action.payload;
        state.push({ data });
      },
    },
  },
});

export const { fetchData } = dataSlice.actions;
export const getData = (state) => state.data[0];

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
