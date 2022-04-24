import { constants } from "../constants";

export const updateCategoryDataOnRedux  = (payload)=>({
    type:constants["UPDATE-CATEGORY-DATA"],
    payload
})


export const updateAllNewProductsAction  = (payload)=>({
    type:constants["UPDATE-all-new-products-from-database"],
    payload
})