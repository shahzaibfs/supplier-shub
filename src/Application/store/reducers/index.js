
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer/productReducer";
import { cartReducer } from "./cart/cartReducer";

export default  combineReducers(
    {
        authReducer,
        productReducer,
        cartReducer
    }
)