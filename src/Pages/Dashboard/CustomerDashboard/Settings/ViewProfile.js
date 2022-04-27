import React from "react";
import { Tabs } from "antd";
import {  BsFillPersonFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

import CustomerDetails from "./CustomerDetails";
import CustomerAccountDetails from "./CustomerAccountDetails";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function ViewProfile() {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane
        tab={
          <div className="d-flex align-items-center ">
            <BsFillPersonFill className="me-1" />
            Customer Details
          </div>
        }
        key="1"
      >
      <CustomerDetails />
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
       <CustomerAccountDetails />
      </TabPane>
    </Tabs>
  );
}

export default ViewProfile;
