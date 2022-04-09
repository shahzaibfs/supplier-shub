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
  controls=false
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
      controls={controls}
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
