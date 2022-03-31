import { doAuth } from "../../../services/authenticate-api";
import { loginAction } from "../../actions/loginAction";
import { message } from 'antd';


export const doAuthentication = (loginDetails, setisLoader, navigate) => {

  return (dispatch) => {

    doAuth(loginDetails).then(
      (response) => {

        message.success('This is an error message');
        setisLoader(false);
        navigate("/");
        dispatch(loginAction(
          response
        ));

      }
    ).catch(error => {

      setTimeout(() => {
        setisLoader(false)
      }, 1000);

      if (error.response.status === 500) {
        message.error('INTERNAL SERVER ERRROR => Please Try Again Later !' ,10000);
      } else {
        message.error('This is an error message');
      }


    })
  }

}


