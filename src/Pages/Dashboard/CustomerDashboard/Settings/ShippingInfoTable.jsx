import React from "react";
import { Table, Button } from "antd";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const columns = [
  {
    title: "Shop Supervisor",
    dataIndex: "name",
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
    render: (text) => (
      <>
        <Button
          className="bg-success text-white"
          icon={<AiFillEdit />}
        ></Button>
        <Button
          className="bg-danger text-white"
          icon={<AiFillDelete />}
        ></Button>
      </>
    ),
  },
];

const data = [...Array(5)].map((_, idx) => ({
  key: idx,
  name: "Shahzaib Alam",
  shopName: "alMaktaba",
  shippingAddressName: "maktaba",
  shippingAddress: "New York No. 1 Lake Park",
  city: "Islamabad",
  phNo: "92-3485604453",
  postalCode: 25000,
}));

function ShippingInfoTable() {
  return <Table className="mt-3" columns={columns} dataSource={data} />;
}

export default ShippingInfoTable;
