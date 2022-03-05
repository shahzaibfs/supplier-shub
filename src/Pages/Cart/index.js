import React, { useState } from "react";
import ProccedToCheckout from "./ProccedToCheckout";
import ShoppingCartTable from "./ShoppingCartTable";
import { useSelector } from "react-redux";

function Cart() {
  const [getProductsDetails,setgetProductsDetails] = useState(null);
  const products = useSelector(store=>store.cartReducer.products)

  const getProductsDetailsRef =(productsDetails)=>{
    setgetProductsDetails(productsDetails);
  }
  
 
  return (
    <>
      <h1 className="heading-2 text-primary-light-700 text-weight-regular my-2 py-3">
        Shopping Cart
      </h1>
      {/* for two sec  */}
      <main className="row mx-0 ">
        <ShoppingCartTable products={products} setProductsDetailsRef={getProductsDetailsRef}/>
        <ProccedToCheckout products={products} getProductsDetails={getProductsDetails}/>
        
      </main>
    </>
  );
}

export default Cart;
