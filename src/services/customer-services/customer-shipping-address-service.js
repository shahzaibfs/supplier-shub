import { message } from "antd";
import axios from "axios";
import {
  addNewCustomerShippingAddressAction,
  updateCustomerShippingAddressAction,
} from "../../redux/actions/customer-actions";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getCustomerShippingAddressService =
  ({ token = "", hooks = {} }) =>
  (dispatch) => {
    axios
      .get(
        "http://localhost:8081/api/v1.0/customer-shipping-address",
        options(token)
      )
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {
          dispatch(updateCustomerShippingAddressAction(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const editOrSaveCustomerShippingAddressService =
  ({ token = "", customerShippingAddressReqBody, hooks = {} }) =>
  (dispatch, state) => {
    const { setIsSaving, setisModalVisible } = hooks;
    const { customerShippingAddressReducer } = state();
    axios
      .post(
        "http://localhost:8081/api/v1.0/customer-shipping-address",
        customerShippingAddressReqBody,
        options(token)
      )
      .then((response) => {
        if (customerShippingAddressReqBody.id > 0) {
          // Todo : update the state
          const newShippingAddressState = [
            ...customerShippingAddressReducer,
          ].map((shppingAddress) => {
            if (shppingAddress.id === customerShippingAddressReqBody.id)
              return response.data;
            return shppingAddress;
          });
          dispatch(
            updateCustomerShippingAddressAction(newShippingAddressState)
          );
        } else {
          // add new Shipping address to the state
          dispatch(addNewCustomerShippingAddressAction(response.data));
        }
        setIsSaving({
          status: "ok",
          message: "Saved Successfuly !",
        });
        setisModalVisible(false);
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          setIsSaving({
            status: "error",
            message: error.response.error,
          });
          return;
        }

        setIsSaving({
          status: "error",
          message: "" + error,
        });
      });
  };

export const deleteCustomerShippingAddressService =
  ({ token = "", shippingAddressId, arrayIndex, hooks = {} }) =>
  (dispatch, state) => {
    // const {} = hooks;
    const { customerShippingAddressReducer } = state();
    axios
      .delete(
        "http://localhost:8081/api/v1.0/customer-shipping-address/" +
          shippingAddressId,
        options(token)
      )
      .then((response) => {
        const newShippingAddressState = [...customerShippingAddressReducer];
        newShippingAddressState.splice(arrayIndex, 1);
        dispatch(updateCustomerShippingAddressAction(newShippingAddressState));

        message.success(response.data);
      })
      .catch((error) => {
        console.log(error);
        message.error("Error :" + error, 5000);
      });
  };
