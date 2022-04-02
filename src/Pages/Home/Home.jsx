import React from "react";


import HomeBanner from "./HomeBanner";
import HomeGallery from "./HomeGallery";
import HomeHotSellers from "./HomeHotSellers";
import "./__home.css";

function Home() {


  
  return (
    <>
      {<HomeBanner />}

      <HomeGallery />
      

      <HomeHotSellers />
    </>
  );
}

export default Home;
