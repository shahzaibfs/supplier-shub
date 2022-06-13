import axios from "axios";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getActiveOrdersService =
  ({ token = "", hooks = {} }) =>
  (dispatch) => {
    const { setisLoading, setData } = hooks;
    axios
      .get(
        "http://localhost:8081/api/v1.0/order-supplier/active-orders",
        options(token)
      )
      .then((response) => {
        console.log(response);

        setisLoading({
          state: "ok",
        });
        setData(response.data);
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

export const setActveOrderService =
  ({ token = "", orderId, data = [], hooks = {} }) =>
  (dispatch) => {
    const { setisLoading, setData } = hooks;
    console.log(options(token));
    axios
      .put(
        "http://localhost:8081/api/v1.0/order-supplier/set-active-order/" +
          orderId,
        {},
        options(token)
      )
      .then((response) => {
        console.log(response);

        const newData = [...data].filter((curr) => curr.orderId !== orderId);
        setData(newData);
        setisLoading({
          state: "ok",
        });
      })
      .catch((error) => {
        console.log(error.response);
        setisLoading({
          state: "error",
          message:
            "Some Server Error Happened PLease Try Again After Some time",
        });
      });
  };

  
  export const setRejectOrder =
  ({ token = "", orderId, data = [], hooks = {} }) =>
  (dispatch) => {
    const { setisLoading, setData } = hooks;
    console.log(options(token));
    axios
      .put(
        "http://localhost:8081/api/v1.0/order-supplier/set-reject-order/" +
          orderId,
        {},
        options(token)
      )
      .then((response) => {
        console.log(response);

        const newData = [...data].filter((curr) => curr.orderId !== orderId);
        setData(newData);
        setisLoading({
          state: "ok",
        });
      })
      .catch((error) => {
        console.log(error.response);
        setisLoading({
          state: "error",
          message:
            "Some Server Error Happened PLease Try Again After Some time",
        });
      });
  };