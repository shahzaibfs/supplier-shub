import React, { useEffect, useRef, useState } from "react";
import { Table, Button, Modal, Row, Form, Col, Alert } from "antd";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  editOrSaveCustomerShippingAddressService,
  getCustomerShippingAddressService,
} from "../../../../services/customer-services/customer-shipping-address-service";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import Loader from "../../../../Components/Loader/Loader";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import TextField from "../../../../Components/Inputs/TextField";
import NumberField from "../../../../Components/Inputs/number-field";
import PhoneField from "../../../../Components/Inputs/phone-field";
import SelectField from "../../../../Components/Inputs/SelectField";

const useFetchShippingAddress = ({
  hooks = {},
  shippingAddresses,
  dispatch,
  token,
}) => {
  useEffect(() => {
    if (shippingAddresses.length > 0) return;
    dispatch(
      getCustomerShippingAddressService({
        token: token,
        hooks,
      })
    );
  }, [dispatch, shippingAddresses, token, hooks]);
};

function ShippingInfoTable() {
  const [fetching, setFetching] = useState(
    { status: "ok", message: "" },
    { status: "loading", message: "Loading Please Wait A While  ...." },
    { status: "error", message: "Error ...." }
  );
  const [isSaving, setIsSaving] = useState(
    { status: "ok", message: "" },
    { status: "loading", message: "Loading Please Wait A While  ...." },
    { status: "error", message: "Error ...." }
  );
  const [isModalVisible, setisModalVisible] = useState(false);
  const currModalDataRef = useRef(null);
  const shippingAddresses = useSelector(
    (store) => store.customerShippingAddressReducer
  );
  const dispatch = useDispatch();
  const user = useGetAuthenticatedUser();
  const [form] = Form.useForm();

  useFetchShippingAddress({
    dispatch,
    shippingAddresses,
    hooks: {
      setFetching,
    },
    token: user.token,
  });

  const columns = [
    {
      title: "S#",
      dataIndex: "S#",
      key: "S#",
    },
    {
      title: "Shop Supervisor",
      dataIndex: "shopSupervisor",
      key: "name",
    },
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
    },
    {
      title: "Postal Code",
      dataIndex: "postalCode",
      key: "postalCode",
    },
    {
      title: "Shipping Address",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
    },

    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Phone No",
      dataIndex: "phNo",
      key: "phNo",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, data) => (
        <>
          <Button
            className="bg-success text-white"
            icon={<AiFillEdit />}
            onClick={() => handleModalOpen(data)}
          ></Button>
          <Button
            className="bg-danger text-white"
            icon={<AiFillDelete />}
          ></Button>
        </>
      ),
    },
  ];

  const data = shippingAddresses.map((shippingAddress, idx) => ({
    "S#": idx,
    key: shippingAddress.id,
    shopSupervisor: shippingAddress.shopSupervisor,
    shopName: shippingAddress.shopName,
    shippingAddress: shippingAddress.shippingAddress,
    city: shippingAddress.city,
    phNo: shippingAddress.shopSupervisorPhNo,
    postalCode: shippingAddress.postalCode,
  }));

  const handleModalOpen = (data) => {
    setisModalVisible(true);
    form.setFieldsValue({
      ...data,
      prefixSelectorContactNo: data.phNo.split("-")[0],
      contactNo: data.phNo.split("-")[1] * 1,
    });

    currModalDataRef.current = data;
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
      id: currModalDataRef.current.key,
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
    <>
      <Table
        loading={{
          indicator: <Loader />,
          spinning:
            (fetching.status === "loading") | (isSaving.status === "loading") &&
            true,
        }}
        className="mt-3"
        columns={columns}
        dataSource={data}
      />
      <Modal
        title="Update Shipping Address "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <Form form={form} layout="vertical">
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
    </>
  );
}

export default ShippingInfoTable;

const prefixSelector = (
  <SelectField
    dataIndex={"data"}
    name={"prefixSelectorContactNo"}
    valueIndex={"value"}
    key="contact-key"
    options={[{ value: 92, data: "+92" }]}
    noMargin={true}
  />
);

const formFields = [
  {
    inputType: TextField,
    name: "shopSupervisor",
    label: "Supervisor Name",
    xs: 24,
  },
  {
    inputType: TextField,
    name: "shopName",
    label: "Shop Name",
    xs: 24,
  },
  {
    inputType: TextAreaField,
    name: "shippingAddress",
    label: "Shipping Address",
    xs: 24,
  },
  {
    inputType: TextField,
    name: "city",
    label: "City",
    xs: 12,
  },
  {
    inputType: NumberField,
    name: "postalCode",
    label: "Postal Code",
    xs: 12,
  },
  {
    inputType: PhoneField,
    name: "contactNo",
    addonBefore: prefixSelector,
    label: "Supervisor Phone Number",
    xs: 24,
  },
];
