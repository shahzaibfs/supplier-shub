import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import TextField from "../../Components/Inputs/TextField";
import PasswordField from "../../Components/Inputs/PasswordField";
import { SiGmail } from "react-icons/si";
import { useDispatch } from "react-redux";
import { doAuthentication } from "../../Application/store/middleWares/AuthMiddleWare/authMiddleWare";

const LoginForm = () => {
  const [loginDetails, setloginDetails] = useState({
    username: "",
    password: "",
  });
  const [isLoader, setisLoader] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // TODO: Url needed to Authenticate : http://localhost:8080/api/v1.0/authenticate

  const handleInputs = (e) => {
    console.log(e.target.name + " " + e.target.value);
    setloginDetails((oldLoginDetails) => ({
      ...oldLoginDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setisLoader(true);

    dispatch(doAuthentication(loginDetails, setisLoader, navigate));
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
                key={idx}
                value={loginDetails[props.name]}
                onChange={handleInputs}
                size={"large"}
                {...props}
                required={true}
              />
            ))}
            <div className="m-2 mt-3">
              <Button
                icon={<AiOutlineUser className="me-2" />}
                type="primary"
                className="btn-bg-success w-100 d-flex align-items-center justify-content-center"
                htmlType="submit"
                size="large"
                loading={isLoader}
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
    name: "username",
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
