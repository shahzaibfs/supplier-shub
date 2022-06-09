import axios from "axios";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const addPrdouctsTocart =
  ({ token = "", cartProductsReq, hooks = {} }) =>
  (dispatch) => {
    const {setisLoading ,navigate} = hooks;
    axios
      .post(
        "http://localhost:8081/api/v1.0/cart",
        cartProductsReq,
        options(token)
      )
      .then((response) => {
        console.log(response);
        setisLoading({
          state:"ok"
        })
        navigate("/checkout")
      })
      .catch((error) => {
        console.log(error);
        setisLoading({state:"error",message:"Some Server Error Happened PLease Try Again After Some time"})
      });
  };
