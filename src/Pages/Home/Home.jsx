import React from "react";
import { useSelector } from "react-redux";

import HomeBanner from "./HomeBanner";
import HomeGallery from "./HomeGallery";
import HomeHotSellers from "./HomeHotSellers";

function Home() {

  const authReducer = useSelector((store) => store.authReducer);
  
  return (
    <>
      {!authReducer.isLogin && <HomeBanner />}

      <HomeGallery />

      <HomeHotSellers />
    </>
  );
}

export default Home;
