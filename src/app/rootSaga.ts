import { all } from "redux-saga/effects";
import productSaga from "../features/Product/productSaga";

export default function* rootSaga() {
  yield all([productSaga()]);
}
