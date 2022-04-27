
import { Button } from 'antd'
import React from 'react'
import { AiFillFileAdd } from 'react-icons/ai'

import PageHeader from '../../../../Components/PageHeader/PageHeader'
import SearchForm from '../../../../Components/SearchContainer/SearchForm'
import ShippingInfoTable from './ShippingInfoTable'
import TextField from  "../../../../Components/Inputs/TextField"
import TextAreaField from  "../../../../Components/Inputs/TextAreaField"


function CustomerShippingInfo() {


  const handleSearchSubmit = (Data) => {
    console.log(Data)
  }

  const searchFormFields = [
    {
      inputType: TextField,
      label: "Shipping Address Name",
      placeHolder: "Name for shipping address",
      
      name: "shippingAddressName"
    },
    {
      inputType: TextAreaField,
      label: "Shipping Address",
      placeHolder: "shipping address",
     classname : "mb-4",
      name: "shippingAddress"
    }
  ]

  const buttonInfo = {
    type: "primary",
    text: "Search",
    classname :"pt-2"
  }


  return (
    <section className=' p-3'>
      <PageHeader heading={"Shipping Info"} subtitle="here you can add and Edit your shipping addresses" />

      <SearchForm classname={"my-3"} handleSubmit={handleSearchSubmit} formFields={searchFormFields} buttonInfo={buttonInfo} />
      <div className='mt-2 mb-2 d-flex justify-content-end'>
        <Button size="large" type='primary' className='d-flex align-items-center' icon={<AiFillFileAdd className='me-1' />}>Add New Address</Button>
      </div>
      <ShippingInfoTable />

    </section>
  )
}

export default CustomerShippingInfo