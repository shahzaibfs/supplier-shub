import { message } from "antd";
import axios from "axios";
import { updateSupplierProfile } from "../../redux/actions/supplier-actions";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

 const getSupplierProfileData = (token) =>
  axios.get("http://localhost:8081/api/v1.0/supplier", options(token));

const supplierEditApi = (supplierProfileDetails, token) =>
  axios.post(
    "http://localhost:8081/api/v1.0/supplier/edit",
    supplierProfileDetails,
    options(token)
  );

export const doEditSupplierDetails =
  (supplierProfileDetails, token, { setrefreshData }) =>
  (dispatch) => {
    supplierEditApi(supplierProfileDetails, token)
      .then((response) => {
        console.log(response);
        message.success("the record has been updated");
        setrefreshData((old) => !old);
      })
      .catch((error) => {
        message.error("Some Error Happedn on Backend ");
        console.log(error);
      });
  };

export const doGetSupplierProfileData = (token) => (dispatch) => {
  getSupplierProfileData(token)
      .then((response) => {
        console.log(response)
        dispatch(updateSupplierProfile(response.data))
        
      })
      .catch((err) => {
        console.log(err.response);
      });
};
