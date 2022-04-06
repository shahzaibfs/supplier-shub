import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Form, Row, Typography } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useDispatch } from "react-redux";

import { doAuthentication } from "../../services/authMiddleWare";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
import ButtonField from "../../Components/Inputs/button-field";
import TextField from "../../Components/Inputs/TextField";
import PasswordField from "../../Components/Inputs/PasswordField";

const { Title } = Typography;

const LoginForm = () => {
  const user = useGetAuthenticatedUser();
  const [isLoader, setisLoader] = useState(false);
  const dispatch = useDispatch();

  // TODO: Url needed to Authenticate : http://localhost:8080/api/v1.0/authenticate

  const formFields = [
    {
      inputType: TextField,
      label: "Username",
      placeHolder: "your username",
      name: "username",
      type: "text",
      rules: [
        {
          required: true,
          message: "fill your username..",
        },
      ],
    },
    {
      inputType: PasswordField,
      label: "Password",
      placeHolder: "your Password",
      name: "password",
required:true    },
  ];

  const styles = {
    parent: {
      padding: "5px",
      alignItems: "center",
      overflowY: "auto",
    },
    container: {
      minHeight: "400px",
      borderRadius: "7px",
      border: "1px solid #d8dee4",
      background: "#f6f8fa",
      maxWidth: "400px",
    },
    smallContainer: { background: "white", border: "1px solid #d0d7de" },
  };

  console.log(user);
  const handleSubmit = (loginDetails) => {
    setisLoader(true);
    dispatch(doAuthentication(loginDetails, setisLoader));
    console.log(loginDetails);
  };
  return (
    <>
      <Row style={styles.parent} className="h-100" justify="center">
        <Col
          sm={15}
          xs={22}
          md={24}
          lg={22}
          style={styles.container}
          className="p-2"
        >
          <header className="m-2" style={{ borderBottom: "1px solid #d8dee4" }}>
            <Title level={5} type="secondary">
              Welcome ~Guest
            </Title>
            <Title level={2} className=" mt-1">
              Login To your Account
            </Title>
          </header>
          <Form onFinish={handleSubmit} layout={"vertical"}>
            {formFields.map(({ inputType: INPUT, ...props }, idx) => (
              <INPUT key={idx} size={"large"} {...props} />
            ))}
            <div className="m-2 mt-3">
              <ButtonField
                icon={<AiOutlineUser className="me-2" />}
                type="success"
                htmlType="submit"
                size="large"
                width="100"
                circle
                loading={isLoader}
              >
                Login{" "}
              </ButtonField>
            </div>
            <p className="body-2 text-center m-0">Or</p>
            <div className="m-2 ">
              <ButtonField
                icon={<SiGmail className="me-2" />}
                type="danger"
                htmlType="submit"
                size="large"
                width="100"
                circle
                loading={isLoader}
              >
                Login with Gmail
              </ButtonField>
            </div>
          </Form>
          <footer
            className="body-2 text-center m-2 mt-3 pt-3 pb-3"
            style={styles.smallContainer}
          >
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
