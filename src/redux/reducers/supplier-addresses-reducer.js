import { constants } from "../constants";

const initState = [];

export const supplierAddressesReducer = (state = initState, action) => {
  switch (action.type) {
    case constants["GET-supplier-addresses-data"]:
      console.log(action.payload);
      return [...action.payload];
    case constants["UPDATE-supplier-address-data"]:
 
      return [...action.payload];

    default:
      return state;
  }
};
