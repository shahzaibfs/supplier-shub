import { loginAction } from "../redux/actions/loginAction";
import { message } from "antd";
import axios from "axios";
import { signupAction } from "../redux/actions/signup-action";

const doAuth = (loginDetails) =>
  axios.post("api/v1.0/authenticate", loginDetails);

const doSignup = (signupDetails) =>
  axios.post("http://localhost:8081/api/v1.0/user/create", signupDetails);

export const doAuthentication = (loginDetails, setisLoader, navigate) => {
  return (dispatch) => {
    doAuth(loginDetails)
      .then((response) => {
        message.success("This is an error message");
        setisLoader(false);
        navigate("/");
        dispatch(loginAction(response));
      })
      .catch((error) => {
        setTimeout(() => {
          setisLoader(false);
        }, 1000);

        if (error.response.status === 500) {
          message.error(
            "INTERNAL SERVER ERRROR => Please Try Again Later !",
            10000
          );
        } else {
          message.error("This is an error message");
        }
      });
  };
};

export const doRegistration = (signupDetails, setisLoader, navigate) => {
  return (dispatch) => {
    doSignup(signupDetails)
      .then((response) => {
        console.log(response)
        message.success("User Created SuccesFully");
        dispatch(signupAction(response.data));
        setisLoader(false);
        navigate("/login");
      })
      .catch((error) => {
        setTimeout(() => {
          setisLoader(false);
        }, 1000);
        console.log(error.response)
        if (error.response.status === 500) {
        
          message.error(
            "INTERNAL SERVER ERRROR => Please Try Again Later !",
            10000
          );
        } else {
          message.error("This is an error message");
        }
      });
  };
};
