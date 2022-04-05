import { constants } from "../constants";
const intitState = {
  isLogin: false,
  userDetails: {},
  token: "",
};

export const authReducer = (state = intitState, action) => {
  switch (action.type) {
    case constants.loginAction:
      console.log(action.payload);
      return { ...state, ...action.payload };

    case constants.logoutAction:
      localStorage.removeItem("sessionID");
      return { ...state, isLogin: false };

    case constants.signupAction:
      console.log(action);
      return {
        ...state,
        isLogin: false,
        userDetails: {
          username: action.payload,
        },
      };

    default:
      if (localStorage.getItem("sessionID") != null) {
        return { ...state, isLogin: true };
      }
      return state;
  }
};
