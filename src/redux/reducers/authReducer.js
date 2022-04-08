import { constants } from "../constants";
const intitState = {
  isLogin: false,
  userDetails: {},
  token: "",
  role: "",
};

export const authReducer = (state = intitState, action) => {
  switch (action.type) {
    case constants.loginAction:
      localStorage.setItem('session-token',JSON.stringify(action.payload.token))
      return {
        isLogin: true,
        userDetails: action.payload.userDetails,
        token: action.payload.token,
        role : action.payload.userDetails.roles[0].roleName
      };

    case constants.logoutAction:
      console.log("in logout aciton")
      localStorage.removeItem("session-token");
      return {...intitState};

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
    

      if (localStorage.getItem("session-token") != null && !state.isLogin) {
        return { ...state,token:JSON.parse(localStorage.getItem("session-token"))};
      }
      return state;
  }
};
