import { Button, Form } from "antd";
import React, { useState } from "react";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import SearchForm from "../../../../Components/SearchContainer/SearchForm";
import SupplierAddressTable from "./SupplierAddressTable";
import { MdAddBox } from "react-icons/md";

import { Modal } from "antd";
import TextField from "../../../../Components/Inputs/TextField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import { useDispatch } from "react-redux";
import {
  doEditOrSaveSupplierAddresses,
  getSearchSupplierAddressService,
} from "../../../../services/supplier-services/supplier-setting-address-service";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import InputNumberField from "../../../../Components/Inputs/number-field";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const addressInterface = {
  id: 0,
  postalCode: 0,
  city: "",
  address: "",
};

function SupplierAddresses() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [currModalData, setCurrModalData] = useState(null);
  const [isLoader, setisLoader] = useState(false);
  const [modalForm] = Form.useForm();
  const dispatch = useDispatch();
  const user = useGetAuthenticatedUser();
  //TODO : modal ftns

  const showModal = (addressData, { key }) => {
    if (key === "NEW_ADDRESS") {
      setmodalTitle("New Address");
    } else {
      setmodalTitle("Edit Address");
    }
    setCurrModalData({
      ...addressInterface,
      id: addressData.No ?? 0,
    });
    modalForm.setFieldsValue(addressData);
    setIsModalVisible(true);
    setisLoader(true);
  };

  const handleOk = () => {
    setisLoader(true);
    modalForm
      .validateFields()
      .then((values) => {
        modalForm.resetFields();
        const reqData = { ...currModalData, ...values };
        setIsModalVisible(false);
        dispatch(
          doEditOrSaveSupplierAddresses(reqData, user.token, { setisLoader })
        );
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setisLoader(false);
  };

  //TODO : search field ftns

  const onHandleSearchChange = (e) => {
    console.log(e);
    dispatch(
      getSearchSupplierAddressService({
        token: user.token,
        city: e.city,
      })
    );
  };

  const searchFormFields = [
    {
      inputType: TextField,
      type: "text",
      label: "City",
      placeHolder: "City",
      name: "city",
      size: "large",
    },
  ];

  const buttonInfo = {
    type: "success",
    size: "large",
    circle: false,
    text: "Search",
  };

  return (
    <>
      <PageHeader
        heading={"Addresses"}
        subtitle="Here you can browse ,edit and add addresesas per your need"
        classname="my-2"
      />
      <SearchForm
        handleSubmit={onHandleSearchChange}
        formFields={searchFormFields}
        buttonInfo={buttonInfo}
      />

      <div className="p-3 my-2" style={styles.parent}>
        {" "}
        <Button
          type="primary"
          className="d-flex align-items-center justify-content-center ms-auto"
          icon={<MdAddBox className="me-1" />}
          size="large"
          onClick={() => showModal(addressInterface, { key: "NEW_ADDRESS" })}
        >
          Add Address
        </Button>
        <SupplierAddressTable
          setisLoader={setisLoader}
          isLoader={isLoader}
          showModal={showModal}
        />{" "}
      </div>

      <Modal
        visible={isModalVisible}
        title={<b>{modalTitle}</b>}
        okText="Add New Address"
        cancelText="Cancel"
        onCancel={handleCancel}
        onOk={handleOk}
        okButtonProps={{
          size: "large",
          type: "primary",
        }}
        cancelButtonProps={{
          size: "large",
          type: "primary",
          danger: true,
        }}
      >
        <Form form={modalForm} layout="vertical">
          {newAddressModalData.map(({ inputField: INPUT, ...rest }, index) => (
            <INPUT key={index} {...rest} size="large" width={"100%"} />
          ))}
        </Form>
      </Modal>
    </>
  );
}

export default SupplierAddresses;

const newAddressModalData = [
  {
    inputField: TextField,
    label: "City",
    placeHolder: "City",
    name: "city",
    rules: [{ required: true, message: "cannot be null" }],
  },
  {
    inputField: TextAreaField,
    type: "text",
    label: "Address",
    placeHolder: "Address",
    name: "address",
    required: true,
  },
  {
    inputField: InputNumberField,
    label: "Postal Code",
    placeHolder: "46000",
    name: "postalCode",
    rules: [
      { type: "number", message: "should be a number" },
      { required: true, message: "cannot be null" },
    ],
  },
];
