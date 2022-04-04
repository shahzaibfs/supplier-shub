import React from "react";
import { Input } from "antd";

function TextField({
  addOnBefore,
  width,
  placeHolder,
  label,
  name,
  onChange,
  type,
  status,
  value,
  size,
  required
}) {
  return (
    <div style={{ width: width }} className="m-2">
    { label && <> <label className="body-1 text-primary-light-800">{label}</label> <br /></>}
     
      <Input
     size={size}
        addonBefore={addOnBefore}
        status={status}
        className="mb-0"
        placeholder={placeHolder}
        style={{ width: "100%" }}
        name={name}
        type={type ?? "text"}
        onChange={onChange}
        value={value}
        required={required}
      />{" "}
    </div>
  );
}

export default TextField;
