// slow component bad state management
// Todo : Fix the states on Modal

import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Popconfirm,
  Modal,
  Image,
  Form,
  Row,
  Col,
  Upload,
  message,
  Typography,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineQuestionCircle,
  AiOutlineUpload,
} from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";

import Loader from "../../../../Components/Loader/Loader";
import SelectField from "../../../../Components/Inputs/SelectField";

import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";

import {
  doDeleteSupplierProductFromDatabase,
  doGetAllSupplierProductsFromDatabase,
  doSaveOrUpdateProduct,
  doUpdateProductToOutOfStock,
} from "../../../../services/supplier-services/supplier-product-service";
import { useGetCategories } from "../../../../hooks/useGetCategories";
import TextField from "../../../../Components/Inputs/TextField";
import InputNumberField from "../../../../Components/Inputs/number-field";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import TreeSelectField from "../../../../Components/Inputs/TreeSelectField";
import doGetCategoriesFromDatabase from "../../../../services/category-service";
import ButtonField from "../../../../Components/Inputs/button-field";

const { Text } = Typography;

function AllProductsTable() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eidtProductData, setEditProductData] = useState({});
  const [handleOKFtn, setHandleOkFtn] = useState(null);
  const [isFetching, setisFetching] = useState(false);
  const [productSaving, setIsProductSaving] = useState(
    "loaded" || "loading" || "error"
  );
  const supplierProducts = useSelector((store) => store.supplierProductReducer);
  const dispatch = useDispatch();
  const user = useGetAuthenticatedUser();
  // ** effect for Getting products data only if they are not present in redux store
  useEffect(() => {
    if (supplierProducts.length > 0) return;
    setisFetching(true);
    dispatch(
      doGetAllSupplierProductsFromDatabase(user.token, { setisFetching })
    );
  }, [dispatch, user, supplierProducts]);

  const showModal = (productData) => {
    setEditProductData(productData);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOutOfStock = (productId) => {
    setisFetching(true);
    const outOfStockReqData = {
      outOfStockDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS"),
      productId: productId,
    };
    dispatch(
      doUpdateProductToOutOfStock(outOfStockReqData, user.token, {
        setisFetching,
      })
    );
  };
  const handleProductDelete = (productId) => {
    setisFetching(true);
    dispatch(
      doDeleteSupplierProductFromDatabase(productId, user.token, {
        setisFetching,
      })
    );
  };
  const columns = [
    {
      title: "Photo",
      key: "productCoverUrl",
      render: (text, data) => {
        
        console.log(data)

        return (

        <Image
          key={data.productCoverUrl}
          width={60}
          height={60}
          src={data.productCoverUrl}
          alt={productSaving.productName}
          style={{ objectFit: "contain", borderRadius: 7 }}
          fallback="data:image/png;base64,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"
        />
      )},
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Weight",
      dataIndex: "productWeight",
      key: "productWeight",
    },
    {
      title: "Size",
      dataIndex: "productSize",
      key: "productSize",
    },

    {
      title: "Category",
      dataIndex: "category",
      key: "categorys",
      render: (category, data) => {
        return (
          <SelectField
            disabled={true}
            defaultValue={category !== null ? category.categoryName : "NULL"}
            options={category !== null ? [category] : []}
            size={"middle"}
            dataIndex="categoryName"
            valueIndex="categoryId"
            data
            name="category"
          />
        );
      },
    },
    {
      title: "Minimum Order",
      dataIndex: "productMinOrder",
      key: "productMinOrder",
    },
    {
      title: "Out-Of-Stock",
      key: "out-of-stock",
      render: (text, data) => (
        <Popconfirm
          className=""
          icon={<FaBoxOpen />}
          title="You Sure its Out of Stock"
          onConfirm={() => handleOutOfStock(data.productId)}
        >
          <Button
            className="d-flex align-items-center justify-content-center bg-warning text-white"
            icon={<FaBoxOpen className="me-2" />}
          >
            out-of-stock
          </Button>
        </Popconfirm>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, data) => (
        <>
          <Button
            className="bg-success text-white"
            icon={<AiFillEdit />}
            onClick={() => showModal(data)}
          ></Button>

          <Popconfirm
            icon={<AiOutlineQuestionCircle color="red" />}
            title="Sure to Delete?"
            onConfirm={() => handleProductDelete(data.productId)}
          >
            <Button
              className="bg-danger text-white"
              icon={<AiFillDelete />}
            ></Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        loading={{
          spinning: productSaving === "loading" || (isFetching && true),
          indicator: <Loader />,
        }}
        className="mt-3"
        columns={columns}
        dataSource={supplierProducts}
        rowKey={(products) => products.productId}
      />
      <Modal
        title={<b>Edit Product Details</b>}
        visible={isModalVisible}
        onOk={handleOKFtn}
        onCancel={handleCancel}
        centered
      >
        <EditProductFormFields
          user={user}
          productData={eidtProductData}
          setHandleOkFtn={setHandleOkFtn}
          setIsModalVisible={setIsModalVisible}
          setIsProductSaving={setIsProductSaving}
        />
      </Modal>
    </>
  );
}

export default AllProductsTable;

const EditProductFormFields = ({
  productData,
  user,
  setHandleOkFtn,
  setIsModalVisible,
  setIsProductSaving,
}) => {
  const [productPicture, setProductPicture] = useState("");
  const [productState, setproductState] = useState(
    "inputStage" || "empty" || "filled"
  );

  const [modalForm] = Form.useForm();
  const categories = useGetCategories();
  const dispatch = useDispatch();

  //**  Effect for categroies dispatch only if they are not in redux
  useEffect(() => {
    console.log("hy");
    if (categories.length > 0) return;
    dispatch(doGetCategoriesFromDatabase());
  }, [dispatch, categories]);

  setTimeout(() => {
    setHandleOkFtn((old) => handleOk);
  }, 200);

  const handleOk = React.useCallback(() => {
    if (productState !== "filled") {
      setproductState("empty");
      return;
    }
    setIsProductSaving("loading");
    const editSupplierProductData = modalForm.getFieldsValue(
      Object.keys(productData)
    );
    const productDetails = {
      ...editSupplierProductData,
      productCoverUrl: productPicture,
      category: {
        categoryId: editSupplierProductData.category,
      },
    };
    dispatch(
      doSaveOrUpdateProduct(productDetails, user.token, { setIsProductSaving })
    );
    setIsModalVisible(false);
    // eslint-disable-next-line
  }, [
    setIsModalVisible,
    setproductState,
    productPicture,
    productState,
    setIsProductSaving,
    dispatch,
  ]);

  //Effect for setting up inital values
  useEffect(() => {
    modalForm.setFieldsValue({
      ...productData,
      category:
        productData.category !== null ? productData.category.categoryId : null,
    });
    setProductPicture(productData.productCoverUrl);
    setproductState("filled");
  }, [productData, modalForm]);

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
        console.log("pusshed");
        setproductState("filled");
      } else if (info.file.status === "error") {
        setProductPicture("");
        setproductState("error");
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(info) {
      setProductPicture("");
      setproductState("inputStage");
    },
  };

  if (Object.keys(productData) <= 0) return "sorry something went wrong ";

  return (
    <>
      <div className="d-flex">
        <Image
          width={150}
          height={150}
          defaultValue={productData.productCoverUrl}
          src={productState === "filled" ? productPicture : ""}
          fallback="data:image/png;base64,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"
        />
        <Upload
          method="POST"
          {...uploadProps}
          className="d-flex flex-column position-relative justify-content-end ms-2 my-0"
          style={{ width: "160px" }}
          maxCount={1}
          type="select"
        >
          <ButtonField
            icon={<AiOutlineUpload className="me-2" />}
            size="middle"
            type="success"
            width="100"
            classnames={`my-0 ${productState === "empty" ? "error__anim" : ""}`}
            circle
          >
            Add Photo
          </ButtonField>
        </Upload>
      </div>
      <Form layout="vertical" form={modalForm}>
        <Row gutter={8}>
          {editProductFormFields(categories).map(
            ({ inputField: InputField, xs, ...rest }, index) => (
              <Col key={index} xs={xs}>
                <InputField
                  classname="mx-0"
                  width={"100%"}
                  key={index}
                  size="large"
                  {...rest}
                />
              </Col>
            )
          )}
        </Row>
        {productState === "empty" && (
          <Text type="danger">Please Provide some Product Photos</Text>
        )}
      </Form>
    </>
  );
};

const editProductFormFields = (categories) => [
  {
    inputField: TextField,
    xs: 24,
    label: "Prduct Name",
    type: "text",
    placeHolder: "your product name",
    name: "productName",
    rules: [{ required: true, message: "Product name must not be empty " }],
  },
  {
    inputField: InputNumberField,
    label: "Price",
    xs: 12,
    type: "number",
    placeHolder: "45.00",
    name: "productPrice",
    rules: [
      { type: "number", message: "must be number" },
      { required: true, message: "Product Weight must be filled " },
    ],
  },
  {
    inputField: InputNumberField,
    label: "Prduct size",
    xs: 12,
    type: "number",
    placeHolder: "your product size",
    name: "productSize",
    rules: [{ required: true, message: "Product size must be filled " }],
  },
  {
    inputField: TextAreaField,
    label: "Description",
    type: "text",
    xs: 24,
    placeHolder: "your Product Description",
    name: "productDesc",
    required: true,
  },
  {
    inputField: TextAreaField,
    label: "Prduct Details",
    type: "text",
    xs: 24,
    placeHolder: "your product Details",
    name: "productDetails",
  },
  {
    inputField: TextField,
    label: "Prduct weight",
    type: "text",
    xs: 12,
    placeHolder: "i.e : cootton, kg ,liters",
    name: "productWeight",
    rules: [{ required: true, message: "Product Weight must be filled " }],
  },

  {
    inputField: InputNumberField,
    label: "Minimum Order",
    xs: 12,
    placeHolder: "Minimum Order",
    name: "productMinOrder",
    rules: [
      { required: true, message: "Product Minimum order must be filled " },
    ],
  },
  {
    inputField: TreeSelectField,
    name: "category",
    xs: 24,
    treeData: categories.length > 0 ? categories : [],
    valueIndex: "categoryId",
    childrenIndex: "categories",
    dataIndex: "categoryName",
    label: "categories",
  },
];
