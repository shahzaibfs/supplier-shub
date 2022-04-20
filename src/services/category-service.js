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
      console.log(response.data);
      dispatch(updateCategoryDataOnRedux(response.data));
    })
    .catch((error) => console.log(error.response));
};

export default doGetCategoriesFromDatabase;
