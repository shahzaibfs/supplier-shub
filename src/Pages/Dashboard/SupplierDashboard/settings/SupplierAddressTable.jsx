import React from "react";
import { Table, Button } from "antd";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";




const data = [

    ...[...Array(5)].map((_,idx)=>(
        {
            key: idx,
            name: "Shahzaib Alam",
            address: "alMaktaba",
            postalCode: 45000,
            city:"Islamabad",
          }
    ))

];

function SupplierAddressTable({showModal}) {

    // Todo : table columns
    const columns = [
        {
          title: "Address Name",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "City",
          dataIndex: "city",
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
          title: "Actions",
          key: "actions",
          render: (text,data) => (
            <>
              <Button
                className="bg-success text-white"
                icon={<AiFillEdit />}
                onClick={()=>showModal(data,{key:"EDIT_ADDRESS"})}
              ></Button>
              <Button
                className="bg-danger text-white"
                icon={<AiFillDelete />}
              ></Button>
            </>
          ),
        },
      ];
      

   
  

  return <>
  <Table className="mt-3" columns={columns} dataSource={data} />
  </>
}

export default SupplierAddressTable;
