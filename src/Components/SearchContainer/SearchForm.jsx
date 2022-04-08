import { Form } from "antd";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ButtonField from "../Inputs/button-field";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

function SearchForm({
  formFields,
  buttonInfo,
  classname,
  handleSubmit = null,
}) {
  return (
    <Form
      layout="vertical"
      className={`w-50 mx-0 my-2 p-2 py-3 ${classname}`}
      style={styles.parent}
      onFinish={handleSubmit}
    >
      {formFields.map(({ inputType: INPUT, ...rest }, idx) => (
        <INPUT key={idx} {...rest} />
      ))}

      <div className="mx-2 my-1">
        <ButtonField
          htmlType="submit"
          classnames={"ms-auto me-0"}
          type={buttonInfo.type}
          size={buttonInfo.size}
          icon={<AiOutlineSearch className="me-2" />}
          onClick={buttonInfo.onHandleClick}
          width="25"
          circle={buttonInfo.circle}
        >
          {buttonInfo.text}
        </ButtonField>
      </div>
    </Form>
  );
}

export default SearchForm;
