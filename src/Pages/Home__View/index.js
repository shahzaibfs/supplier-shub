import React from "react";
import { Outlet } from "react-router-dom";

import SmallFooter from "./SmallFooter";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import NavBAr from "./NavBAr";

import "./home-view.css";

function Home() {
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
        <MainHeader />
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
