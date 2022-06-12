import axios from "axios";

const options = (token) => ({
  headers: {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getSearchResultService =
  ({ token = "",searchQuery={}, hooks = {} }) =>
  (dispatch) => {
    const {setisLoading,setData} = hooks;
    axios
      .post(
        "http://localhost:8081/api/v1.0/product/searchProduct",
        searchQuery,
        options(token)
      )
      .then((response) => {
        console.log(response);
        
        setisLoading({
          state:"ok"
        })
        setData(response.data.content)
      })
      .catch((error) => {
        console.log(error);
        setisLoading({state:"error",message:"Some Server Error Happened PLease Try Again After Some time"})
      });
  };
