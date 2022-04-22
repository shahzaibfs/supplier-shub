import { combineReducers } from "redux"

import { authReducer } from "./authReducer"
import {productReducer} from "./productReducer"
import {cartReducer} from "./cartReducer"
import {checkoutReducer} from "./checkOutReducer"
import { supplierAddressesReducer } from "./supplier-addresses-reducer"
import { supplierProfileReducer } from "./supplier-profile-reducer"
import { categoryReducer } from "./category-reducer"
import {supplierProductReducer} from "./supplier-product-reducer"
import { supplierProductOutOfStockReducer } from "./supplier-product-outOfStock-reducer"

export default combineReducers(
    {
        authReducer,
        productReducer,
        cartReducer,
        checkoutReducer,
        supplierAddressesReducer,
        supplierProfileReducer,
        categoryReducer,
        supplierProductReducer,
        supplierProductOutOfStockReducer
        

    }
)