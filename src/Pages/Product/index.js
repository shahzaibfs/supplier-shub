import React from "react";

import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductImageSection from "./ProductImageSection";
import ProductPriceDetailSection from "./ProductPriceDetailSection";
import { useGetProductHook } from '../../hooks/useGetProdcutHook'
import Loader from "../../Components/Loader/Loader";

function Product() {
  let { id, productCategory } = useParams();
  const products = useSelector((store) => store.productReducer);
  const navigate = useNavigate();
  const product = useGetProductHook({ productId: id, products, navigate });

  return (
    <>

      <p className="mt-3">{"products/" + productCategory} </p>
      {
        product === undefined || product === null ? <Loader /> :
          <main>
            <ProductSection >
              <ProductImageSection product={product} />
              <ProductPriceDetailSection product={product} />
            </ProductSection>
            <ProductDetails product={product} />
          </main>
      }

    </>
  );
}

export default Product;



const ProductSection = ({ product,children }) => {
 
  return (
    <section
      className="row flex-wrap justify-content-between mx-0"
      style={{ minHeight: "615px" }}
    >
      {children}
    </section>
  )
}