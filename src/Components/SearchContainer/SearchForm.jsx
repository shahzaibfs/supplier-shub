import { Button } from "antd";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TextAreaField from "../Inputs/TextAreaField";
import TextField from "../Inputs/TextField";

function SearchForm({ formFields ,buttonInfo}) {
  return (
    <form className="w-50">
      {formFields.map((formField,idx) =>
        formField.inputField === "TextField" ? (
          <TextField
          key={idx}
            onChange={formField.onHandlechange}
            label={formField.label}
            type={formField.type}
            name={formField.name}
          />
        ) : (
          <TextAreaField
          key={idx}
            onChange={formField.onHandlechange}
            label={"Shipping Address"}
            name={formField.name}
          />
        )
      )}

      <div className="mt-2 mb-2 d-flex justify-content-end w-100">
        <Button
          type={buttonInfo.type}
          className="d-flex justidy-content-center align-items-center"
          size="large"
          icon={<AiOutlineSearch className="me-1" />}
          onClick={buttonInfo.onHandleClick}
        >
          {buttonInfo.text}
        </Button>
      </div>
    </form>
  );
}

export default SearchForm;
