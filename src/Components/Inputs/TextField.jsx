import React from "react";
import { Form, Input } from "antd";

function TextField({
  addOnBefore,
  width,
  placeHolder,
  label,
  name,
  type,
  size,
  rules = [],
  value,
  defaultValue
}) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      className="m-2"
      style={{ width: width }}
    >
      <Input
        value={value}
        type={type}
        placeholder={placeHolder}
        size={size}
        defaultValue={defaultValue ?? ""}
        addonBefore={addOnBefore}
      />
    </Form.Item>
  );
}

export default TextField;
