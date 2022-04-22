import React from "react";
import { Table, Button, Popconfirm } from "antd";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import Loader from "../../../../Components/Loader/Loader";

const data = [
  ...[...Array(5)].map((_, idx) => ({
    key: idx,
    name: "Sunsilk",
    outOfStockDate: new Date().toLocaleDateString(),
    coverPhotoUrl:
      "https://m.media-amazon.com/images/I/51ks3MTOnfL._SX679_.jpg",
    category: "Shampoo",
  })),
];

function OutOfStockTable() {
  const cancel = () => {
    console.log("hurrah i am deleted ");
  };
  // Todo : table columns
  const columns = [
    {
      title: "Photo",
      key: "coverPhotoUrl",
      render: (text, data) => (
        <img
          className="border-primary-light"
          src={data.coverPhotoUrl}
          alt="productPhoto"
          width={"60px"}
          height="60px"
          style={{ objectFit: "contain", borderRadius: "6px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: (
        <p
          className="bg-danger m-0 text-white p-2 body-2 d-flex align-items-center"
          style={{ width: "max-content", borderRadius: "6px" }}
        >
          Out Of Stock Date
          <BsFillCalendar2DateFill className="ms-2" />
        </p>
      ),
      dataIndex: "outOfStockDate",
      key: "outOfStockDate",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, data) => (
        <>
          <Popconfirm
            icon={<AiOutlineQuestionCircle color="green" />}
            title="Sure it's availiable? "
            onConfirm={cancel}
          >
            <Button className="bg-success text-white d-flex align-items-center">
              {" "}
              In Stock?
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        loading={{ spinning: false, indicator: <Loader /> }}
        className="mt-3"
        columns={columns}
        dataSource={data}
      />
    </>
  );
}

export default OutOfStockTable;
