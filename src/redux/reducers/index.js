import { combineReducers } from "redux"

import { authReducer } from "./authReducer"
import {productReducer} from "./productReducer"
import {cartReducer} from "./cartReducer"
import {checkoutReducer} from "./checkOutReducer"
import { supplierAddressesReducer } from "./supplier-addresses-reducer"
import { supplierProfileReducer } from "./supplier-profile-reducer"
export default combineReducers(
    {
        authReducer,
        productReducer,
        cartReducer,
        checkoutReducer,
        supplierAddressesReducer,
        supplierProfileReducer

    }
)