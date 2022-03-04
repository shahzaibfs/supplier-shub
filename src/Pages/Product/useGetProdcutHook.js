import  { useState, useEffect } from "react";

export function useGetProductHook({ productId, products, navigate }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let getProduct = products.filter(
      (product) => product.productId === productId * 1
    );

    if (getProduct.length) {
      setProduct(old=>getProduct[0]);
    } else {
      navigate("/", { replace: true });
    }
  }, [productId,products]);

  return product;
}
