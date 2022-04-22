import { constants } from "../constants";

const initState = [];

export const supplierProductOutOfStockReducer = (state = initState, action) => {
  switch (action.type) {
    case constants["UPDATE-supplier-outOfStock-products-data"]:
      console.log("IN -----> OutOfStock Product Data -> ", action.payload);
      return [...action.payload];

    case constants["ADD-supplier-outOfStock-products-data   "]:
      console.log("IN ----->ADD OutOfStock Product Data -> ", action.payload);
      return [action.payload,...state];

    default:
      return state;
  }
};
