import { constants } from "../constants";
const initState = [];

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case constants["ADD-product-to-cart"]:
      return [action.payload, ...state];

    case constants["REMOVE-product-from-cart"]:
      return [...action.payload];

    case constants["UPDATE-product-to-cart-action"]:
      console.log("----update cart on reducer  --- > ", action);
      return [...action.payload];

    default:
      const localStorageCartProducts = JSON.parse(
        localStorage.getItem("cart-products")
      );
      if (localStorageCartProducts === null) return state;

      return [...localStorageCartProducts];
  }
};
