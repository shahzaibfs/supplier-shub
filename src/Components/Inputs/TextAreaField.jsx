import React from "react";
import { Form, Input } from "antd";



function TextAreaField({
  width,

  label,
  name,
  size,
  required,
 
}) {
  return (
    <Form.Item
      
      name={name}
      label={label}
      rules={[
        {
          required: required,
          message: "Please input your message",
        },
      ]}
      className="m-2"
      style={{ width: width }}
    >
      <Input.TextArea size={size} showCount maxLength={100} />
    </Form.Item>
  );
}

export default TextAreaField;
