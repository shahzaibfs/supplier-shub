import React from "react";
import moment from 'moment';

import TextField from "../../../../Components/Inputs/TextField";

import PageHeader from "../../../../Components/PageHeader/PageHeader";
import SearchForm from "../../../../Components/SearchContainer/SearchForm";
import OutOfStockTable from "./OutOfStockTable";

function OutOfStock() {

  console.log(moment().format('YYYY-MM-DDTHH:mm:ss.SSS'))
  return (
    <>
      <PageHeader
        heading={"Out Of Stock"}
        subtitle="Viw all Out of stock Products "
        classname={"mb-3"}
      />
      <SearchForm classname={"my-3"} formFields={formFields} buttonInfo={buttonInfo} />
      <OutOfStockTable />
    </>
  );
}

export default OutOfStock;

const buttonInfo = {
  type: "primary",
  text: "Search",
};

const formFields = [
  {
    inputType: TextField,
    label: "Name or Category",
    name: "productName",
    placeholder: "search in OutofStock table",
  },
];






/*
 * -> Out-of-stock 
 *    date    |    productId  
 *    
 * -> product -> table -> update -> out-of-stock 
 * 
 * 
 * 
 * 
 * 
 * 
 */
