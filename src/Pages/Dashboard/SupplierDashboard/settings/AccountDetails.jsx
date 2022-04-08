import { Form, Modal, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ButtonField from "../../../../Components/Inputs/button-field";
import PasswordField from "../../../../Components/Inputs/PasswordField";
import TextField from "../../../../Components/Inputs/TextField";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import { useDispatch } from "react-redux";
import { doEditUser } from "../../../../services/account-details-service";
import PageHeader from "../../../../Components/PageHeader/PageHeader";

const { Text } = Typography;

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

function AccountDetails() {
  const [errorOnEdit, seterrorOnEdit] = useState({
    isErr:false,
    err:""
  });
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isLoader, setisLoader] = useState(false);
  const [form] = Form.useForm();
  const [oldPassForm] = Form.useForm();
  const dispatch = useDispatch();
  const user = useGetAuthenticatedUser();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      form.setFieldsValue({
        username: user.userDetails.userName,
        email: user.userDetails.userEmail,
      });
    }
    // eslint-disable-next-line 
  }, [user]);

  const modelForm = (
    <Form layout="vertical" form={oldPassForm}>
      <PasswordField
        classname={"mx-0"}
        label={"Old Password"}
        name="oldPassword"
      />
    </Form>
  );

  const handleModalOk = () => {
    setisLoader(true);
    const reqData = {
      username: form.getFieldValue("username") ?? '',
      password: form.getFieldValue("password") ?? '',
      email:form.getFieldValue("email") ?? '' ,
      oldPassword: oldPassForm.getFieldValue("oldPassword"),
    };
    console.log(reqData)
    dispatch(
      doEditUser(reqData, user.token, {
        seterrorOnEdit,
        setisModalVisible,
        setisLoader,
      })
    );
  };

  const onFinish = () => {
    setisModalVisible(true);
  };

  return (
    <>
      <section className="h-100 w-50  p-4" style={styles.parent}>
        <PageHeader heading="Account Info" subtitle="Here you can change your Username and Password"  />
      
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="w-100"
          autoComplete="off"
        >
          {formFields.map(({ inputType: INPUT, ...rest }, idx) => (
            <INPUT
              size={"large"}
              classname="mx-0"
              key={idx}
              width="100%"
              {...rest}
            />
          ))}

          <ButtonField
            type="success"
            icon={<BsFillPatchCheckFill className="me-2" />}
            size={"large"}
            width="100"
            classnames={"mt-3 "}
            htmlType="submit"
          >
            Update Account Details
          </ButtonField>
        </Form>
      </section>
      <Modal
        title="Change the Account Details"
        style={{ top: 120 }}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setisModalVisible(false)}
        closable
        okButtonProps={{ loading: isLoader }}
        okText="Update"
      >
        <Text>Login Details</Text>
        <br />
        <Text type="warning">
          If you type a wrong password your account will be logout automaticaly
        </Text>

        {modelForm}
        {errorOnEdit.isErr && (
          <Text type="danger">
          {errorOnEdit.err}
          </Text>
        )}
      </Modal>
    </>
  );
}

export default AccountDetails;

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
    inputType: TextField,
    label: "email",
    placeHolder: "your email",
    name: "email",
    rules: [
      {
        type: "email",
        message: "fill your Email Correctly..",
      },
      {
        required: true,
        message: "fill your username..",
      },
    ],
  },
  {
    inputType: PasswordField,
    label: "New Password",
    placeHolder: "your new password",
    name: "password",
  },
  {
    inputType: PasswordField,
    label: "Confirm Password",
    placeHolder: "confirm passsword",
    name: "confirmPassword",
  },
];
