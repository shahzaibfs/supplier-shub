import React from "react";

import HomeBanner from "./HomeBanner";
import HomeHotSellers, { SectionHeader } from "./HomeHotSellers";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
import "./__home.css";
import Slider from "../../Components/slider/Slider";
import productCategoryMockData from "../../services/productCategoryMockData.json"
import CategoryCards from "./CategoryCards";

function Home() {
  const user = useGetAuthenticatedUser();

  return (
    <>
      {getHomeBanner(user)}

      <CategoryCards />

      <Slider key={1} data={productCategoryMockData} />

      <>
      <SectionHeader
        title={"Our Top Company Suppliers"}
        subtitle={"lorem ipsum should do the trick "}
      />
      <Slider key={2} data={productCategoryMockData} />
      </>

      <HomeHotSellers />
    </>
  );
}

export default Home;

const getHomeBanner = (user) => {
  return user.isLogin && user.userDetails.accountType === "SUPPLIER" ? (
    <HomeBanner
      title="Hey! Wanna Add or Update the Products?"
      btn={{ link: "/dashboard/supplier", text: "Go to Dashboard" }}
    />
  ) : (
    <HomeBanner />
  );
};
