import { loginAction } from "../redux/actions/loginAction";
import { message } from "antd";
import axios from "axios";
import { signupAction } from "../redux/actions/signup-action";

const doAuth = (loginDetails) =>
  axios.post("http://localhost:8081/api/v1.0/authenticate", loginDetails);

const doSignup = (signupDetails) =>
  axios.post("http://localhost:8081/api/v1.0/user/create", signupDetails);



export const doAuthentication = (loginDetails, setisLoader) => {
  return (dispatch) => {
    doAuth(loginDetails)
      .then((response) => {
        
        dispatch(loginAction(response.data));
        setisLoader(false);
       
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

export const doRegistration = (
  signupDetails,
  { setisLoader, setusernameUniqueException },
  navigate
) => {
  return (dispatch) => {
    doSignup(signupDetails)
      .then((response) => {
        console.log(response);
        message.success("User Created SuccesFully");
        dispatch(signupAction(response.data));
        setisLoader(false);
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.status === 500) {
          message.error(
            "INTERNAL SERVER ERRROR => Please Try Again Later !",
            10000
          );
        } else if (error.response.status === (400 || 404)) {
          setisLoader(false);
          message.error("Username Must Be Unique", 5000);
          setusernameUniqueException(true);
        } else {
          setisLoader(false);
          message.error(error.response.data.error, 5000);
        }
      });
  };
};
