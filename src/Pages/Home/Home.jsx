import React from "react";

import HomeBanner from "./HomeBanner";
import HomeHotSellers, { SectionHeader } from "./HomeHotSellers";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
import "./__home.css";
import Slider from "../../Components/slider/Slider";
import productCategoryMockData from "../../services/productCategoryMockData.json";
import CategoryCards from "./CategoryCards";
import CompanyCard from "./CompanyCard";
import PageHeader from "../../Components/PageHeader/PageHeader";

function Home() {
  const user = useGetAuthenticatedUser();

  return (
    <>
      {getHomeBanner(user)}
      <div style={styles.parent} className="p-3 negative-marginTop-50">
        <PageHeader heading="Categories" />
        <CategoryCards mt={3} mb={0} />
      </div>
      <>
        <SectionHeader
          title={"Top Rated Companies"}
          subtitle="some lorem ipsum should tdo the trick"
        />
        <Slider key={1}>
          {productCategoryMockData.map((category) => (
            <CompanyCard
              companyLogo={category.coverPhoto}
              photo={
                "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }
              title={category.categoryName}
              subtitle="something good"
            />
          ))}
        </Slider>
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

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
  sliderParent: {
    borderRadius: "7px",
    zIndex: 10,
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": { display: "none" },
  },
  sliderButton: { height: "100px" },
  sliderCard: { overflowX: "auto", scrollBehavior: "smooth" },
  sliderCardImg: { width: "200px", height: "200px", objectFit: "cover" },
};
