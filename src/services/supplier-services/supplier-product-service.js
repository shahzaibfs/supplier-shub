import axios from "axios";
import {
  addSupplierOutOfStockProductAction,
  AddSupplierProductData,
  updateSupplierOutOfStockProductAction,
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

const updateProductToOutOfStockApi = (outOfStockDetails, token) =>
  axios.post(
    "http://localhost:8081/api/v1.0/product-supplier/update-to-outOfStock",
    outOfStockDetails,
    options(token)
  );

const getSupplierOutOfStocksProductApi = (token) =>
  axios.get(
    "http://localhost:8081/api/v1.0/product-supplier/get-all-outOfStock-products",
    options(token)
  );
const removeProductFromOutOfStockApi = (productId, token) =>
  axios.delete(
    "http://localhost:8081/api/v1.0/product-supplier/remove-from-outOfStock/" +
      productId,
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
        if (response.data.length <= 0) {
          return;
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

export const doUpdateProductToOutOfStock =
  (outOfStockDetails, token, { setisFetching }) =>
  (dispatch, state) => {
    updateProductToOutOfStockApi(outOfStockDetails, token)
      .then((response) => {
        const { supplierProductReducer } = state();
        console.log(response);
        const newSupplierProductReducerData = supplierProductReducer.filter(
          (product) => product.productId !== response.data.productId
        );
        dispatch(updateSupplierProducts(newSupplierProductReducerData));
        dispatch(addSupplierOutOfStockProductAction(response.data));
        setisFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setisFetching(false);
      });
  };

export const doGetSupplierOutOfStockProductsFromDatabase =
  (token, { setisFetching }) =>
  (dispatch) => {
    getSupplierOutOfStocksProductApi(token)
      .then((response) => {
        console.log(response);
        if (response.data <= 0) {
          setisFetching({
            type: "Success",
            message: "Data Loaded Successfully",
          });
          return;
        }
        dispatch(updateSupplierOutOfStockProductAction(response.data));
        setisFetching({
          type: "Success",
          message: "Data Loaded Successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        setisFetching({
          type: "error",
          message: "Error : Something hapen :" + error,
        });
      });
  };

export const doRemoveProductFromOutOfStockTableInDatabase =
  (productDetails, token, { setisFetching }) =>
  (dispatch, state) => {
    removeProductFromOutOfStockApi(productDetails.productId, token)
      .then((response) => {
        const { supplierProductOutOfStockReducer } = state();
        console.log(response);
        let newSupplierProductOutOfStockReducer = [
          ...supplierProductOutOfStockReducer,
        ];

        newSupplierProductOutOfStockReducer.splice(productDetails.index, 1);

        dispatch(
          updateSupplierOutOfStockProductAction(
            newSupplierProductOutOfStockReducer
          )
        );
        dispatch(AddSupplierProductData(response.data));
        setisFetching({
          type: "Success",
          message: "Data Loaded Successfully",
        });
      })
      .catch((error) => {
        setisFetching({
          type: "error",
          message: "Error : Something hapen :" + error,
        });
      });
  };

export const getSearchSupplierProductsService =
  ({ token = "", searchQuery = {}, hooks = {} }) =>
  (dispatch) => {
    axios
      .post(
        "http://localhost:8081/api/v1.0/product-supplier/searchProduct",
        searchQuery,
        options(token)
      )
      .then((response) => {
        console.log(response);
        dispatch(updateSupplierProducts(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
