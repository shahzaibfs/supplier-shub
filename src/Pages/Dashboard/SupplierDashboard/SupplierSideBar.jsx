import React, { useState } from "react";
import AddProduct from "./Inventory/AddProduct";
import ViewInventory from "./Inventory/ViewInventory";
import Profile from "./Profile";
import Settings from "./Settings";

const SupplierSideBar = ({ftnRef}) => {
  const [checkedValue, setcheckedValue] = useState({
    parent: 2,
    child: 1,
  });

  const handleCheckedValue=(parent)=>(child)=>(Comp)=>{
    setcheckedValue({parent:parent,
    child:child})
        ftnRef(Comp)
  }

  return (
    <section className="sidebar h-100 me-2 bg-primary-light w-25">
      <nav>
        <li className="list-unstyled">
          <p
            className="m-0 p-2"
            style={{ background: checkedValue.parent === 1 && "#6e716e"  ,color :checkedValue.parent === 1 && "white"}}
            onClick={() => handleCheckedValue(1)(null)(<Profile />)}          >
            Profile
          </p>
        
        </li>
        <li className="list-unstyled">
        <p
            className="m-0 p-2 m-0 p-2"
            style={{ background: checkedValue.parent === 2 && "#6e716e"  ,color :checkedValue.parent === 2 && "white"}}
            onClick={() => handleCheckedValue(2)(1)(<ViewInventory />)}          >
            Inventory
          </p>
       
          {checkedValue.parent === 2 && (
            <ul>
              <li
                className="list-unstyled ms-3 my-2 p-2"
                style={{ background: checkedValue.parent === 2 && checkedValue.child === 1 && "#6e716e"  ,color :checkedValue.parent  === 2 && checkedValue.child ===1 && "white"}}
                onClick={() => handleCheckedValue(2)(1)(<ViewInventory />)}              >
                View Inventory
              </li>
              <li
                className="list-unstyled ms-3 my-2 p-2"
                style={{ background: checkedValue.parent === 2 && checkedValue.child === 2 && "#6e716e"  ,color :checkedValue.parent  === 2 && checkedValue.child ===2 && "white"}}
                onClick={() => handleCheckedValue(2)(2)(<AddProduct />)}              >
                Add Product
              </li>
            </ul>
          )}
        </li>
        <li className="list-unstyled">
          <p
            className="m-0 m-0 p-2"
            style={{ background: checkedValue.parent === 3 && "#6e716e"  ,color :checkedValue.parent === 3 && "white"}}
            onClick={() => handleCheckedValue(3)(null)(null)}          >
            Profile
          </p>
        </li>
      </nav>
    </section>
  );
};

export default SupplierSideBar;
