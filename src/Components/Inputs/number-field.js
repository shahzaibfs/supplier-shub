import React from "react";
import { Form, InputNumber } from "antd";

function InputNumberField({
  addOnBefore,
  width,
  placeHolder,
  label,
  name,
  size,
  rules = [],
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
    >
      <InputNumber
        status={status ?? ""}
        placeholder={placeHolder}
        size={size}
        defaultValue={defaultValue ?? ""}
        addonBefore={addOnBefore}
        style={{width:width}}
      />
    </Form.Item>
  );
}

export default InputNumberField;
