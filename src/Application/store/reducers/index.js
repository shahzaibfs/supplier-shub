
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer/productReducer";

export default  combineReducers(
    {
        authReducer,
        productReducer
    }
)