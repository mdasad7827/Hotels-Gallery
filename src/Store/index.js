import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "../Saga/saga";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    error: undefined,
    data: [],
    loading: false,
  },

  reducers: {
    addData: (state, action) => {
      const { data } = action.payload;
      state.data = data;
      state.error = undefined;
      state.loading = false;
    },
    setError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { addData, setError, setLoading } = dataSlice.actions;
export const getData = (state) => state;

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
