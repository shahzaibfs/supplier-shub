import {constants} from "../constants"
export const addtoCartAction = (payload)=> ({
    type: constants["ADD-product-to-cart"],
    payload
})

export const removeProductFromCart = (payload)=> ({
    type: constants["REMOVE-product-from-cart"],
    payload
})
export const updateProductToCartAction =(payload)=>{
    return {
        type: constants["UPDATE-product-to-cart-action"],
        payload
    }
}