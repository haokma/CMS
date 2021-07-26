import { ListParams } from "../models/common";
import axiosClient from "./axiosClient";

export const productApi = {
  getProducts: (params: ListParams) => {
    const url = "http://api-ecommere-cms.herokuapp.com/products";
    return axiosClient.get(url, { params });
  },
};
