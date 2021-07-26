import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getProducts, selectProudctFilter } from "../productSlice";

export interface ListProductProps {}

export function ListProduct(props: ListProductProps) {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectProudctFilter);
  useEffect(() => {
    dispatch(getProducts(filter));
  }, [dispatch, filter]);

  return <div>ProductList</div>;
}
