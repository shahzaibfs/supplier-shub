
const intitState = {
  isLogin: false,
  userDetails: {},
  errMessage:""
};

export const authReducer = (state = intitState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":

      
      return {...state, ...action.payload};
    case "LOGOUT_ACTION":
      localStorage.removeItem("sessionId")
      return {...state,isLogin:false,errMessage:""};

    default:
        console.log(localStorage.getItem("sessionID"))
        if(localStorage.getItem("sessionID")!=null){
            return {...state,errMessage:"",isLogin:true}
        }
      return state;
  }
};
