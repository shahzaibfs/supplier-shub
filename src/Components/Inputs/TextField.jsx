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
  defaultValue,
  status,
  classname=""
}) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      className={`m-2 ${classname} `}
      style={{ width: width }}
    >
      <Input
      status={status ?? ""}
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
