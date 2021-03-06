import React from "react";
import { Form, Input } from "antd";

function PasswordField({ label, placeHolder, width, size, name, required ,classname }) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: required,
          message: "Please input your Password",
        },
      ]}
      className={`m-2 ${classname}`}
      style={{ width: width }}
    >
      <Input.Password
        size={size}
        placeholder={placeHolder}
      />
    </Form.Item>
  );
}

export default PasswordField;
