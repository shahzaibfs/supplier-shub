import axios from "axios";
import { updateAllNewProductsAction } from "../redux/actions/public-actions";

const options = {
  headers: {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    XMLHttpRequest: "*",
  },
};

const getNewProductsApi = axios.get(
  "http://localhost:8081/api/v1.0/product/load-all-new-products",
  options
);

export const doGetAllNewProductsFromDatabase = () => (dispatch) => {
  getNewProductsApi
    .then((response) => {
      console.log(response);
      dispatch(updateAllNewProductsAction(response.data));
    })
    .catch((error) => {
      console.log("error happend while fetching ", error);
    });
};

export const getProductByIdService =
  ({ productId, hooks = {} }) =>
  (dispatch) => {
    const { setProduct, setIsFetching } = hooks;
    axios
      .put("http://localhost:8081/api/v1.0/product/" + productId, options)
      .then((response) => {
        setProduct(response.data);
        setIsFetching({
          state: "ok",
          message: "Product is Successfulty Fetched",
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          setIsFetching({
            state: "error",
            message: "Err :" + error.response.data.error,
          });
        }
        setIsFetching({ state: "error", message: "ERR : " + error });
      });
  };
