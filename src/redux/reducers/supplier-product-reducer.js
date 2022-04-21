import { constants } from "../constants";

const initState = [];

export const supplierProductReducer = (state = initState, action) => {
  switch (action.type) {
    case constants["UPDATE-supplier-products-data"]:
      console.log("from supplier product reducer : ", action);
      return [...action.payload];

    case constants["ADD-supplier-product-data"]:
      console.log("from supplier product reducer : ", action);
      return [...action.payload,...state];

    default:
      return state;
  }
};
