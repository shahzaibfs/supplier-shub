import { constants } from "../constants";

const initState = []


export const customerShippingAddressReducer = (state = initState , action)=>{
    switch (action.type) {
        case constants["UPDATE-customer-shipping-address"]:
            console.log(action)
            return [...action.payload];

            case constants["ADD-new-customer-shipping-address"]:
                console.log(action)
                return [action.payload,...state ];
    
        default:
            return state;
    }
}