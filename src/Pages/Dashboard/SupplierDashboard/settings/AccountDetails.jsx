import {  Form } from "antd";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ButtonField from "../../../../Components/Inputs/button-field";
import PasswordField from "../../../../Components/Inputs/PasswordField";
import TextField from "../../../../Components/Inputs/TextField";
const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

function AccountDetails() {
  return (
    <section className="h-100 w-50  p-4" style={styles.parent}>
      <div>
        <h1 className="heading-2 text-primary mb-1">Account Info</h1>
        <p className="body-2 text-muted">
          Here you can change your Username and Password{" "}
        </p>
      </div>
      <Form layout="vertical" className="w-100" autoComplete="off">
        <TextField
          classname="me-0 ms-0"
          label="Username"
          placeHolder={"someone@gmail.com"}
          type="email"
          width={"100%"}
        />

        <TextField
          classname="me-0 ms-0"
          label="Email"
          placeHolder={"someone@gmail.com"}
          type="email"
          width={"100%"}
        />
        <PasswordField
          classname="me-0 ms-0"
          label="New Password"
          placeHolder={"********"}
          width={"100%"}
        />
        <PasswordField
          classname="me-0 ms-0"
          label="Confirm Password"
          placeHolder={"********"}
          width={"100%"}
        />
     
          <ButtonField
            type="success"
            icon={<BsFillPatchCheckFill className="me-2" />}
            size={"large"}
            width="100"
            classnames={"mt-3 "}
          >
            Update Account Details
          </ButtonField>
       
      </Form>
    </section>
  );
}

export default AccountDetails;
