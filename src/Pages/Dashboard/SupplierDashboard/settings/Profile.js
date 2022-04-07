import React from "react";
import { Tabs } from "antd";
import {  BsFillPersonFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import SupplierDetails from "./SupplierDetails";
import AccountDetails from "./AccountDetails";
const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

function Profile() {
  return (
    <Tabs defaultActiveKey="1" className="" onChange={callback}>
      <TabPane
       className=""
        tab={
          <div className=" d-flex align-items-center justify-content-start ">
            <BsFillPersonFill className="me-1" />
            Supplier Details
          </div>
        }
        key="1"
      >
        <SupplierDetails />
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
        <AccountDetails />
      </TabPane>
    </Tabs>

  );
}

export default Profile;
