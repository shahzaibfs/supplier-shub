import { constants } from "../constants";

const initState = [];

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return [...action.payload];

    case constants["UPDATE-all-new-products-from-database"]:
      return [...action.payload];
    default:
      return state;
  }
};
