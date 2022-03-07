import React, { useState } from "react";
import SupplierSideBar from "./SupplierSideBar";
import ViewInventory from "./Inventory/ViewInventory";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SupplierDashBoard = () => {
  const [Comp, setComp] = useState(null);
  const user = useSelector((store) => store.authReducer);
  const setCompRef = (Comp) => {
    setComp(Comp);
  };
  if (user.userDetails.accountType === "SUPPLIER") {
    return (
      <section
        className=" my-2 overflow-auto d-flex"
        style={{ width: "100%", height: "100vh" }}
      >
        <SupplierSideBar ftnRef={setCompRef} />
        <section className="main h-100 w-75 " style={{background:"transparent"}}>
          {Comp !== null ? Comp : <ViewInventory />}
        </section>
      </section>
    );
  } else {
    return <Navigate to="/dashboard/customer" />;
  }
};

export default SupplierDashBoard;
