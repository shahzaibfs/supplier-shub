import React, {  useState } from "react";
import ProccedToCheckout from "./ProccedToCheckout";
import ShoppingCartTable from "./ShoppingCartTable";
import { useSelector } from "react-redux";
import PageHeader from "../../Components/PageHeader/PageHeader";

function Cart() {
  const [quantities, setQuantities] = useState([]);
  const cartProducts = useSelector((store) => store.cartReducer);

 
  console.log("------> Quantities :" , quantities);
  return (
    <>
      <PageHeader heading="Shopping Cart" classname={"my-3"} />
      {/* for two sec  */}
      <main className="row mx-0 ">
        <ShoppingCartTable products={cartProducts} setQuantities={setQuantities} />
        <ProccedToCheckout quantities={quantities} products={cartProducts} />
      </main>
    </>
  );
}

export default Cart;
