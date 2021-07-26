import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { productApi } from "../../apis/productApi";
import { Product } from "../../models";
import { ListParams, ListResponse } from "../../models/common";
import { getProducts, getProductsFail, getProductsSuccess } from "./productSlice";

function* handleFetchProducts(action: PayloadAction<ListParams>) {
  try {
    const data: ListResponse<Product> = yield call(productApi.getProducts, action.payload);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFail());
  }
}

export default function* productSaga() {
  yield takeLatest(getProducts.type, handleFetchProducts);
}
