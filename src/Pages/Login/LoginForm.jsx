import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fakeauth } from "../../Application/store/middleWares/AuthMiddleWare/authMiddleWare";
import { Button, Col, Row } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import TextField from "../../Components/Inputs/TextField";
import PasswordField from "../../Components/Inputs/PasswordField";
import { SiGmail } from "react-icons/si";
// import axios from "axios";

const LoginForm = () => {
  const [loginDetails, setloginDetails] = useState({ email: "", password: "" });
  const authState = useSelector((store) => store.authReducer);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // TODO: Url needed to Authenticate : http://localhost:8080/api/v1.0/authenticate

  console.log(authState);
  const handleInputs = (e) => {
    console.log(e.target.name + " " + e.target.value);
    setloginDetails((oldLoginDetails) => ({
      ...oldLoginDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(loginDetails);
    e.preventDefault();
    dispatch(fakeauth(loginDetails.email, loginDetails.password));
    //   axios.post('api/v1.0/authenticate', {
    //     username: 'shahzaib',
    //     password: '123'
    //   },
    // {"Access-Control-Allow-Origin":"*"}
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    if (authState.isLogin) {
      navigate("/", { replace: true });
    }
  };
  return (
    <>
      <Row style={styles.parent} className="h-100" justify="center">
        <Col xs={18} lg={16} style={styles.container}>
          <header className="m-2">
            <p className="text-primary body-1 mb-2">Welcome Guest</p>
            <h1 className="heading-2 text-weight-bold">
              Login To your Account
            </h1>
          </header>
          <form onSubmit={handleSubmit}>
            {formFields.map(({ inputType: INPUT, ...props }, idx) => (
              <INPUT
                value={loginDetails[props.name]}
                onChange={handleInputs}
                size={"large"}
                {...props}
              />
            ))}
            <div className="m-2 mt-3">
              <Button
                icon={<AiOutlineUser className="me-2" />}
                type="primary"
                className="btn-bg-success w-100 d-flex align-items-center justify-content-center"
                htmlType="submit"
                size="large"
              >
                Login
              </Button>
            </div>
            <p className="body-2 text-center m-0">Or</p>
            <div className="m-2 ">
              <Button
                icon={<SiGmail className="me-2" />}
                type="primary"
                className="btn-bg-primary w-100 d-flex justify-content-center align-items-center "
                htmlType="submit"
                size="large"
              >
                Or Login with Gmail
              </Button>
            </div>
          </form>
          <footer className="body-2 text-center">
            Have an Account?{" "}
            <Link to="/signup" className="text-weight-bold body-2">
              Signup
            </Link>
          </footer>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;

const formFields = [
  {
    inputType: TextField,
    label: "Username",
    placeHolder: "your username",
    name: "email",
    type: "text",
  },

  {
    inputType: PasswordField,
    label: "Password",
    placeHolder: "your Password",
    name: "password",
    type: "password",
  },
];

const styles = {
  parent: {
    padding: "5px",
    alignItems: "center",
    overflowY: "auto",
  },
  container: {
    minHeight: "400px",
  },
};
