import React from "react";


import HomeBanner from "./HomeBanner";
import HomeGallery from "./HomeGallery";
import HomeHotSellers from "./HomeHotSellers";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser"
import "./__home.css";

function Home() {

  const user = useGetAuthenticatedUser();

  return (
    <>
      {getHomeBanner(user)}

      <HomeGallery />

      <HomeHotSellers />
    </>
  );
}

export default Home;


const getHomeBanner = (user) => {
  return user.isLogin && user.userDetails.accountType === "SUPPLIER" ?
    <HomeBanner
      title="Hey! Wanna Add or Update the Products?"
      btn={{ link: "/dashboard/supplier", text: "Go to Dashboard" }}
    />
    : <HomeBanner />
}
