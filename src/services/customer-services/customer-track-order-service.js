import axios from "axios";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getCustomerOrders =
  ({ token = "", hooks = {} }) =>
  (dispatch) => {
    const {setisLoading,setOrders} = hooks;
    axios
      .get(
        "http://localhost:8081/api/v1.0/order",
        options(token)
      )
      .then((response) => {
        console.log(response);
        
        setisLoading({
          state:"ok"
        })
        setOrders(response.data)
      })
      .catch((error) => {
        console.log(error);
        setisLoading({state:"error",message:"Some Server Error Happened PLease Try Again After Some time"})
      });
  };
