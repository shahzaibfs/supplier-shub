import { Button } from 'antd'
import React from 'react'
import { MdAddBox } from 'react-icons/md'
import { Link } from 'react-router-dom'
import PageHeader from  "../../../../Components/PageHeader/PageHeader"
import SearchForm from  "../../../../Components/SearchContainer/SearchForm"
import AllProductsTable from './AllProductsTable'

function AllProducts() {
  return (
<>
    <PageHeader heading={"Products"} subtitle="Here you can see all of your products"/>
    <SearchForm  formFields={formFields} buttonInfo={buttonInfo} />
    <div className='d-flex  justify-content-end'>
      <Link to={"/dashboard/supplier/products/add-product"} >
        <Button
          type='primary'
          className='d-flex align-items-center justify-content-center'
          icon={<MdAddBox className='me-1'

          />}
          size='large'
        
        >Add New Product </Button></Link>
      </div>
      <AllProductsTable />
    </>
  )
}

export default AllProducts


const buttonInfo  = {
  type: "primary",
  text:"Search"
}


const formFields  = [
  {
    inputField : "TextField",
    label : "Name or Category",
    name:"productName",
  }
]