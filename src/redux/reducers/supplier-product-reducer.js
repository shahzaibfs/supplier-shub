import { constants } from "../constants";

const initState = [];

export const supplierProductReducer = (state = initState, action) => {
  switch (action.type) {
    case constants["UPDATE-supplier-products-data"]:
      return [...action.payload];

    case constants["ADD-supplier-product-data"]:
      return [action.payload, ...state];

    default:
      return state;
  }
};
