import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import TextField from "../../Components/Inputs/TextField";
import Select from "../../Components/Inputs/SelectField";
import { Col, Form, Row, Typography } from "antd";
import PasswordField from "../../Components/Inputs/PasswordField";
import { AiOutlineUser } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import ButtonField from "../../Components/Inputs/button-field";
import { useGetRoles } from "../../hooks/useGetRoles";
import { useDispatch } from "react-redux";
import { doRegistration } from "../../services/authMiddleWare";

const { Title } = Typography;

const styles = {
  parent: {
    padding: "5px",
    alignItems: "center",
    overflowY: "auto",
  },
  container: {
    minHeight: "400px",
    borderRadius:"7px",
    border: "1px solid #d8dee4",
    background:"#f6f8fa",
    maxWidth:"400px"
  },
  smallContainer:{background:"white",border:"1px solid #d0d7de"}
};

const SignupForm = () => {
  const [isLoader, setisLoader] = useState(false);
  const [usernameUniqueException, setusernameUniqueException] = useState(false);
  const roles = useGetRoles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const refRole =roles.filter(curr=>curr.roleName !=="ADMIN")
  console.log(refRole)
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
          message: "Please input your Username",
        },
      ],
      status: usernameUniqueException && "error",
    },
    {
      inputType: TextField,
      label: "Email",
      placeHolder: "your Email",
      name: "email",
      rules: [
        {
          required: true,
          message: "Please input your Email",
        },
      ],
      type: "email",
    },
    {
      inputType: PasswordField,
      label: "Password",
      placeHolder: "your Password",
      name: "password",
      required: true,
    },
    {
      inputType: Select,
      label: "Account-Type",
      options: refRole,
      name: "role",
      dataIndex: "roleName",
      valueIndex: "roleId",
      required: true,

      placeHolder: "your Account Type",
    },
  ];

  const idToRole = (id) => {
    return roles.filter((role) => role.roleId === id * 1)[0];
  };

  const handleSubmit = (formData) => {
    setisLoader(true);
    const reqData = { ...formData, role: idToRole(formData.role) };
    setTimeout(() => {
      dispatch(
        doRegistration(
          reqData,
          { setisLoader, setusernameUniqueException },
          navigate
        )
      );
    }, 100);
  };

  return (
    <Row style={styles.parent} className="h-100 pt-4 pb-4" justify="center">
      <Col
        sm={15}
        xs={22}
        md={24}
        lg={22}
        style={styles.container}
        className="p-2"
      >
        {" "}
        <header className="m-2" style={{borderBottom:"1px solid #d8dee4"}}>
          <Title level={5} type="secondary">
            Welcome ~Guest
          </Title>
          <Title level={2} className="mt-1">
            Signup To your Account
          </Title>
        </header>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          scrollToFirstError
          name="register"
        >
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
              Signup
            </ButtonField>
          </div>

          <p className="body-2 text-center m-0">Or</p>
          <div className="m-2">
            <ButtonField
              icon={<SiGmail className="me-2" />}
              type="danger"
              htmlType="submit"
              size="large"
              width="100"
              circle
            >
              Login with Gmail
            </ButtonField>
          </div>
        </Form>
        <footer className="body-2 text-center m-2 mt-3 pt-3 pb-3" style={styles.smallContainer}>
          Have an Account?{" "}
          <Link to="/login" className="text-weight-bold body-2">
            Login
          </Link>
        </footer>
      </Col>
    </Row>
  );
};

export default SignupForm;
