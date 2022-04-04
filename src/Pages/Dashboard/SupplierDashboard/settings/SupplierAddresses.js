
import { Button } from 'antd'
import React, { useState } from 'react'
import PageHeader from "../../../../Components/PageHeader/PageHeader"
import SearchForm from '../../../../Components/SearchContainer/SearchForm'
import SupplierAddressTable from './SupplierAddressTable'
import { MdAddBox } from "react-icons/md"

import { Modal } from 'antd';
import TextField from '../../../../Components/Inputs/TextField'
import TextAreaField from '../../../../Components/Inputs/TextAreaField'




const addressInterface = {
  name: "",
  postalCode: 0,
  city: "",
  address: ""
}


function SupplierAddresses() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setaddress] = useState(addressInterface);
 const [modalTitle,setmodalTitle] = useState("");
 
  //TODO : modal ftns 

  const showModal = (addressData,{key}) => {
 
    if(key === "NEW_ADDRESS"){
      setmodalTitle("New Address")
    }else{
      setmodalTitle("Edit Address")
    }

    setaddress(addressData);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setaddress(addressInterface);
    setIsModalVisible(false);
   
  };

  const handleCancel = () => {
    setaddress(addressInterface);
    setIsModalVisible(false);
   

  };

  //TODO : search field ftns

  const onHandleSearchChange = (e) => {
    console.log(e)
  }

  const searchFormFields = [
    {
      inputField: "TextField",
      type: "text",
      label: "City",
      placeHolder: "City",
      onHandlechange: onHandleSearchChange,
      name: "cityName"
    }
  ]

  const buttonInfo = {
    type: "primary",
    onHandleClick: onHandleSearchChange,
    text: "Search"
  }

  //TODO : New Address
  const handleaddressModalDataChange = (e) => {
    setaddress(old => ({
      ...old,
      [e.target.name]: e.target.value
    }))
  }



  return (
    <>
      <PageHeader heading={"Addresses"} subtitle="Here you can browse ,edit and add addresesas per your need" />
      <SearchForm formFields={searchFormFields} buttonInfo={buttonInfo} />
      <div style={{width:"90%"}} className="mx-auto" >
        <Button
          type='primary'
          className='d-flex align-items-center justify-content-center ms-auto'
          icon={<MdAddBox className='me-1'
          />}
          size='large'
          onClick={()=>showModal(addressInterface,{key:"NEW_ADDRESS"})}
        >Add Address</Button>
     
      <SupplierAddressTable showModal= {showModal} /> </div>

      <Modal title={<b>{modalTitle}</b>} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {
          newAddressModalData.map((field, index) => (

            <field.inputField key={index} name={field.name} value={address[field.name]} label={field.label} type={field.type} placeHolder={field.placeHolder} onChange={handleaddressModalDataChange} />
          ))
        }
      </Modal>
    </>
  )
}

export default SupplierAddresses




const newAddressModalData = [
  {
    inputField: TextField,
    type: "text",
    label: "Address Name",
    placeHolder: "name",
    name: "name"
  },
  {
    inputField: TextField,
    type: "text",
    label: "City",
    placeHolder: "City",
    name: "city"
  },
  {
    inputField: TextAreaField,
    type: "text",
    label: "Address",
    placeHolder: "Address",
    name: "address"
  },
  {
    inputField: TextField,
    type: "number",
    label: "Postal Code",
    placeHolder: "46000",
    name: "postalCode"
  },


]