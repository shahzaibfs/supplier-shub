import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { MdAddBox } from "react-icons/md";

import TextField from "../../../../Components/Inputs/TextField";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import SearchForm from "../../../../Components/SearchContainer/SearchForm";
import AllProductsTable from "./AllProductsTable";

function AllProducts() {
  return (
    <>
      <PageHeader
        heading={"Products"}
        subtitle="Here you can see all of your products"
      />
      <SearchForm formFields={formFields} buttonInfo={buttonInfo} />
      <div className="d-flex  justify-content-end">
        <Link to={"/dashboard/supplier/products/add-product"}>
          <Button
            type="primary"
            className="d-flex align-items-center justify-content-center"
            icon={<MdAddBox className="me-1" />}
            size="large"
          >
            Add New Product{" "}
          </Button>
        </Link>
      </div>
      <AllProductsTable />
    </>
  );
}

export default AllProducts;

const buttonInfo = {
  type: "success",
  text: "Search",
};

const formFields = [
  {
    inputType: TextField,
    label: "Name or Category",
    name: "productName",
  },
];
