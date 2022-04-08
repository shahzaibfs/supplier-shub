import React, { useEffect } from "react";
import { Table, Button, Popconfirm, Typography } from "antd";

import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import Loader from "../../../../Components/Loader/Loader";
import { useDispatch } from "react-redux";
import { doGetSupplierAddressesFromDatabase } from "../../../../services/supplier-services/supplier-setting-address-service";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import { useGetSupplierAddresses } from "../../../../hooks/useGetSupplierAddresses";

const { Text } = Typography;

function SupplierAddressTable({ showModal,isLoader }) {
  const user = useGetAuthenticatedUser();
  const dispatch = useDispatch();
  const supplierAddresses = useGetSupplierAddresses();
  console.log("supplier addressesupdate : ", supplierAddresses)
  useEffect(() => {
    if (supplierAddresses.length <= 0) {
      dispatch(doGetSupplierAddressesFromDatabase(user.token));
    }
     // eslint-disable-next-line
  }, [supplierAddresses]);

  const data = [
    ...supplierAddresses.map((supplierAddress, idx) => ({
      key: idx,
      No: supplierAddress.supplierBrandAddressId,
      address: supplierAddress.address,
      postalCode: supplierAddress.postalCode,
      creationDate: supplierAddress.creationDate,
      city: supplierAddress.city,
      main: supplierAddress.main,
    })),
  ];

  const cancel = () => {
    console.log("hurrah i am deleted ");
  };

  // Todo : table columns
  const columns = [
    {
      title: "#No",
      dataIndex: "No",
      key: "No",
    },
    {
      title: "City",
      dataIndex: "city",
      render: (text, data) => {
        return (
          <div>
            <Text>{text}</Text>
          {data.main &&   <Text type="danger" className="ms-2">(Main)</Text>  }
          </div>
        );
      },
      key: "city",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Postal Code",
      dataIndex: "postalCode",
      key: "postalCode",
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, data) => (
        <>
          <Button
            className="bg-success text-white"
            icon={<AiFillEdit />}
            onClick={() => showModal(data, { key: "EDIT_ADDRESS" })}
          ></Button>

          <Popconfirm
            icon={<AiOutlineQuestionCircle color="red" />}
            title="Sure to Delete?"
            onConfirm={cancel}
          >
            <Button
            disabled={data.main && true}
              className="bg-danger text-white ms-1"
              icon={<AiFillDelete />}
            ></Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        className="mt-2"
        loading={{ spinning: isLoader, indicator: <Loader /> }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
}

export default SupplierAddressTable;
