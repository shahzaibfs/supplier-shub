import { constants } from "../constants";

const initState = {};

export const supplierProfileReducer = (state = initState, action) => {
  
  switch (action.type) {
    case constants["UPDATE-supplier-profile-data"]:
     
      return { ...action.payload };

    default:
      return state;
  }
};
