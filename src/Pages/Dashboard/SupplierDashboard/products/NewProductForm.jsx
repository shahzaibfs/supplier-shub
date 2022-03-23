import { Button, message, Upload } from "antd";
import React from "react";
import {

  AiFillFolderAdd,

  AiOutlineUpload,
} from "react-icons/ai";
import TextField from "../../../../Components/Inputs/TextField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import SelectField from "../../../../Components/Inputs/SelectField";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    console.log(info);
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function NewProductForm() {
  return (
    <form className="row  p-2" style={{ minHeight: "100%" }}>
      <section className="image-section  col-12 col-lg-3  d-flex flex-column align-items-center border-right-primary-light">
        <div className=" p-2" style={{ width: "200px" }}>
          <img src="" alt="" width={"100%"} height="200px" />
          <Upload
            {...props}
            className="d-flex flex-column"
            style={{ width: "100%" }}
          >
            <Button
              className="d-flex align-items-center justify-content-center mt-2"
              icon={<AiOutlineUpload className="me-2" />}
              size="large"
              type="primary"
              style={{ width: "100%" }}
            >
              Upload Picture
            </Button>{" "}
          </Upload>
        </div>
      </section>

      <section className="p-2 col-lg-9 row flex-wrap align-content-start ">
        <h1 className="heading-3 col-12 text-primary-light-800 w-100">
          Fill All the product Details{" "}
        </h1>
        {newProductFields.map(({ inputField: InputField, ...rest }, index) => (
          <div className="col-12  col-lg-6" key={index}>
            <InputField {...rest} width={"100%"} />
          </div>
        ))}
        <div className="m-2 col-12 ">
          <Button
            className="d-flex  align-items-center justify-content-center "
            icon={<AiFillFolderAdd className="me-2" />}
            size="large"
            type="primary"
          >
            Add Product
          </Button>{" "}
        </div>
      </section>
    </form>
  );
}

export default NewProductForm;

const newProductFields = [
  {
    inputField: TextField,
    label: "Prduct Name",
    type: "text",
    placeHolder: "your product name",
    name: "productName",
  },
  {
    inputField: TextField,
    label: "Price",
    type: "number",
    placeHolder: "45.00",
    name: "productPrice",
  },
  {
    inputField: TextAreaField,
    label: "Description",
    type: "text",
    placeHolder: "your Product Description",
    name: "productDescription",
  },
  {
    inputField: TextAreaField,
    label: "Prduct Details",
    type: "text",
    placeHolder: "your product Details",
    name: "productDetails",
  },
  {
    inputField: TextField,
    label: "Prduct weight",
    type: "text",
    placeHolder: "i.e : cootton, kg ,liters",
    name: "productWeight",
  },
  {
    inputField: TextField,
    label: "Prduct size",
    type: "number",
    placeHolder: "your product size",
    name: "productSize",
  },
  {
    inputField: TextField,
    label: "Minimum Order",
    type: "number",
    placeHolder: "Minimum Order",
    name: "productMinOrder",
  },
  {
    inputField: SelectField,
    options: [
      { name: "somthing1", value: "something1" },
      { name: "somthing2", value: "something2" },
    ],
    label: "Category",
  },
];
