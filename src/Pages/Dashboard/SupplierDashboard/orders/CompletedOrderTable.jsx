import {  Image, Table, Typography } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../../../Components/Loader/Loader";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import { getCompletedOrders } from "../../../../services/supplier-services/supplier-completed-orders";
const { Paragraph } = Typography;

const columns = [
  {
    title: "Product",
    dataIndex: "productCoverUrl",
    key: "product",
    render: (indexData, data) => {
      return <Image src={indexData} width={70} height={70} />;
    },
  },
  {
    title: "Order Id ",
    dataIndex: "ordersId",
    key: "ordersId",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (indexData, data) => {
      return <Paragraph mark>{indexData}</Paragraph>;
    },
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Date Of Creation",
    dataIndex: "dateOfCreation",
    key: "dateOfCreation",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Total Price",
    key: "totalPrice",
    render:(_,data)=>{
      return <Paragraph>Rs {data.quantity * 45000} </Paragraph>
    }
  },
 
];

const CompletedOrdersTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState({
    state: "ok",
    message: "",
  });
  const user = useGetAuthenticatedUser();
  const dispatch = useDispatch();

  useEffect(() => {
    setisLoading((old) => ({
      state: "loading",
      message: "",
    }));
    dispatch(
      getCompletedOrders({
        token: user.token,
        hooks: {
          setisLoading,
          setData,
        },
      })
    );
  }, [setData, setisLoading, dispatch,user.token]);

  const pendingOrders = data.map((eData)=>{
    return {
      orderId:eData.orderId,
      productCoverUrl:eData.product.productCoverUrl,
      status:eData.status,
      quantity:eData.quantity,
      dateOfCreation : eData.orders.dateOfCreation,
      customerName:eData.orders.customer.customerName,
      shippingAddress:eData.orders.shippingAddress,
      ordersId: eData.orderId,
    }
  })

  return (
    <Table
      className=""
      columns={columns}
      loading={{
        spinning: isLoading.state === "loading",
        indicator: <Loader />,
      }}
      expandable={{
        expandedRowRender: (record) => (
      <ShippingAddressInfo shippingAddress={record.shippingAddress} />
        ),
        rowExpandable: (record) => "shippingAddress" in record,
        expandRowByClick:true
      }}
      dataSource={pendingOrders}
      rowKey={(eachData)=>eachData.orderId}
    />
  );
};

export default CompletedOrdersTable;


const ShippingAddressInfo = ({shippingAddress})=>{
  return <section className="d-flex">
    <div className="mx-3 me-5">
      <Paragraph strong >ShopName</Paragraph>
      <Paragraph className="mb-0">{shippingAddress.shopName}</Paragraph>
    </div>
    <div className="mx-3 me-5">
      <Paragraph strong >Postal code </Paragraph>
      <Paragraph className="mb-0">{shippingAddress.postalCode}</Paragraph>
    </div>
    <div className="mx-3 me-5">
      <Paragraph strong >Shipping Address</Paragraph>
      <Paragraph className="mb-0">{shippingAddress.shippingAddress}</Paragraph>
    </div>
    <div className="mx-3 me-5">
      <Paragraph strong >Supervisor Ph#</Paragraph>
      <Paragraph className="mb-0">{shippingAddress.shopSupervisorPhNo}</Paragraph>
    </div>
    <div className="mx-3 me-5">
      <Paragraph strong >City</Paragraph>
      <Paragraph className="mb-0">{shippingAddress.city}</Paragraph>
    </div>
  </section>
}