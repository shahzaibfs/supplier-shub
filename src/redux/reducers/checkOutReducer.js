const initState = [];

export const checkoutReducer = (state = initState, action) => {
  switch (action.type) {
    case "PROCCED_TO_CHECKOUT":
      console.log(action);
      return [...action.payload];

    default:
      return state;
  }
};
