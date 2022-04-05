import React from "react";

import { Form, Select } from "antd";
const { Option } = Select;

function SelectField({
  options = [],
  label,
  width,
  name,
  size,
  dataIndex,
  valueIndex,
  required,
  placeHolder,
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
      <Select size={size} placeholder={placeHolder}>
        {options.map((option, idx) => (
          <Option key={idx} value={option[valueIndex]}>
            {option[dataIndex]}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default SelectField;
