import { Alert, Button, Col, Form, Modal, Row } from "antd";
import React, { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";

import PageHeader from "../../../../Components/PageHeader/PageHeader";
import SearchForm from "../../../../Components/SearchContainer/SearchForm";
import ShippingInfoTable, { formFields } from "./ShippingInfoTable";
import TextField from "../../../../Components/Inputs/TextField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";

import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import { editOrSaveCustomerShippingAddressService, getSearchShippingAddressResult } from "../../../../services/customer-services/customer-shipping-address-service";

function CustomerShippingInfo() {
  const [isSaving, setIsSaving] = useState(
    { status: "ok", message: "" },
    { status: "loading", message: "Loading Please Wait A While  ...." },
    { status: "error", message: "Error ...." }
  );
  const [isModalVisible, setisModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const user = useGetAuthenticatedUser();

  const searchFormFields = [
    {
      inputType: TextField,
      label: "Shop Name",
      placeHolder: "Enter Your Shop Name",

      name: "shopName",
    },
    {
      inputType: TextAreaField,
      label: "Shipping Address",
      placeHolder: "shipping address",
      classname: "mb-4",
      name: "shippingAddress",
    },
  ];

  const buttonInfo = {
    type: "primary",
    text: "Search",
    classname: "pt-2",
  };

  const handleSearchSubmit = (data) => {
    console.log(data);
    dispatch(
      getSearchShippingAddressResult({
        token:user.token,
        shippingAddressQuery:{
          "shopName": data.shopName,
          "shippingAddress": data.shippingAddress
        }
      })
    )
  };
  const handleModalOpen = () => {
    setisModalVisible(true);
  };
  const handleOk = () => {
    setIsSaving({
      status: "loading",
      message: "Saving Data Please Wait",
    });
    const formDetails = form.getFieldsValue();
    const customerShippingAddressReqBody = {
      ...formDetails,
      shopSupervisorPhNo:
        formDetails.prefixSelectorContactNo + "-" + formDetails.contactNo,
      id: 0,
    };

    dispatch(
      editOrSaveCustomerShippingAddressService({
        customerShippingAddressReqBody,
        hooks: {
          setIsSaving,
          setisModalVisible,
        },
        token: user.token,
      })
    );
  };
  const handleCancel = () => {
    setisModalVisible(false);
  };

  return (
    <section className=" p-3">
      <PageHeader
        heading={"Shipping Info"}
        subtitle="here you can add and Edit your shipping addresses"
      />

      <SearchForm
        classname={"my-3"}
        handleSubmit={handleSearchSubmit}
        formFields={searchFormFields}
        buttonInfo={buttonInfo}
      />
      <div className="mt-2 mb-2 d-flex justify-content-end">
        <Button
          size="large"
          type="primary"
          className="d-flex align-items-center"
          icon={<AiFillFileAdd className="me-1" />}
          onClick={handleModalOpen}
        >
          Add New Address
        </Button>
      </div>
      <ShippingInfoTable />
      <Modal
        title="Add New Shipping Address "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <Form form={form} layout="vertical" initialValues={{
          prefixSelectorContactNo : 92
        }}>
          <Row gutter={8}>
            {formFields.map(({ inputType: INPUT, xs, ...rest }, idx) => (
              <Col xs={xs}>
                <INPUT classname="mx-0" width={"100%"} {...rest} />
              </Col>
            ))}
          </Row>
        </Form>
        {isSaving.status === "error" && (
          <Alert
            className=" my-2 w-100"
            message="Update Error Happend"
            description={isSaving.message}
            type="error"
          />
        )}
      </Modal>
    </section>
  );
}

export default CustomerShippingInfo;
