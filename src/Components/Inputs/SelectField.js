import React from "react";

import { Form, Select } from "antd";
const { Option } = Select;

function SelectField({
  options = [],
  label="",
  width,
  name,
  size,
  dataIndex ="name",
  valueIndex ="value",
  required,
  placeHolder,
  noMargin=false,
  classname
}) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: required,
          message: "Please provide the above details",
        }
      ]}
      className={`m-${noMargin ? "0" : "2"} ${classname}`}
      style={{ width: width ?? "" }}
  
    >
      <Select  size={size ?? "small"}  placeholder={placeHolder}>
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
