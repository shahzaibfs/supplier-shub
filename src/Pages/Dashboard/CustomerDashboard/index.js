import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Index from "../SupplierDashboard/SupplierSideBar"

const CustomerDashboard = () => {
  const user = useSelector(store=>store.authReducer) 
  console.log(user)
  if(user.userDetails.accountType === "CUSTOMER"){
    return (
      <div style={{height:"100vh"}}>

        <Index />

      </div>
    )
  }else{
    return <Navigate to="/dashboard/supplier" />
  }
  
}

export default CustomerDashboard