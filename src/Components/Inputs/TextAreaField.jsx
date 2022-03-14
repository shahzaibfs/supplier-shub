import React from "react";

import TextArea from "antd/lib/input/TextArea";

function TextAreaField({
  width,
  placeHolder,
  label,
  name,
  onChange,
  type,
  status,
}) {
  return (
    <div style={{width:width}} className="mt-2 mb-2">
      <label>{label}</label>
      <br></br>
      <TextArea
      rows={4}
        status={status}
        className="mb-0"
        placeholder={placeHolder}
        style={{width:"100%"}}
        name={name}
        type={type?? "text"}
        onChange={onChange}
      />{" "}
    </div>
  );
}

export default TextAreaField;
