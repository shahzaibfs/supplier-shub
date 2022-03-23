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
  value
}) {
  return (
    <div style={{ width: width }} className="m-2">
    { label && <> <label>{label}</label> <br /></>}
     
      <Input
     
        addonBefore={addOnBefore}
        status={status}
        className="mb-0"
        placeholder={placeHolder}
        style={{ width: "100%" }}
        name={name}
        type={type ?? "text"}
        onChange={onChange}
        value={value}
      />{" "}
    </div>
  );
}

export default TextField;
