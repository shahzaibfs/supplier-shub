import { constants } from "../constants";

const initState = {

}


export const supplierProfileReducer = (state=initState,action)=>{
    console.log(action)
    switch (action.type) {
        case constants["UPDATE-supplier-profile-data"]:
            console.log(action)

            console.log("i am from supplier profile data"+{...action.payload})
            return {...action.payload} ;
    
        default:
            return state;
    }
}