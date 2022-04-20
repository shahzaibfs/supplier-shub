import { Col, Form, Image, message, Row, Typography, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillFolderAdd, AiOutlineUpload } from "react-icons/ai";
import TextField from "../../../../Components/Inputs/TextField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import InputNumberField from "../../../../Components/Inputs/number-field";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import { useDispatch } from "react-redux";
import doGetCategoriesFromDatabase from "../../../../services/category-service";
import { useGetCategories } from "../../../../hooks/useGetCategories";
import TreeSelectField from "../../../../Components/Inputs/TreeSelectField";
import ButtonField from "../../../../Components/Inputs/button-field";

import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import { doSaveOrUpdateProduct } from "../../../../services/supplier-services/supplier-product-service";
const { Text } = Typography;

function NewProductForm() {
  const [productPicture, setProductPicture] = useState("");
  const [productState, setproductState] = useState(
    "inputStage" || "empty" || "filled"
  );
  const [productSaving, setIsProductSaving] = useState(
    "loaded" || "loading" || "error"
  );

  console.log(productSaving);
  const dispatch = useDispatch();
  const categories = useGetCategories();
  const user = useGetAuthenticatedUser();

  useEffect(() => {
    if (categories.length <= 0) dispatch(doGetCategoriesFromDatabase());
  }, [dispatch, categories]);

  const handleSubmit = (productData) => {
    if (productPicture.length <= 0) {
      setproductState("empty");
      return;
    }
    setproductState("filled");
    setIsProductSaving("loading")
    const productDetails = {
      productId: 0,
      ...productData,
      productCoverUrl: productPicture,
      category: {
        categoryId: productData.category,
      },
    };

    dispatch(doSaveOrUpdateProduct(productDetails, user.token,{setIsProductSaving}));
  };

  // ** props for Upload Button
  const uploadProps = {
    name: "file",
    action: "http://localhost:8081/api/v1.0/upload/file",
    headers: {
      authorization: user.token,
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        setProductPicture(info.file.response);
        setproductState("filled");
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(info) {
      setProductPicture("");
      setproductState("inputStage");
    },
  };

  return (
    <Row justify="space-around" className=" p-3 my-2" style={styles.parent}>
      <Col className="my-2 " style={{ flex: 0 }}>
        <Image
          width={150}
          height={150}
          src={productState === "filled" ? productPicture : ""}
          fallback="data:image/png;base64,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"
        />
        <Upload
          method="POST"
          {...uploadProps}
          className="d-flex flex-column position-relative"
          style={{ width: "160px" }}
          maxCount={1}
          type="select"
        >
          <ButtonField
            icon={<AiOutlineUpload className="me-2" />}
            size="large"
            type="success"
            width="100"
            classnames={`ms-0 me-auto  my-2 ${
              productState === "empty" ? "error__anim" : ""
            }`}
            circle
          >
            Add Photo
          </ButtonField>
        </Upload>
        {productState === "empty" && (
          <Text type="danger">Please Provide some Product Photos</Text>
        )}
      </Col>
      <Col xs={24} className="ms-2" md={18}>
        <Form layout="vertical" onFinish={handleSubmit}>
          <PageHeader
            level={4}
            heading="Fill the Required Product Fields"
            subtitle="make sure to add category ,this will help your product come in top"
          />
          <Row justify="space-between">
            {newProductFields(categories).map(
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

            <ButtonField
              icon={<AiFillFolderAdd className="me-2" />}
              size="large"
              type="success"
              htmlType="submit"
              width="25"
              classnames={"ms-0 me-auto mt-2"}
              circle
              loading={productSaving==="loading" && true}
            >
              Add Product
            </ButtonField>
            {
              productSaving === "error" && 
              <Text type="danger">Something Went Wrong with Server Please Wait for While</Text>
            }
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default NewProductForm;

const newProductFields = (categories) => [
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
    name: "productDesc",
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
    inputField: TreeSelectField,
    name: "category",
    treeData: categories,
    valueIndex: "categoryId",
    childrenIndex: "categories",
    dataIndex: "categoryName",
    label: "categories",
  },
];

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};
