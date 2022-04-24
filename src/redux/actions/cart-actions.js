import {constants} from "../constants"
export const addtoCartAction = (payload)=> ({
    type: constants["ADD-product-to-cart"],
    payload
})

export const removeProductFromCart = (payload)=> ({
    type: constants["REMOVE-product-from-cart"],
    payload
})