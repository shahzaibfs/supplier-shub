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