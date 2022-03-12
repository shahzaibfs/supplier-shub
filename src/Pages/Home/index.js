import React, { useEffect } from "react";


import { useSelector ,useDispatch } from "react-redux";

import "./__home.css";
import { Outlet } from "react-router-dom";
import HomeOverLay from "./HomeOverLay";
import SmallHeader from "./SmallHeader";
import MainHeader from "./MainHeader";
import NavBAr from "./NavBAr";
import MainFooter from "./MainFooter";
import SmallFooter from "./SmallFooter";
import {productMiddleWare} from '../../Application/store/middleWares/ProductMiddleWare/productMiddleWare'


function Home() {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productMiddleWare())
  },[dispatch])
  
  

  return (
    <section
      className="w-100 h-100  position-relative"
      style={{ minHeight: "100vh", height: "max-content" }}
    >
      <HomeOverLay />
      <section className=" mx-auto " style={{ zIndex: 1 }}>
        <SmallHeader isLogin={state.authReducer.isLogin}/>
        <MainHeader  authReducer={state.authReducer}/>
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
