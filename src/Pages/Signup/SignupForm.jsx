import React, { useState } from "react";

import { Link ,useNavigate} from "react-router-dom";
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
    border: "1px solid #1111110f",
  },
};
const SignupForm = () => {
  const [isLoader, setisLoader] = useState(false)
  const roles = useGetRoles();
  const dispatch  =useDispatch();
  const navigate = useNavigate();


  const formFields = [
    {
      inputType: TextField,
      label: "Username",
      placeHolder: "your username",
      name: "username",
      type:"text",
      rules: [
        {
          required: true,
          message: "Please input your Username",
        },
      ],
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
      options: roles,
      name: "role",
      dataIndex: "roleName",
      valueIndex: "roleId",
      required: true,

      placeHolder: "your Account Type",
    },
  ];

  const idToRole=(id)=>{
    return roles.filter(role=>role.roleId===id*1)[0]
  }

  const handleSubmit = (formData) => {
    setisLoader(true)
    const reqData = {...formData, role:idToRole(formData.role)}
    console.log(reqData)
    setTimeout(() => {
      dispatch(doRegistration(reqData,setisLoader,navigate))
    }, 100); 
    
    
  };

  return (
    <Row style={styles.parent} className="h-100" justify="center">
      <Col xs={22} lg={16} style={styles.container} className="p-2">
        <header className="m-2">
          <Title level={4} type="secondary">
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
              width="75"
              circle
            >
              Login with Gmail
            </ButtonField>
          </div>
        </Form>
        <footer className="body-2 text-center m-2">
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
