import React from 'react'
import CustomerDashboard from "./CustomerDashboard"
import SupplierDashboard from "./SupplierDashboard"
import { useSelector } from 'react-redux'

const Index = () => {
  const user = useSelector(store=>store.authReducer) 

  return (
    user.isLogin && user.userDetails.accountType === "SUPPLIER" ?
    <SupplierDashboard /> :<CustomerDashboard />
  )
}

export default Index