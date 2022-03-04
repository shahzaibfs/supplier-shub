
import productsJson from "../../reducers/productReducer/productMockData.json"

export const productMiddleWare= ()=> async (dispatch)=>{
    
   
    dispatch({
        type:"GET_PRODUCTS",
        payload:productsJson 
    })


}