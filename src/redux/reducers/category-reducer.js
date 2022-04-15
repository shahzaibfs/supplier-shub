import { constants } from "../constants";

const initState = [];

export const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case constants["UPDATE-CATEGORY-DATA"]:
    
      return [...state,...action.payload];
    default:
      return state;
  }
};
