import { call, takeEvery, put } from "redux-saga/effects";
import { fetchData } from "../Store";
import { sagaActions } from "./sagaAction";

const callAPI = async (url) => {
  return await fetch(url).then((r) => r.json());
};

export function* fetchDataSaga() {
  try {
    const result = yield call(() =>
      callAPI(
        "https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien"
      )
    );
    // console.log(result);
    yield put(fetchData({ data: result.offers }));
  } catch (e) {
    yield put({ type: "DATA_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
