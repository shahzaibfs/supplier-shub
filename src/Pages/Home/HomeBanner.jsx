import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const backgroundImageUrl =
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg";
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
          Buy The Items in Whole Sale rate directly from Suppliers 
        </h1>
        <Link to="/login">
          <button className="btn bg-primary text-white mt-3 w-50 body-2">
            Go to Shopping Cart
          </button>
        </Link>
      </div></div>
    </section>
  );
};

export default HomeBanner;
