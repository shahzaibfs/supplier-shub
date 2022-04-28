import { Alert, Divider, Form } from "antd";
import React, { useEffect, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import ButtonField from "../../../../Components/Inputs/button-field";
import PhoneField from "../../../../Components/Inputs/phone-field";
import SelectField from "../../../../Components/Inputs/SelectField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import TextField from "../../../../Components/Inputs/TextField";

import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import {
  getUserDetailsService,
  updateCustomerDetailService,
} from "../../../../services/customer-services/customer-details-service";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const useFetchCustomerDetails = ({
  token = "",
  hooks = {},
  dispatch,
  customerDetails,
}) => {
  useEffect(() => {
    if (Object.keys(customerDetails).length > 0) return;
    dispatch(getUserDetailsService({ token }));
  }, [customerDetails, dispatch, token]);
};

const useFillForm = ({ form, customerDetails }) => {
  useEffect(() => {
    if (Object.keys(customerDetails).length <= 0) return;
    form.setFieldsValue({
      ...customerDetails,
      firstName: customerDetails.customerName.split("||")[0],
      lastName: customerDetails.customerName.split("||")[1],
      customerContactNo: customerDetails.customerContactNo.split("-")[1],
      prefixSelectorContactNo: 92,
    });
  }, [customerDetails, form]);
};

function CustomerDetails() {
  const [formPostHandle, setFormPostHandle] = useState(
    { status: "ok", message: "" },
    { status: "loading", message: "Loading Please Wait A While  ...." },
    { status: "error", message: "Error ...." }
  );
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useGetAuthenticatedUser();
  const customerDetails = useSelector(
    (store) => store.customerProfileDetailsReducer
  );

  useFetchCustomerDetails({ dispatch, token: user.token, customerDetails });
  useFillForm({ form, customerDetails });

  const handleSubmit = (data) => {
    setFormPostHandle({
      status: "loading",
      message: "Sending Data Please Wait a While .....",
    });
    const customerDetailsReqBody = {
      ...data,
      customerContactNo:
        data.prefixSelectorContactNo + "-" + data.customerContactNo,
      customerName: data.firstName + "||" + data.lastName,
    };
    dispatch(
      updateCustomerDetailService({
        customerDetails: customerDetailsReqBody,
        token: user.token,
        hooks: {
          setFormPostHandle,
        },
      })
    );
  };

  return (
    <section
      className="  p-4 d-flex flex-wrap justify-content-evenly "
      style={styles.parent}
    >
      <div
        className="profile-picture-section   mt-2 mb-2"
        style={{ width: "150px" }}
      >
        <div
          style={{ width: "150px", height: "150px", overflow: "hidden" }}
          className="bg-primary rounded-circle "
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpUZyS8yIatbyOvFBX3GV7QqUleB-Oxa8WCWZVbSFaOBv1BjMckjmLhQIdj5WUkfph0A&usqp=CAU"
            alt=""
            width={"100%"}
            height="100%"
          />
        </div>
        <div className="m-2">
          {" "}
          <ButtonField
            type="success"
            icon={<FaEdit className="me-1" />}
            className=""
            size={"large"}
            width="100"
            circle
          >
            Edit Profile{" "}
          </ButtonField>
        </div>
      </div>
      <Form
        layout="vertical"
        className=" form section d-flex flex-wrap  w-75 justify-content-evenly"
        onFinish={handleSubmit}
        form={form}
      >
        <div
          className="border-right-primary-light me-1 d-flex justify-content-between align-content-start flex-wrap pe-4"
          style={{ width: "49%" }}
        >
          {leftFormFields.map(({ inputType: INPUT, ...rest }, idx) => (
            <INPUT key={idx} width={"100%"} size={"large"} {...rest} />
          ))}
          <div className="m-2 w-100">
            <ButtonField
              type="success"
              icon={<BsFillPatchCheckFill className="me-2" />}
              size={"large"}
              htmlType="submit"
              classnames={""}
              width="100"
              circle
              loading={formPostHandle.status === "loading" && true}
            >
              Update Profile
            </ButtonField>
          </div>
          {
            (formPostHandle.status === "error" && (
              <Alert
                className="mx-2 my-2 w-100"
                message="Update Error Happend"
                description={formPostHandle.message}
                type="error"
              />
            ))
          }
        </div>
        <div style={{ width: "49%" }} className="ps-4   pe-3">
          {rightFormFields.map(({ inputType: INPUT, ...rest }, idx) => (
            <div key={idx}>
              {idx === 4 && (
                <Divider orientation="center">Social Profiles</Divider>
              )}
              <INPUT {...rest} width="100%" size={"large"} />
            </div>
          ))}
        </div>
      </Form>
    </section>
  );
}

export default CustomerDetails;

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

const leftFormFields = [
  {
    inputType: TextField,
    label: "Firstname",
    placeHolder: "your firstname",
    name: "firstName",
    type: "text",
    width: "45%",
    rules: [
      {
        required: true,
        message: "fill your firstname..",
      },
    ],
  },
  {
    inputType: TextField,
    label: "Lastname",
    placeHolder: "your lastname",
    name: "lastName",
    type: "text",
    width: "45%",
    rules: [
      {
        required: true,
        message: "fill your lastname..",
      },
    ],
  },
  {
    inputType: TextAreaField,
    label: "Customer Address",
    placeHolder: "Your Home Address",
    name: "customerAddress",
    rules: [
      {
        required: true,
        message: "fill your Home Address ..",
      },
    ],
  },

  {
    inputType: PhoneField,
    label: "Contact-no",
    placeHolder: "348xxxxxxx",
    name: "customerContactNo",
    addonBefore: prefixSelector,
    rules: [
      {
        required: true,
        message: "fill your contact-no..",
      },
    ],
  },
];

const rightFormFields = [
  {
    inputType: TextField,
    label: "Shop Name",
    placeHolder: "your shop-name",
    name: "shopName",
    type: "text",
    rules: [
      {
        required: true,
        message: "fill your shop-name ..",
      },
    ],
  },
  {
    inputType: TextField,
    label: "Shop Owner Name",
    placeHolder: "your shop-owner name",
    name: "shopOwnerName",
    type: "text",
    rules: [
      {
        required: true,
        message: "fill your shop-owner-name..",
      },
    ],
  },
  {
    inputType: TextAreaField,
    label: "Shop Address",
    placeHolder: "Your Shop Address",
    name: "shopAddress",
    type: "text",
    rules: [
      {
        required: true,
        message: "Fill Your Shop Address ..",
      },
    ],
  },
];
