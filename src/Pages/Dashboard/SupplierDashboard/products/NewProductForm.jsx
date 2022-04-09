import { Button, Col, Form, message, Row, Upload } from "antd";
import React from "react";
import { AiFillFolderAdd, AiOutlineUpload } from "react-icons/ai";
import TextField from "../../../../Components/Inputs/TextField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import SelectField from "../../../../Components/Inputs/SelectField";
import InputNumberField from "../../../../Components/Inputs/number-field";
import PageHeader from "../../../../Components/PageHeader/PageHeader";

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
    <Form layout="vertical" className="row  p-3 my-2" style={styles.parent}>
      <Row justify="center">
        <Col xs={24} md={4} className="my-2">
          <img src="" alt="" width={"150px"} height="150px" />
          <Upload
            {...props}
            className="d-flex flex-column"
            style={{ width: "150px" }}
          >
            <Button
              className="d-flex align-items-center justify-content-center mt-2"
              icon={<AiOutlineUpload className="me-2" />}
              size="large"
              type="primary"
              style={{ width: "150px" }}
            >
              Upload Picture
            </Button>{" "}
          </Upload>
        </Col>
        <Col xs={24} className="ms-2" md={18}>
          <PageHeader level={4} heading="Fill the Required Product Fields" subtitle="make sure to add category ,this will help your product come in top" />
          <Row justify="space-between">
            {newProductFields.map(
              ({ inputField: InputField, ...rest }, index) => (
                <Col xs={24} md={11} key={index}>
                  <InputField
                    classname={"mx-0"}
                    size={"large"}
                    {...rest}
                    width={"100%"}
                  />
                </Col>
              )
            )}

            <Button
              className="d-flex mt-2 align-items-center justify-content-center "
              icon={<AiFillFolderAdd className="me-2" />}
              size="large"
              type="primary"
              htmlType="submit"
            >
              Add Product
            </Button>
          </Row>
        </Col>
      </Row>
    </Form>
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
    rules: [{ required: true, message: "Product name must not be empty " }],
  },
  {
    inputField: InputNumberField,
    label: "Price",
    type: "number",
    placeHolder: "45.00",
    name: "productPrice",
    rules: [
      { type: "number", message: "must be number" },
      { required: true, message: "Product Weight must be filled " },
    ],
  },
  {
    inputField: TextAreaField,
    label: "Description",
    type: "text",
    placeHolder: "your Product Description",
    name: "productDescription",
    required: true,
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
    rules: [{ required: true, message: "Product Weight must be filled " }],
  },
  {
    inputField: InputNumberField,
    label: "Prduct size",
    type: "number",
    placeHolder: "your product size",
    name: "productSize",
    rules: [{ required: true, message: "Product size must be filled " }],
  },
  {
    inputField: InputNumberField,
    label: "Minimum Order",
    placeHolder: "Minimum Order",
    name: "productMinOrder",
    rules: [
      { required: true, message: "Product Minimum order must be filled " },
    ],
  },
  {
    inputField: SelectField,
    options: [
      { name: "somthing1", value: "something1" },
      { name: "somthing2", value: "something2" },
    ],
    label: "Category",
    placeHolder: "choose product category",
    required: true,
  },
];

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};
