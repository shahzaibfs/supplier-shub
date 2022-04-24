import axios from "axios";
import { updateAllNewProductsAction } from "../redux/actions/public-actions";

const options = {
  headers: {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "XMLHttpRequest": "*",
  },
}


const getNewProductsApi =  axios.get(
    "http://localhost:8081/api/v1.0/product/load-all",
    options
  );


  export const doGetAllNewProductsFromDatabase =() => (dispatch)=>{
      getNewProductsApi
      .then(
          response => {
              console.log(response);
              dispatch(updateAllNewProductsAction(response.data))
          }
      )
      .catch(
          error=>{
              console.log("error happend while fetching ", error)
          }
      )
  }