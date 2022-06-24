import React, { useState } from "react";

import HomeBanner from "./HomeBanner";
import HomeHotSellers, { SectionHeader } from "./HomeHotSellers";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
import "./__home.css";
import Slider from "../../Components/slider/Slider";
import CategoryCards from "./CategoryCards";
import CompanyCard from "./CompanyCard";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTopRatedSuppliersService } from "../../services/top-rated-supplier-service";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState({ state: "loading", message: "" });
  const user = useGetAuthenticatedUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getTopRatedSuppliersService({
        hooks: { setData, setisLoading },
      })
    );
  }, [setData, dispatch, setisLoading]);
console.log(isLoading)

  return (
    <>
      {getHomeBanner(user)}
      <div style={styles.parent} className="p-3 negative-marginTop-50">
        <PageHeader level={4} heading="Categories" />
        <CategoryCards mt={3} mb={0} />
      </div>
      <>
        <SectionHeader
          level={3}
          title={"New Products"}
          subtitle="Here are some new products"
        />
        <HomeHotSellers />
      </>
      <>
        <SectionHeader
          level={3}
          title={"Top Rated Companies"}
          subtitle="Here are top rated companies "
        />
        <Slider key={1}>
          {[...data,...data].map((supplier, idx) => (
            <CompanyCard
              key={idx}
              companyLogo={supplier.supplierProfileUrl}
              photo={"https://placeimg.com/640/480/tech"}
              title={supplier.brandName}
              subtitle="something good"
              supplier={supplier}
            />
          ))}
        </Slider>
      </>

      <>
        <SectionHeader
          level={3}
          title={"Hot Seller Products"}
          subtitle="some lorem ipsum should tdo the trick"
        />
        <HomeHotSellers />
      </>
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
