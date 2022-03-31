
import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer/authReducer";
import { productReducer } from "./productReducer/productReducer";
import { cartReducer } from "./cart/cartReducer";
import {checkoutReducer} from "./cart/checkOutReducer"

export default  combineReducers(
    {
        authReducer,
        productReducer,
        cartReducer,
        checkoutReducer

    }
)