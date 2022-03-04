import React from "react";

import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductImageSection from "./ProductImageSection";
import ProductPriceDetailSection from "./ProductPriceDetailSection";
import { useGetProductHook } from "./useGetProdcutHook";

function Product() {
  let { id, productCategory } = useParams();
  const products = useSelector((store) => store.productReducer);
  const navigate = useNavigate();
  const product = useGetProductHook({ productId: id, products, navigate });

  console.log(product)
  return (
    <>
      {/* -----------bread crumbs ------------- */}
      <p className="mt-3">{"products/" + productCategory} </p>
    {
      product === undefined || product === null ? "loading ?....." :
      <main>
      <section
        className="row flex-wrap justify-content-between mx-0"
        style={{ minHeight: "615px" }}
      >
        <ProductImageSection product={product} />
        {/* section for actions and title and pay  */}
        <ProductPriceDetailSection product={product}/>
      </section>
      <ProductDetails product={product}/>
    </main>
    }
     
    </>
  );
}

export default Product;
