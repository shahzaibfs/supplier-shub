import { constants } from "../constants";

export const setSupplierAddresses = (payload)=>({
    type: constants["GET-supplier-addresses-data"],
    payload
})

export const updateSupplierAddress = (payload)=>({
    type: constants["UPDATE-supplier-address-data"],
    payload
})

export const updateSupplierProfile = (payload)=>({
    type: constants["UPDATE-supplier-profile-data"],
    payload
})

export const updateSupplierProducts = (payload)=>({
    type: constants["UPDATE-supplier-products-data"],
    payload
})

export const AddSupplierProductData = (payload)=>({
    type: constants["ADD-supplier-product-data"],
    payload
})

export const updateSupplierOutOfStockProductAction = (payload)=>({
    type: constants["UPDATE-supplier-outOfStock-products-data"],
    payload
})

export const addSupplierOutOfStockProductAction = (payload)=>({
    type: constants["ADD-supplier-outOfStock-products-data"],
    payload
})