import React from 'react'
import PageHeader from "../../../../Components/PageHeader/PageHeader"
import NewProductForm from './NewProductForm'

function AddProduct() {
  return (
    <>
    <PageHeader heading={"New Product"} subtitle={"Here You can Add new Products According to your needs"}/>
    <NewProductForm />
    </>
  )
}

export default AddProduct