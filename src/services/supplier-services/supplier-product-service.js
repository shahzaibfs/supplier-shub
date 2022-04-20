import axios from "axios";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const supplierProductSaveOrEditApi = (productDetails, token) =>
  axios.post(
    "http://localhost:8081/api/v1.0/product-supplier/save-or-edit",
    productDetails,
    options(token)
  );

export const doSaveOrUpdateProduct =
  (
    productDetails = {},
    token = "",
    { setIsProductSaving },
    navigate = null
  ) =>
  () => {
    supplierProductSaveOrEditApi(productDetails, token)
      .then((response) => {
        setIsProductSaving("loaded")
        console.log(response);
      })
      .catch((error) => {
        setIsProductSaving("error")
        console.log(error.response);
      });
  };
