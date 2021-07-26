import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../../models";
import { ListParams } from "../../models/common";
export interface State {
  loading: boolean;
  productList: Product[];
  filter: ListParams;
}

const initialState: State = {
  productList: [],
  filter: {
    _page: 1,
    _limit: 15,
  },
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    getProductsSuccess(state, action) {
      state.loading = false;
      state.productList = action.payload;
    },
    getProductsFail(state) {
      state.loading = false;
    },
  },
});

const { actions, reducer } = productSlice;

export const { getProducts, getProductsSuccess, getProductsFail } = actions;

export const selectProudctFilter = (state: RootState) => state.product.filter;
export const selectProductList = (state: RootState) => state.product.productList;
export const selectProductLoading = (state: RootState) => state.product.loading;

export default reducer;
