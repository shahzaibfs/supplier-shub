import React, { useState } from "react";
import { Table, Button, Popconfirm, Modal } from "antd";

import {
  AiFillDelete,
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

function AllProductsTable() {
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
      title: "Product Photo",
      key: "coverPhotoUrl",
      render: (text, data) => (
        <img
        className="border-primary-light mx-2"
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
      title: "Minimum Order",
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
        <>
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
            <Button
              className="bg-danger text-white"
              icon={<AiFillDelete />}
            ></Button>
          </Popconfirm>
          <Modal
            title={<b>Edit Product Details</b>}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            i am edit product model
          </Modal>
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

export default AllProductsTable;
