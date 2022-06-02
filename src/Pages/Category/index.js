import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import CategorySideBar from "./CategorySideBar";
import CategoryMain from "./CategoryMain";
import PageHeader from "../../Components/PageHeader/PageHeader";

function Catalog() {
  const { productCategory } = useParams();

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
      <PageHeader classname={"my-3"} heading={productCategory} />
      <main className="my-3 row mx-0 min-vh-100">
        {/* side bar   */}
        <CategorySideBar />
        {/* content */}
        <CategoryMain CategoryProducts={{}} productCategory={productCategory} />
      </main>
    </>
  );
}

export default Catalog;
