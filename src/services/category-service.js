import axios from "axios";
import { updateCategoryDataOnRedux } from "../redux/actions/public-actions";

const options = () => ({
  headers: {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    XMLHttpRequest: "*",
  },
});

const getCategoriesApi = axios.get(
  "http://localhost:8081/api/v1.0/category/load-all",
  options
);

const doGetCategoriesFromDatabase = () => (dispatch) => {
  getCategoriesApi
    .then((response) => {
      dispatch(updateCategoryDataOnRedux(response.data));
    })
    .catch((error) => console.log(error.response));
};

export default doGetCategoriesFromDatabase;

export const getCategoryByIdService =
  ({ hooks = {}, categoryId }) =>
  (dispatch) => {
    const { setisLoading, setData } = hooks;
    axios
      .get(
        "http://localhost:8081/api/v1.0/product/searchProductsByCategory/" + categoryId,
        {},
        options
      )
      .then((response) => {
        console.log("res",response)
        setData(response.data);
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
        console.log(error.response);
      });
  };
