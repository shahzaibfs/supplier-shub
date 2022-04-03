import React from "react";
import { Link } from "react-router-dom";

import backgroundImage from  "../../Assets/images/fyp.jpg"

const HomeBanner = ({
  title ="Buy The Items in Whole Sale rate directly from Suppliers ",
  btn={link:"/cart",text:"Go to Shopping Cart"}
}) => {
  const backgroundImageUrl = backgroundImage ;
  
  return (
    <section
      className="container-fluid  mt-4" 
      style={{
        height: "400px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 3,
        overflow: "hidden",
      }}
    >
      <div className="position-relative w-100 h-100">
      <div className="banner__info  position-absolute bg-primary-light-700 p-4 d-flex flex-column justify-content-center ">
        <p className="body-1 text-muted text-weight-regular">
          Welcome ~
        </p>
        <h1 className="heading-2 text-primary-light  text-weight-bold" style={{maxWidth:"22ch"}}>
          {title}
        </h1>
        <Link to={btn.text}>
          <button className="btn bg-primary text-white mt-3 w-50 body-2">
            {btn.text}
          </button>
        </Link>
      </div></div>
    </section>
  );
};

export default HomeBanner;
