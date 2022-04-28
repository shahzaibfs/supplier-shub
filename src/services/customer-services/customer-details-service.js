import axios from "axios";
import { updateCustomerDetailsAction } from "../../redux/actions/customer-actions";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getUserDetailsService =
  ({ token = "", hooks = {} }) =>
  (dispatch) => {
    axios
      .get("http://localhost:8081/api/v1.0/customer", options(token))
      .then((response) => {
        console.log(response);
        dispatch(updateCustomerDetailsAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const updateCustomerDetailService =
  ({ token = "", customerDetails, hooks = {} }) =>
  (dispatch) => {
    const { setFormPostHandle } = hooks;
    axios
      .post(
        "http://localhost:8081/api/v1.0/customer/edit",
        customerDetails,
        options(token)
      )
      .then((response) => {
        dispatch(updateCustomerDetailsAction(response.data));
        setFormPostHandle({
          status: "ok",
          message: "Successfully Updated the Details",
        });
      })
      .catch((error) => {
        if (error.response) {
          setFormPostHandle({
            status: "error",
            message: error.response.error,
          });
        }

        setFormPostHandle({
          status: "error",
          message: error+"",
        });
      });
  };
