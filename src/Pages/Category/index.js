import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import CategorySideBar from "./CategorySideBar";
import CategoryMain from "./CategoryMain";
import { useSelector } from "react-redux";

function Catalog() {
  const { productCategory } = useParams();
  const products = useSelector((store) => store.productReducer);

  const getCategoryProducts = () => {
    return products.filter(
      (product) =>
        product.category.categoryName === productCategory.split("-").join(" ")
    );
  };

  return (
    <>
      {/* first  bread cumbs -> comp */}
      <p className="my-2 text-primary text-weight-bold body-2 d-none d-md-block">
        Home <AiOutlineRight />{" "}
        <span className="text-muted text-weight-regular body-2">
          {productCategory}
        </span>
      </p>

      {/* then page header  */}
      <h1 className="text-weight-regular text-primary-light-700 heading-2 py-2">
        {productCategory}
      </h1>
      <main className="my-3 row mx-0 min-vh-100">
        {/* side bar   */}
        <CategorySideBar />
        {/* content */}
        <CategoryMain CategoryProducts={getCategoryProducts()} productCategory={productCategory} />
      </main>
    </>
  );
}

export default Catalog;
