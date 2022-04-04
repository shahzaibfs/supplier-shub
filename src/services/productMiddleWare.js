
import productsJson from "./productMockData.json"

export const productMiddleWare = () => async (dispatch) => {


    dispatch({
        type: "GET_PRODUCTS",
        payload: productsJson
    })


}