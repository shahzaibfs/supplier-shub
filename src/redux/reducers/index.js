import { combineReducers } from "redux"

import { authReducer } from "./authReducer"
import {productReducer} from "./productReducer"
import {cartReducer} from "./cartReducer"
import {checkoutReducer} from "./checkOutReducer"


export default combineReducers(
    {
        authReducer,
        productReducer,
        cartReducer,
        checkoutReducer

    }
)