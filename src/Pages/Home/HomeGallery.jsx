import React from "react";

import Slider from "../../Components/slider/Slider";
import productCategoryMockData from "../../services/productCategoryMockData.json";
import { SectionHeader } from "./HomeHotSellers";


const HomeGallery = () => {

  return (<>
    <Slider  data={productCategoryMockData} negative={true}  />
    <SectionHeader title={"Newest Products"} subtitle={"lorem ipsum should do the trick "}/>
    <Slider  data={productCategoryMockData} />
    </>
  );

};

export default HomeGallery;

