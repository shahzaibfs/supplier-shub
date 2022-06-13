import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { MdAddBox } from "react-icons/md";

import TextField from "../../../../Components/Inputs/TextField";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import SearchForm from "../../../../Components/SearchContainer/SearchForm";
import AllProductsTable from "./AllProductsTable";
import { useDispatch } from "react-redux";
import { getSearchSupplierProductsService } from "../../../../services/supplier-services/supplier-product-service";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";

function AllProducts() {
  const dispatch = useDispatch();
  const user = useGetAuthenticatedUser();

  const onHandleSearchChange = (e) => {
    console.log(e);
    dispatch(
      getSearchSupplierProductsService({
        token: user.token,
        searchQuery: { query: e.query },
      })
    );
  };
  return (
    <>
      <PageHeader
        heading={"Products"}
        subtitle="Here you can see all of your products"
      />
      <SearchForm
        handleSubmit={onHandleSearchChange}
        formFields={formFields}
        buttonInfo={buttonInfo}
        on
      />
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
    name: "query",
  },
];
