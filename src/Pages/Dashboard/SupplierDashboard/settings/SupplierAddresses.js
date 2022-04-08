import { Button, Form } from "antd";
import React, { useState } from "react";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import SearchForm from "../../../../Components/SearchContainer/SearchForm";
import SupplierAddressTable from "./SupplierAddressTable";
import { MdAddBox } from "react-icons/md";

import { Modal } from "antd";
import TextField from "../../../../Components/Inputs/TextField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const addressInterface = {
  name: "",
  postalCode: 0,
  city: "",
  address: "",
};

function SupplierAddresses() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalForm]  = Form.useForm();

  //TODO : modal ftns

  console.log(Object.keys(addressInterface));

  const showModal = (addressData, { key }) => {
    if (key === "NEW_ADDRESS") {
      setmodalTitle("New Address");
    } else {
      setmodalTitle("Edit Address");
    }

    modalForm.setFieldsValue(addressData)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    modalForm
      .validateFields()
      .then((values) => {
        modalForm.resetFields();
        console.log(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
  
    setIsModalVisible(false);
  };

  //TODO : search field ftns

  const onHandleSearchChange = (e) => {
    console.log(e);
  };

  const searchFormFields = [
    {
      inputField: "TextField",
      type: "text",
      label: "City",
      placeHolder: "City",
      name: "cityName",
    },
  ];

  const buttonInfo = {
    type: "success",
    size: "large",
    circle: false,
    text: "Search",
  };

 

  const handleNewAddressSubmit = (data) => {
    console.log(data);
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
        <SupplierAddressTable showModal={showModal} />{" "}
      </div>

      <Modal
        visible={isModalVisible}
        title={<b>{modalTitle}</b>}
        okText="Add New Address"
        cancelText="Cancel"
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form form={modalForm} layout="vertical" onFinish={handleNewAddressSubmit}>
          {newAddressModalData.map((field, index) => (
            <field.inputField
              key={index}
              name={field.name}
              label={field.label}
              type={field.type}
              placeHolder={field.placeHolder}
            />
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
    type: "text",
    label: "Address Name",
    placeHolder: "name",
    name: "name",
  },
  {
    inputField: TextField,
    type: "text",
    label: "City",
    placeHolder: "City",
    name: "city",
  },
  {
    inputField: TextAreaField,
    type: "text",
    label: "Address",
    placeHolder: "Address",
    name: "address",
  },
  {
    inputField: TextField,
    type: "number",
    label: "Postal Code",
    placeHolder: "46000",
    name: "postalCode",
  },
];
