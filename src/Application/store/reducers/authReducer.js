
const intitState = {
  isLogin: false,
  userDetails: {
    name:"Sunsilk",
    accountType:"SUPPLIER"
  },
  errMessage:""
};

export const authReducer = (state = intitState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":

      console.log(action.payload)
      return {...state, ...action.payload};
    case "LOGOUT_ACTION":
      localStorage.removeItem("sessionID")
      return {...state,isLogin:false,errMessage:""};

    default:
        console.log(localStorage.getItem("sessionID"))
        if(localStorage.getItem("sessionID")!=null){
            return {...state,errMessage:"",isLogin:true}
        }
      return state;
  }
};
