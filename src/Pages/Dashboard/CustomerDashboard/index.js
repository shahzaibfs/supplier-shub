import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import ViewInventory from '../SupplierDashboard/Inventory/ViewInventory'
import Index from "../SupplierDashboard/SupplierSideBar"

const CustomerDashboard = () => {
  const user = useSelector(store=>store.authReducer) 
  const [Comp, setComp] = useState(null);
  const setCompRef = (Comp) => {
    setComp(Comp);
  };
  console.log(Comp)
  if(user.userDetails.accountType === "CUSTOMER"){
    return (
      <div className='d-flex w-100' style={{height:"100vh", marginTop:"10px"}}>

        <Index ftnRef={setCompRef}/>
        <section className="main h-100 w-75 " style={{background:"transparent"}}>
          {Comp !== null ? Comp : <ViewInventory />}
        </section>

      </div>
    )
  }else{
    return <Navigate to="/dashboard/supplier" />
  }
  
}

export default CustomerDashboard