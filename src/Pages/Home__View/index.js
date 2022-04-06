import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import SmallFooter from "./SmallFooter";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import NavBAr from "./NavBAr";

import { productMiddleWare } from "../../services/productMiddleWare";

function Home() {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productMiddleWare());
  }, [dispatch]);

  return (
    <section
      className="w-100 h-100  position-relative"
      style={{
        minHeight: "100vh",
        height: "max-content",
        background:
          "linear-gradient(rgb(236, 244, 247) 18%, rgb(222, 230, 233) 34%, rgb(228 226 226 / 75%) 44%)",
      }}
    >
      <section className=" mx-auto " style={{ zIndex: 1 }}>
        <MainHeader authReducer={state.authReducer} />
        <NavBAr />
        <section
          className="container-xxl position-relative"
          style={{ minHeight: "85vh" }}
        >
          <Outlet />
        </section>
        <MainFooter />
        <SmallFooter />
      </section>
    </section>
  );
}

export default Home;
