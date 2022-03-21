import React from "react";
import { Tabs, Button, Divider } from "antd";
import { BsFillPatchCheckFill, BsFillPersonFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { FaEdit } from "react-icons/fa"
import TextField from "../../../../Components/Inputs/TextField";
import TextAreaField from "../../../../Components/Inputs/TextAreaField"
import PasswordField from "../../../../Components/Inputs/PasswordField";
const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

function Profile() {
  return (



    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane
        tab={
          <div className="d-flex align-items-center ">
            <BsFillPersonFill className="me-1" />
            Supplier Details
          </div>
        }
        key="1"
      >
        <section className="  p-3 d-flex flex-wrap justify-content-evenly" >
          <div className="profile-picture-section   mt-2 mb-2" style={{ width: "150px" }}>
            <div
              style={{ width: "150px", height: "150px", overflow: "hidden" }}
              className="bg-primary rounded-circle "
            >
              <img src="" alt="" width={"100%"} height="100%" />

            </div>
            <Button type="primary" icon={<FaEdit className="me-1" />} className="w-100 mt-2 justify-content-center d-flex align-items-center" size={'large'} >Edit Profile </Button>
          </div>
          <form className=" form section d-flex flex-wrap  w-75 justify-content-evenly">
            <div className="border-right-primary me-1 d-flex justify-content-between align-content-start flex-wrap pe-4" style={{ width: "49%" }}>
              <TextField label="First Name" width={"48%"} type="text" />
              <TextField label="Last Name" width={"48%"} type="text" />
              <TextAreaField label="Bio" width={"100%"} />
              <TextAreaField label="Brand Address" width={"100%"} />
              <TextField label="Contact-No" width={"100%"} type="number" />

              <Button className="mt-2 mb-2 w-100" type="primary" icon={<BsFillPatchCheckFill className="me-2" />} size={"large"}>
                Update Profile
              </Button>
            </div>
            <div style={{ width: "49%" }} className="d-flex ps-4   justify-content-between align-content-start flex-wrap pe-3">
              <TextField label="Brand Name" width={"100%"} type="text" />
              <TextField label="Brand Owner Name" width={"100%"} type="text" />

              <Divider />
              <h1 className="body-2 text-primary">
                Social Profiles
              </h1>
              <TextField placeHolder={"https://something.com"} addOnBefore={<AiFillInstagram />} width={"100%"} type="text" />
              <TextField placeHolder={"https://something.com"} addOnBefore={<AiFillFacebook />} width={"100%"} type="text" />

            </div>
          </form>
        </section>



      </TabPane>
      <TabPane
        tab={
          <div className="d-flex align-items-center ">
            <RiAccountCircleFill className="me-1" />
            Account Details
          </div>
        }
        key="2"
      >
        <div className="h-100 w-100  p-3">
          <div>
            <h1 className="heading-2 text-primary mb-1">Account Info</h1>
            <p className="body-2 text-muted" >Here you can change your Username and Password </p>
          </div>
          <form className="w-50" autoComplete="off">
            <TextField label="Username" placeHolder={"someone@gmail.com"} type="email" width={"100%"} />

            <TextField label="Email" placeHolder={"someone@gmail.com"} type="email" width={"100%"} />
            <PasswordField label="New Password" placeHolder={"********"} width={"100%"} />
            <PasswordField label="Confirm Password" placeHolder={"********"} width={"100%"} />

            <Button className="mt-2 mb-2 w-100" type="primary" icon={<BsFillPatchCheckFill className="me-2" />} size={"large"}>
              Update Account Details
            </Button>
          </form>
        </div>
      </TabPane>
    </Tabs>

  );
}

export default Profile;
