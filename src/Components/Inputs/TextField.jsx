import React from "react";
import { Form, Input } from "antd";

function TextField({
  addOnBefore = null,
  width = 0 || "",
  placeHolder,
  label,
  name,
  type = "text",
  size,
  rules = [],
  value,
  defaultValue,
  status,
  classname = "",
}) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      className={`m-2 ${classname} `}
      style={{ width: width }}
      initialValue={defaultValue ?? ""}
    >
      <Input
        status={status ?? ""}
        value={""}
        type={type}
        placeholder={placeHolder}
        size={size}
        addonBefore={addOnBefore}
      />
    </Form.Item>
  );
}

export default TextField;
