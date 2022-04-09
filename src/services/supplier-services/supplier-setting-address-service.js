import axios from "axios";
import {
  setSupplierAddresses,
  updateSupplierAddress,
} from "../../redux/actions/supplier-actions";
import { message } from "antd";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const getSupplierAddressApi = (token) =>
  axios.get(
    "http://localhost:8081/api/v1.0/supplier/brand-addresses",
    options(token)
  );

const editOrSaveSupplierAddressApi = (supplierAddress, token) =>
  axios.post(
    "http://localhost:8081/api/v1.0/supplier/brand-address",
    supplierAddress,
    options(token)
  );

const deleteSupplierAddressApi = (supplierAddressId, token) =>
  axios.delete(
    `http://localhost:8081/api/v1.0/supplier/brand-address/${supplierAddressId}`,
    options(token)
  );

export const doGetSupplierAddressesFromDatabase = (token) => (dispatch) => {
  getSupplierAddressApi(token)
    .then((response) => {
      console.log(response);
      dispatch(setSupplierAddresses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const doEditOrSaveSupplierAddresses =
  (supplierAddress, token, { setisLoader }) =>
  async (dispatch, state) => {
    editOrSaveSupplierAddressApi(supplierAddress, token)
      .then((response) => {
        let supplierAddresses = state((store) => store);

        if (supplierAddress.id <= 0) {
          let newSupplierAddresses = supplierAddresses.supplierAddressesReducer;
          newSupplierAddresses.splice(1, 0, { ...response.data });
          dispatch(updateSupplierAddress(newSupplierAddresses));
          message.success("successfuly Added the address ");
        } else {
          let newSupplierAddresses =
            supplierAddresses.supplierAddressesReducer.map((address) => {
              if (address.supplierBrandAddressId === supplierAddress.id) {
                address = { ...response.data };
                return address;
              }
              return address;
            });
          dispatch(updateSupplierAddress(newSupplierAddresses));
          message.success("successfuly Updated the address ");
        }
        setisLoader(false);
      })
      .catch((error) => {
        console.log(error);
        message.error(error.response.data.error);

        setisLoader(false);
      });
  };

export const doDeleteSupplierAddressFromDatabase =
  (supplierAddress, token, { setisLoader }) =>
  async (dispatch, getState) => {
    deleteSupplierAddressApi(supplierAddress.No, token)
      .then((response) => {
        console.log(response);
        const {supplierAddressesReducer} = getState()
        let newState= [...supplierAddressesReducer]
        newState.splice(supplierAddress.key,1) 
    
        dispatch(updateSupplierAddress(newState))
        message.success("deleted successfully");
        setisLoader(false);
      })
      .catch((error) => {
        console.log(error);
        message.error("error happend please wait a while and try again ");
        setisLoader(false);
      });
  };
