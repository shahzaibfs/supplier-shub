import axios from "axios";
import {
  setSupplierAddresses,
  updateSupplierAddress,
} from "../../redux/actions/supplier-actions";

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
          newSupplierAddresses.splice(1, 0,{...response.data});
          dispatch(updateSupplierAddress(newSupplierAddresses));
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
        }

        setTimeout(() => {
          setisLoader(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setisLoader(false);
      });
  };
