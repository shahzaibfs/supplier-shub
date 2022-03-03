import React from "react";


import { useSelector } from "react-redux";

import "./__home.css";
import { Outlet } from "react-router-dom";
import HomeOverLay from "./HomeOverLay";
import SmallHeader from "./SmallHeader";
import MainHeader from "./MainHeader";
import NavBAr from "./NavBAr";
import MainFooter from "./MainFooter";
import SmallFooter from "./SmallFooter";

function Home() {
  const state = useSelector((store) => store);
  

  return (
    <section
      className="w-100 h-100  position-relative"
      style={{ minHeight: "100vh", height: "max-content" }}
    >
      <HomeOverLay />
      <section className=" mx-auto " style={{ zIndex: 1 }}>
        <SmallHeader isLogin={state.authReducer.isLogin}/>
        <MainHeader />
        <NavBAr />
        <section className="container-xxl" style={{ minHeight: "85vh" }}>
          <Outlet />
        </section>
        <MainFooter />
        <SmallFooter />
      </section>
    </section>
  );
}

export default Home;
