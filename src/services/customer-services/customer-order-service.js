import axios from "axios";
import { updateProductToCartAction } from "../../redux/actions/cart-actions";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const confirmOrderService =
  ({ token = "", shippingAddressId, hooks = {} }) =>
  (dispatch, store) => {
    const { setisLoading, setkey, setOrderResData } = hooks;
    axios
      .post(
        "http://localhost:8081/api/v1.0/order",
        { customerShippingAddressId: shippingAddressId },
        options(token)
      )
      .then((response) => {
        console.log(response);
        setOrderResData(response.data);
        localStorage.removeItem("cart-products");
        dispatch(updateProductToCartAction([]));
        setisLoading({
          state: "ok",
        });
        setkey(2);
      })
      .catch((error) => {
        console.log(error);
        setisLoading({
          state: "error",
          message:
            "Some Server Error Happened PLease Try Again After Some time",
        });
      });
  };
