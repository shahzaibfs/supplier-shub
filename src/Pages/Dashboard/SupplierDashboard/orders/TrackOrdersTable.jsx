import React, { useState } from "react";
import { Table, Button, Popconfirm, Modal } from "antd";

import {
  
  AiFillEdit,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import Loader from "../../../../Components/Loader/Loader";

const data = [
  ...[...Array(5)].map((_, idx) => ({
    key: idx,
    name: "Sunsilk",
    price: "Rs " + 4500,
    weight: "cotton",
    size: 12,
    minOrder: <p className="ms-3 mt-3">10</p>,
    coverPhotoUrl:
      "https://m.media-amazon.com/images/I/51ks3MTOnfL._SX679_.jpg",
      category :"Shampoo"
  })),
];

function TrackOrdersTable() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          style={{ objectFit: "contain" ,borderRadius:"6px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "min-Order",
      dataIndex: "minOrder",
      key: "minOrder",
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
        <div className="d-flex justify-content-center">
          <Button
            className="bg-success text-white"
            icon={<AiFillEdit />}
            onClick={showModal}
          ></Button>

          <Popconfirm
            icon={<AiOutlineQuestionCircle color="red" />}
            title="Sure to Delete?"
            onConfirm={cancel}
          >
            
          </Popconfirm>
          <Modal
            title={<b>Edit Product Details</b>}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            i am edit product model
          </Modal>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table

        loading={{ spinning: false, indicator: <Loader /> }}
        className="mt-3 mx-auto"
        columns={columns}
        dataSource={data}
      />
    </>
  );
}

export default TrackOrdersTable;
