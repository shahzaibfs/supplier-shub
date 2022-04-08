import React from 'react'
import TextField from '../../../../Components/Inputs/TextField'
import PageHeader from '../../../../Components/PageHeader/PageHeader'
import SearchForm from '../../../../Components/SearchContainer/SearchForm'
import TrackOrdersTable from './TrackOrdersTable'

function TrackOrders() {
  return (
    <>
    <PageHeader heading="Track Orders" subtitle={"Track And Update Orders As soon as Delivery is Completed"} />
    <SearchForm buttonInfo={buttonInfo} formFields={formFields} />
    <TrackOrdersTable />
  </>
  )
}

export default TrackOrders


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