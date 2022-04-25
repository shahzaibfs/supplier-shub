// import axios from "axios";
import { addtoCartAction } from "../redux/actions/cart-actions";

// const options = (token) => ({
//   headers: {
//     Authorization: "bearer " + token,
//     "Access-Control-Allow-Headers": "*",
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
// });


// const postCartDetailApi = (cartDetails, token) =>
//   axios.post(
//     "http://localhost:8081/api/v1.0/user/edit",
//     cartDetails,
//     options(token)
//   );


export const doPostProductToCart = (product) =>(dispatch,store)=>{
    const {authReducer,cartReducer} =store();
    const {isLogin} = authReducer;
    if (!isLogin){
        const ExistingProduct = cartReducer.findIndex(cartProduct => cartProduct.product.productId  === product.productId );

        if(ExistingProduct >=0) return ;
        
        const cartProduct = {
            quantity:product.productMinOrder,
            product:product
          }
        let newCartReducerProducts = [...cartReducer,cartProduct];
        
        localStorage.setItem("cart-products",JSON.stringify(newCartReducerProducts));
        dispatch(addtoCartAction(cartProduct));
    }
}