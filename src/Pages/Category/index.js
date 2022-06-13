import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import CategorySideBar from "./CategorySideBar";
import CategoryMain from "./CategoryMain";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useDispatch } from "react-redux";
import { getCategoryByIdService } from "../../services/category-service";
import Loader from "../../Components/Loader/Loader";

function Catalog() {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState({ state: "loading", message: "" });

  const { productCategory, categId } = useParams();
  const dispatch = useDispatch();

  console.log(productCategory);

  useEffect(() => {
    dispatch(
      getCategoryByIdService({
        categoryId: categId,
        hooks: { setData, setisLoading },
      })
    );
  }, [dispatch, categId, setData, setisLoading]);

  return isLoading.state === "loading" ? (
    <Loader />
  ) : isLoading.state === "error" ? (
    <PageHeader classname={"my-3"} heading={isLoading.message} />
  ) : (
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
        <CategoryMain
        data={data}
          CategoryProducts={data.content}
          productCategory={productCategory}
        />
      </main>
    </>
  );
}

export default Catalog;
