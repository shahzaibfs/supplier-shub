import React from 'react'
import TextField from '../../../../Components/Inputs/TextField'

import PageHeader from '../../../../Components/PageHeader/PageHeader'
import SearchForm from '../../../../Components/SearchContainer/SearchForm'
import OutOfStockTable from './OutOfStockTable'

function OutOfStock() {
  return (
    <>
      <PageHeader heading={"Out Of Stock"} subtitle="Viw all Out of stock Products " />
      <SearchForm formFields={formFields} buttonInfo={buttonInfo} />
      <OutOfStockTable />
    </>

  )
}

export default OutOfStock



const buttonInfo = {
  type: "primary",
  text: "Search"
}


const formFields = [
  {
    inputField: TextField,
    label: "Name or Category",
    name: "productName",
    placeholder: "search in OutofStock table"
  }
]