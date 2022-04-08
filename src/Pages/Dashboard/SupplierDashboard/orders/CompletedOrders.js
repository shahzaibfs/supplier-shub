import React from 'react'
import TextField from '../../../../Components/Inputs/TextField'
import PageHeader from "../../../../Components/PageHeader/PageHeader"
import SearchForm from "../../../../Components/SearchContainer/SearchForm"
import CompletedProductsTable from './CompletedOrderTable'

function CompletedOrders() {
  return (
    <>
      <PageHeader heading="Completed Orders" subtitle={"Here All the Completed Product Lies"} />
      <SearchForm buttonInfo={buttonInfo} formFields={formFields} />
      <CompletedProductsTable />
    </>
  )
}

export default CompletedOrders

const buttonInfo = {
  type: "primary",
  text: "Search"
}


const formFields = [
  {
    inputField: TextField,
    label: "Id or category",
    name: "productName",
    placeholder: "search any Order"
  }
]