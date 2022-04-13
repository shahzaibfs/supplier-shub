import React, { useCallback, useState } from "react";
import ProccedToCheckout from "./ProccedToCheckout";
import ShoppingCartTable from "./ShoppingCartTable";
import { useSelector } from "react-redux";
import PageHeader from "../../Components/PageHeader/PageHeader"

function Cart() {
  const [getProductsDetails, setgetProductsDetails] = useState(null);
  const products = useSelector((store) => store.cartReducer.products);

  const getProductsDetailsRef = useCallback(
    (productsDetails) => {
      setgetProductsDetails(productsDetails);
    },
    [setgetProductsDetails]
  );
  console.log(getProductsDetails)

  return (
    <>
     <PageHeader heading="Shopping Cart" classname={"my-3"} /> 
      {/* for two sec  */}
      <main className="row mx-0 ">
        <ShoppingCartTable
          products={products}
          setProductsDetailsRef={getProductsDetailsRef}
        />
        <ProccedToCheckout
          products={products}
          getProductsDetails={ getProductsDetails }
        />
      </main>
    </>
  );
}

export default Cart;
