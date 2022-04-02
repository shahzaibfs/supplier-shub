import { constants } from "../constants";
const intitState = {
  isLogin: true,
  userDetails: {
    accountType:"SUPPLIER"
  },
  error: ""
};

export const authReducer = (state = intitState, action) => {

  switch (action.type) 
  {
    case constants.loginAction:
      console.log(action.payload)
      return { ...state, ...action.payload };

    case constants.logoutAction:
      localStorage.removeItem("sessionID")
      return { ...state, isLogin: false, errMessage: "" };


    default:
      if (localStorage.getItem("sessionID") != null) {
        return { ...state, errMessage: "", isLogin: true }
      }
      return state;

  }
};
