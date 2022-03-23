import { Button, Divider } from "antd";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import TextAreaField from "../../../../Components/Inputs/TextAreaField";
import TextField from "../../../../Components/Inputs/TextField";

function SupplierDetails() {
  return (
    //   TODO : profile picture section && form section
    <section className="  p-3 d-flex flex-wrap justify-content-evenly">
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
        <Button
          type="primary"
          icon={<FaEdit className="me-1" />}
          className="w-100 mt-2 justify-content-center d-flex align-items-center"
          size={"large"}
        >
          Edit Profile{" "}
        </Button>
      </div>
      <form className=" form section d-flex flex-wrap  w-75 justify-content-evenly">
        <div
          className="border-right-primary-light me-1 d-flex justify-content-between align-content-start flex-wrap pe-4"
          style={{ width: "49%" }}
        >
          <TextField label="First Name" width={"45%"} type="text" />
          <TextField label="Last Name" width={"45%"} type="text" />
          <TextAreaField label="Bio" width={"100%"} />
          <TextAreaField label="Brand Address" width={"100%"} />
          <TextField label="Contact-No" width={"100%"} type="number" />

          <Button
            className="m-2 w-100"
            type="primary"
            icon={<BsFillPatchCheckFill className="me-2" />}
            size={"large"}
          >
            Update Profile
          </Button>
        </div>
        <div
          style={{ width: "49%" }}
          className="d-flex ps-4   justify-content-between align-content-start flex-wrap pe-3"
        >
          <TextField label="Brand Name" width={"100%"} type="text" />
          <TextField label="Brand Owner Name" width={"100%"} type="text" />
          <TextField label="City" width={"100%"} type="text" />
          <TextField label="Postal Code " width={"100%"} type="number" />

          <Divider />
          <h1 className="body-2 text-primary">Social Profiles</h1>
          <TextField
            placeHolder={"https://something.com"}
            addOnBefore={<AiFillInstagram />}
            width={"100%"}
            type="text"
          />
          <TextField
            placeHolder={"https://something.com"}
            addOnBefore={<AiFillFacebook />}
            width={"100%"}
            type="text"
          />
        </div>
      </form>
    </section>
  );
}

export default SupplierDetails;
