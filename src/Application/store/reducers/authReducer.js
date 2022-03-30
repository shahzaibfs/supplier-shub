
const intitState = {
  isLogin: false,
  userDetails: {
    name:"",
    accountType:""
  },
  errMessage:""
};

export const authReducer = (state = intitState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":

      return {...state, ...action.payload};
    case "LOGOUT_ACTION":
      localStorage.removeItem("sessionID")
      return {...state,isLogin:false,errMessage:""};

    default:
        if(localStorage.getItem("sessionID")!=null){
            return {...state,errMessage:"",isLogin:true}
        }
      return state;
  }
};
