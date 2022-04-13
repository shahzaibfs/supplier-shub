import { Divider, Form } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import TextField from "../../../../Components/Inputs/TextField";
import PhoneField from "../../../../Components/Inputs/phone-field";
import SelectField from "../../../../Components/Inputs/SelectField";
import { useDispatch } from "react-redux";
import { doEditSupplierDetails, doGetSupplierProfileData } from "../../../../services/supplier-services/supplier-profile-service";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import { useGetSupplierProfileData } from "../../../../hooks/useGetSupplierProfileData";
import ButtonField from "../../../../Components/Inputs/button-field";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

function SupplierDetails() {
  const [refreshData, setrefreshData] = useState(false);
  const user = useGetAuthenticatedUser();
  const supplierProfileData = useGetSupplierProfileData();
  const dispatch = useDispatch();
  const [form] = Form.useForm();



  useEffect(() => {
    if (Object.keys(supplierProfileData).length !== 0) {

      form.setFieldsValue({
        firstName: supplierProfileData.supplierFirstname,
        lastName: supplierProfileData.supplierLastname,
        brandName: supplierProfileData.brandName,
        brandOwnerName: supplierProfileData.brandOwnerName,
        bio: supplierProfileData.supplierBio,
        contactNo: supplierProfileData.supplierContactNo.split("-")[1],
        prefixSelectorContactNo:
          supplierProfileData.supplierContactNo.split("-")[0],
        city: supplierProfileData.supplierBrandAddresses[0].city,
        address: supplierProfileData.supplierBrandAddresses[0].address,
        postalCode: supplierProfileData.supplierBrandAddresses[0].postalCode,
        instagramUrl: supplierProfileData.instagram.instagram_url,
        facebookUrl: supplierProfileData.facebook.facebookUrl,
      });
    }else{
      dispatch(doGetSupplierProfileData(user.token))
    }
   
    // eslint-disable-next-line
  }, [supplierProfileData, refreshData,dispatch]);

  const handleSubmit = (data) => {
    const reqData = {
      firstName: data.firstName,
      lastName: data.lastName,
      profileUrl: "http://something-photo.com",
      bio: data.bio,
      contactNo: data.prefixSelectorContactNo + "-" + data.contactNo,
      brandName: data.brandName,
      brandOwnerName: data.brandOwnerName,
      brandAddress: {
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
      },
      facebook: {
        facebookUrl: data.facebookUrl,
      },
      instagram: {
        instagram_url: data.instagramUrl,
      },
    };

    dispatch(doEditSupplierDetails(reqData, user.token, { setrefreshData }));
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
            >
              Update Profile
            </ButtonField>
          </div>
        </div>
        <div style={{ width: "49%" }} className="ps-4   pe-3">
          {rightFormFields.map(({ inputType: INPUT, ...rest }, idx) => (
            <div key={idx}>
              {idx === 4 && (
                <Divider orientation="center">Social Profiles</Divider>
              )}
              <INPUT  {...rest} width="100%" size={"large"} />
            </div>
          ))}
        </div>
      </Form>
    </section>
  );
}

export default SupplierDetails;

const prefixSelector = (
  <SelectField
    dataIndex={"data"}
    name={"prefixSelectorContactNo"}
    placeHolder={"+92"}
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
    label: "Bio",
    placeHolder: "Tell us about your self",
    name: "bio",
  },
  {
    inputType: TextAreaField,
    label: "Brand Address",
    placeHolder: "your brand address",
    name: "address",
  },
  {
    inputType: PhoneField,
    label: "Contact-no",
    placeHolder: "348xxxxxxx",
    name: "contactNo",
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
    label: "Brandname",
    placeHolder: "your BrandName",
    name: "brandName",
    type: "text",
    rules: [
      {
        required: true,
        message: "fill your Brandname..",
      },
    ],
  },
  {
    inputType: TextField,
    label: "Brand Owner Name",
    placeHolder: "your brand owner",
    name: "brandOwnerName",
    type: "text",
    rules: [
      {
        required: true,
        message: "fill your lastname..",
      },
    ],
  },
  {
    inputType: TextField,
    label: "City",
    placeHolder: "Islamabad",
    name: "city",
    type: "text",
    rules: [
      {
        required: true,
        message: "fill your lastname..",
      },
    ],
  },
  {
    inputType: TextField,
    label: "Postal Code",
    placeHolder: "46000",
    name: "postalCode",
  },
  {
    inputType: TextField,
    placeHolder: "http://yoursocialprofile.com",
    name: "instagramUrl",
    addOnBefore: <AiFillInstagram />,
  },
  {
    inputType: TextField,
    placeHolder: "http://yoursocialprofile.com",
    name: "facebookUrl",
    addOnBefore: <AiFillFacebook />,
  },
];
