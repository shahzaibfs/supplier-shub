import React from "react";

import Slider from "../../Components/slider/Slider";
import productCategoryMockData from "../../services/productCategoryMockData.json";
import { SectionHeader } from "./HomeHotSellers";


const HomeGallery = () => {

  return (<>
    <Slider key={1} data={productCategoryMockData} negative={true}  />
    <SectionHeader title={"Newest Products"} subtitle={"lorem ipsum should do the trick "}/>
    <Slider key={2} data={productCategoryMockData} />
    </>
  );

};

export default HomeGallery;

