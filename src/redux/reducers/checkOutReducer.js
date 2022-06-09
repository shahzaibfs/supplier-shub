const initState = [];

export const checkoutReducer = (state = initState, action) => {
  switch (action.type) {
    case "PROCCED_TO_CHECKOUT":
      return [...action.payload];

    default:
      return state;
  }
};
