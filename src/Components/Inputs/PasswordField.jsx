import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function PasswordField({ label, placeHolder, width, size, onChange ,name }) {
  return (
    <div className="m-2" style={{ width: width }}>
      {label && (
        <>
          <label>{label}</label> <br />
        </>
      )}
      <Input.Password
        onChange={onChange}
        size={size}
        width={"100%"}
        placeholder={placeHolder}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        name={name}
      />
    </div>
  );
}

export default PasswordField;
