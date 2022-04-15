import { constants } from "../constants";

export const updateCategoryDataOnRedux  = (payload)=>({
    type:constants["UPDATE-CATEGORY-DATA"],
    payload
})