import React, { useState } from 'react'
import SupplierSideBar from './SupplierSideBar'
import ViewInventory from './Inventory/ViewInventory'

const SupplierDashBoard = () => {
  const [Comp,setComp] = useState(null)

  const setCompRef = (Comp)=>{
    setComp(Comp)
  }
  return (
    <section className='bg-primary my-2 overflow-auto d-flex'style={{width:"100%",height:"100vh"}}>
     <SupplierSideBar ftnRef={setCompRef} />
      <section className='main h-100 '>
      {Comp !== null ? Comp: <ViewInventory />}
      </section>
    </section>
  )
}

export default SupplierDashBoard