import React, {  useState } from "react";
import ProccedToCheckout from "./ProccedToCheckout";
import ShoppingCartTable from "./ShoppingCartTable";
import PageHeader from "../../Components/PageHeader/PageHeader";

function Cart() {
  const [cartProducts,setCartProducts] =useState(JSON.parse(localStorage.getItem("cart-products")));

 console.log(cartProducts)
  return (
    <>
      <PageHeader heading="Shopping Cart" classname={"my-3"} />
      {/* for two sec  */}
      <main className="row mx-0 ">
        <ShoppingCartTable  cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        <ProccedToCheckout  cartProducts={cartProducts} />
      </main>
    </>
  );
}

export default Cart;
