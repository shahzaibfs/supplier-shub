import axios from "axios";
import {
  AddSupplierProductData,
  updateSupplierProducts,
} from "../../redux/actions/supplier-actions";

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
const deleteSupplierProductApi = (productId, token) =>
  axios.delete(
    "http://localhost:8081/api/v1.0/product-supplier/delete-product/" +
      productId,
    options(token)
  );
const getSupplierProductsApi = (token) =>
  axios.get(
    "http://localhost:8081/api/v1.0/product-supplier/get-all-products",
    options(token)
  );

export const doSaveOrUpdateProduct =
  (productDetails = {}, token = "", { setIsProductSaving }, navigate = null) =>
  (dispatch, state) => {
    console.log("coming from servcie", productDetails);

    supplierProductSaveOrEditApi(productDetails, token)
      .then(async (response) => {
        const { supplierProductReducer } = state();
        if (productDetails.productId > 0) {
          // ** product already exist

          let newSupplierProductDataFromReducer = supplierProductReducer.map(
            (product) => {
              if (product.productId === response.data.productId)
                return response.data;
              return product;
            }
          );
          dispatch(updateSupplierProducts(newSupplierProductDataFromReducer));
        } else {
          dispatch(AddSupplierProductData(response.data));
        }
        setIsProductSaving("loaded");
      })
      .catch((error) => {
        setIsProductSaving("error");
        console.log(error.response);
      });
  };

export const doGetAllSupplierProductsFromDatabase =
  (token, { setisFetching }) =>
  (dispatch) => {
    getSupplierProductsApi(token)
      .then((response) => {
        setisFetching(false);
        if(response.data.length <=0){
          return 
        }
        dispatch(updateSupplierProducts(response.data));
      })
      .catch((error) => {
        setisFetching(false);

        console.log(error);
      });
  };

export const doDeleteSupplierProductFromDatabase =
  (productId, token, { setisFetching }) =>
  (dispatch, state) => {
    deleteSupplierProductApi(productId, token)
      .then(async (response) => {
        const { supplierProductReducer } = state();
        console.log(response);
        const newSupplierProductReducerData = supplierProductReducer.filter(
          (product) => product.productId !== productId
        );
        dispatch(updateSupplierProducts(newSupplierProductReducerData));
        setisFetching(false);
      })
      .catch((error) => {
        setisFetching(false);
        console.log(error.response);
      });
  };
