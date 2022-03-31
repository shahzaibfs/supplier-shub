import React from "react";

import { Link } from "react-router-dom";
// import axios from "axios";
import TextField from "../../Components/Inputs/TextField";
import Select from "../../Components/Inputs/SelectField";
import { Button, Col, Row } from "antd";
import PasswordField from "../../Components/Inputs/PasswordField";
import {AiOutlineUser} from "react-icons/ai"
import {SiGmail} from "react-icons/si"

// const userDataInterface = {
//   username: "",
//   email: "",
//   password: "",
//   role: null,
// };

const styles = {
  parent: {
    padding: "5px",
    alignItems: "center",
    overflowY:"auto"
  },
  container: {
    minHeight: "400px",
  },
};
const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <Row style={styles.parent} className="h-100" justify="center">
      <Col xs={18} lg={16}  style={styles.container}>
        <header className="m-2">
          <p className="text-primary body-1 mb-2">Welcome Guest</p>
          <h1 className="heading-2 text-weight-bold">Signup To your Account</h1>
        </header>
        <form onSubmit={handleSubmit}>
          {formFields.map(({ inputType: INPUT, ...props }, idx) => (
            <INPUT  size={"large"} {...props} />
          ))}
          <div className="m-2 mt-3">
            <Button
              icon={<AiOutlineUser className="me-2"/>}
              type="primary"
              className="btn-bg-success w-100 d-flex align-items-center justify-content-center"
              htmlType="submit"
              size="large"
            >
              Signup
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
          Have an Account? <Link to="/login" className="text-weight-bold body-2">Login</Link>
        </footer>
      </Col>
    </Row>
  );
};

export default SignupForm;

const formFields = [
  {
    inputType: TextField,
    label: "Username",
    placeHolder: "your username",
    name: "username",
  },
  {
    inputType: TextField,
    label: "Email",
    placeHolder: "your Email",
    name: "email",
  },
  {
    inputType: PasswordField,
    label: "Password",
    placeHolder: "your Password",
    name: "password",
  },
  {
    inputType: Select,
    label: "Account-Type",
    options: [],
    name: "role",
  },
];
