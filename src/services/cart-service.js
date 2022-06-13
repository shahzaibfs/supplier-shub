// import axios from "axios";
import { addtoCartAction } from "../redux/actions/cart-actions";
import { message } from "antd";

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

export const doPostProductToCart = (product) => (dispatch, store) => {
  const { cartReducer } = store();

  const ExistingProduct = cartReducer.findIndex(
    (cartProduct) => cartProduct.product.productId === product.productId
  );

  if (ExistingProduct >= 0) {
    message.warn("Prodcut is ALready in Cart");
    return;
  }

  const cartProduct = {
    quantity: product.productMinOrder,
    product: product,
  };

  let newCartReducerProducts = [...cartReducer, cartProduct];

  localStorage.setItem("cart-products", JSON.stringify(newCartReducerProducts));
  dispatch(addtoCartAction(cartProduct));
  message.success("porduct Added To Cart");
};
