import { call, takeEvery, put } from "redux-saga/effects";
import { addData, setError, setLoading } from "../Store";
import { sagaActions } from "./sagaAction";

const callAPI = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    // console.log("Unable to fetch", e.message);
    throw new Error(e.message);
  }
};
const urlToFetch =
  "https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien";

export function* fetchDataSaga() {
  yield put(setLoading());
  try {
    const result = yield call(() => callAPI(urlToFetch));
    // console.log(result);
    yield put(addData({ data: result.offers }));
  } catch (e) {
    console.log(e.message);
    yield put(setError({ error: e.message }));
  }
}
export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
