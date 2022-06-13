import axios from "axios";

const options = () => ({
  headers: {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    XMLHttpRequest: "*",
  },
});

export const getTopRatedSuppliersService =
  ({ hooks = {} }) =>
  (dispatch) => {
    const { setisLoading, setData } = hooks;
    axios
      .get(
        "http://localhost:8081/api/v1.0/supplier-public/topRatedSuppliers" ,
          options
      )
      .then((response) => {
        console.log("res", response);
        setData(response.data.content);
        setisLoading({
          state: "ok",
          message: "",
        });
      })
      .catch((error) => {
        setisLoading({
          state: "error",
          message: "Invalid Category Id  Error ",
        });
        console.log(error);
      });
  };
