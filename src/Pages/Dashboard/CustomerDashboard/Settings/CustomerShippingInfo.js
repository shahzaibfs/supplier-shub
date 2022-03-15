
import { Button } from 'antd'
import React from 'react'
import { AiFillFileAdd } from 'react-icons/ai'

import PageHeader from '../../../../Components/PageHeader/PageHeader'
import SearchForm from '../../../../Components/SearchContainer/SearchForm'
import ShippingInfoTable from './ShippingInfoTable'


function CustomerShippingInfo() {


  const onHandleSearchChange = (e) => {
    console.log(e)
  }

  const searchFormFields = [
    {
      inputField: "TextField",
      type: "text",
      label: "Shipping Address Name",
      placeHolder: "Name for shipping address",
      onHandlechange: onHandleSearchChange,
      name: "shippingAddressName"
    },
    {
      inputField: "TextFieldField",
      type: "TextAreaField",
      label: "Shipping Address",
      placeHolder: "shipping address",
      onHandlechange: onHandleSearchChange,
      name: "shippingAddress"
    }
  ]

  const buttonInfo = {
    type: "primary",
    onHandleClick: onHandleSearchChange,
    text: "Search"
  }


  return (
    <section className=' p-3'>
      <PageHeader heading={"Shipping Info"} subtitle="here you can add and Edit your shipping addresses" />

      <SearchForm formFields={searchFormFields} buttonInfo={buttonInfo} />
      <div className='mt-2 mb-2 d-flex justify-content-end'>
        <Button size="large" type='primary' className='d-flex align-items-center' icon={<AiFillFileAdd className='me-1' />}>Add New Address</Button>
      </div>
      <ShippingInfoTable />

    </section>
  )
}

export default CustomerShippingInfo