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
        const ExistingProduct = cartReducer.filter(cartProduct => cartProduct.productId  === product.productId );

        if(ExistingProduct.length >0) return ;

        let newCartReducerProducts = [...cartReducer,product];
        
        localStorage.setItem("cart-products",JSON.stringify(newCartReducerProducts));
        dispatch(addtoCartAction(product));
    }
}