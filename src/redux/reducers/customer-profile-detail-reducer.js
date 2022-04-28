import { constants } from "../constants";

const initState = {
  
}


export const customerProfileDetailsReducer = (state = initState , action)=>{
    switch (action.type) {
        case constants["UPDATE-customer-details"]:
            console.log(action)
            return {...state,...action.payload};
    
        default:
            return state;
    }
}