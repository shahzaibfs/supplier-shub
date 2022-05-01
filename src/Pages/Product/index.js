import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductImageSection from "./ProductImageSection";
import ProductPriceDetailSection from "./ProductPriceDetailSection";
import Loader from "../../Components/Loader/Loader";
import { getProductByIdService } from "../../services/public-product-service";

const Product = () => {
  const [isFetching, setIsFetching] = useState(
    { state: "loading", message: "Loading the product please Wait " } || {
        state: "error",
        message: "Error : Error occour While Fetching data",
      } || { state: "ok", message: "ok" }
  );
  const [product, setProduct] = useState();
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(product);

  useEffect(() => {
    if (isFetching.state === "error") navigate("/");
  }, [isFetching.state,navigate]);

  useEffect(() => {
    dispatch(
      getProductByIdService({
        productId: id,
        hooks: {
          setProduct,
          setIsFetching,
        },
      })
    );
    // eslint-disable-next-line 
  }, [dispatch,setIsFetching,setProduct]);

  return (
    <>
      {isFetching.state === "loading" ? (
        <Loader />
      ) : (
        <>
          <p className="mt-3">
            {"products/" + (product.productCategory!==null ? product.productCategory.categoryName :"Others")}
          </p>
          <main>
            <ProductSection>
              <ProductImageSection product={product} />
              <ProductPriceDetailSection product={product} />
            </ProductSection>
            <ProductDetails product={product} />
          </main>
        </>
      )}
    </>
  );
};

export default Product;

const ProductSection = ({ children }) => {
  return (
    <section
      className="row flex-wrap justify-content-between mx-0"
      style={{ minHeight: "615px" }}
    >
      {children}
    </section>
  );
};
