import React from "react";
import { Table, Button } from "antd";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Market Name",
    dataIndex: "marketName",
    key: "age",
  },
  {
    title: "Shipping Address Name",
    dataIndex: "shippingAddressName",
    key: "shippingAddressName",
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



const data = [

    ...[...Array(5)].map((_,idx)=>(
        {
            key: idx,
            name: "Shahzaib Alam",
            marketName: "alMaktaba",
            shippingAddressName: "maktaba",
            shippingAddress: "New York No. 1 Lake Park",
            city:"Islamabad",
            phNo: 3485604453 
          }
    ))

];

function ShippingInfoTable() {
  return <Table className="mt-3" columns={columns} dataSource={data} />;
}

export default ShippingInfoTable;
