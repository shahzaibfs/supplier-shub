import React from "react";
import logo from "../../Assets/images/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineMenu,
  AiOutlineCaretRight,
  AiOutlineStar,
} from "react-icons/ai";

import "./__home.css";

function Home() {
  return (
    <section
      className="w-100 h-100  position-relative"
      style={{ minHeight: "100vh", height: "max-content" }}
    >
      {/* <-----------background Overlay------------> */
      /* <-----------background Overlay------------> */
      /* <-----------background Overlay------------> */
      /* <-----------background Overlay------------> */}
      <div
        className="home-overlay row container-fluid container-xxl  position-absolute no-gutters mx-auto justify-content-md-between h-100  px-0 "
        style={{
          minHeight: "100vh ",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: -1,
        }}
      >
        {[...Array(11)].map((item, idx) => (
          <div
            key={idx}
            className="col-12 my-1 col-xl-1 bg-grid-color mx-xl-1 "
          ></div>
        ))}
      </div>
      {/* <-----------home container------------> */
      /* <------------home container------------> */
      /* <------------home container------------> */
      /* <------------home container------------> */}
      <section className=" mx-auto " style={{ zIndex: 1 }}>
        {/* <-----------smallHeader container------------> */
        /* <------------smallHeader container------------> */
        /* <------------smallHeader container------------> */
        /* <------------smallHeader container------------> */}
        <header className="container-fluid bg-primary d-none d-md-block ">
          <div
            className="text-white body-2 text-weight-regular container-fluid container-xxl d-flex align-items-center justify-content-end w-100  p-0 mx-0 mx-md-auto p-md-2"
            style={{ height: "42px" }}
          >
            Welcome<span className="text-weight-bold mx-md-1 ">~Guest |</span>
            <span className="ms-2 text-decoration-underline cursor-pointer">
              Signin to create an account ?
            </span>
          </div>
        </header>
        {/* <-----------mainHeader container------------> */
        /* <------------mainHeader container------------> */
        /* <------------mainHeader container------------> */
        /* <------------mainHeader container------------> */}
        <header
          className="container-fluid container-xxl row mx-auto no-gutters align-items-center justify-content-between p-0"
          style={{ height: "90px" }}
        >
          {/* menu icon  */}

          <div className="col d-md-none d-flex justify-content-end mt-1 mt-md-0 d-md-block  col-md-2 flex-grow-0 ">
            <AiOutlineMenu className="d-md-none col heading-2" />{" "}
          </div>
          {/* logo container */}
          <div className="col">
            <img src={logo} alt="logo" />
          </div>

          {/* search and cart container */}
          <div className="col p-0  col-xl-4 row flex-row  align-items-center justify-content-end m-0 ">
            {/* search input field  */}
            <div class="d-none input-group d-md-flex col-12 col-md-10 w-75">
              <input
                type="text"
                class="form-control "
                placeholder="Search"
                aria-label="Search "
                aria-describedby="basic-addon2"
                style={{ borderRight: "none" }}
              />
              <span
                class="input-group-text bg-white text-primary"
                id="basic-addon2"
                style={{ borderLeft: "none" }}
              >
                <AiOutlineSearch />
              </span>
            </div>
            {/* cart icon */}

            <div className="col d-md-none d-flex   flex-grow-0 ">
              <AiOutlineSearch className="col d-md-none heading-2" />
            </div>
            <div className="col d-flex justify-content-end  d-md-block  col-md-2 flex-grow-0 ">
              <AiOutlineShoppingCart className="heading-2 " />
            </div>
          
          </div>
        </header>
        {/* <----------- menu container------------> */
        /* <------------ menu container------------> */
        /* <------------ menu container------------> */
        /* <------------ menu container------------> */}
        <nav
          className="container-fluid container-xxl d-none mx-auto bg-primary d-md-block"
          style={{ height: "48px" }}
        >
          <ul className="list-unstyled d-flex h-100 align-items-center ">
            <li className="text-white text-weight-regular body-2 me-3">
              What's New
            </li>
            <li className="text-white text-weight-regular body-2 me-3">Men</li>
            <li className="text-white text-weight-regular body-2 me-3">
              Women
            </li>
            <li className="text-white text-weight-regular body-2 me-3">
              Gear{" "}
            </li>
            <li className="text-white text-weight-regular body-2 me-3">
              Training{" "}
            </li>

            <li className="text-white text-weight-regular body-2 me-3 cursor-pointer">
              <AiFillCaretDown />{" "}
            </li>
          </ul>
        </nav>

        {/* <----------- Banner container------------> */
        /* <------------ Banner container------------> */
        /* <------------ Banner container------------> */
        /* <------------ Banner container------------> */}
        <div
          className="container-fluid position-relative container-xxl  mt-4"
          style={{ height: "450px" }}
        >
          <div className="banner__info  position-absolute bg-primary-light-700 p-4 d-flex flex-column justify-content-center ">
            <p className="body-1 text-muted text-weight-regular">
              New Luma Yoga Collection
            </p>
            <h1 className="heading-2 text-primary-light  text-weight-regular">
              Get fit and look fab in new seasonal styles
            </h1>
            <button className="btn bg-primary text-white mt-3 w-50 body-2">
              Shop New Yoga
            </button>
          </div>
        </div>

        {/* <----------- gallery  container------------> */
        /* <------------ gallery container------------> */
        /* <------------ gallery container------------> */
        /* <------------ gallery container------------> */}
        <div className="container-fluid container-xxl mx-auto p-0 mt-4 W-100">
          <div className="home__gallery">
            <div className="bg-primary-light p-4">
              <div className="d-flex flex-column align-items-start p-4">
                <h1 className="heading-2 text-primary text-weight-bold">
                  20% OFF
                </h1>
                <p className="body-1 text-muted text-weight-regular">
                  Luma pants when you shop today*
                </p>
                <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                  Shop Pants <AiOutlineCaretRight className="ms-1" />
                </p>
              </div>
            </div>
            <div className="bg-primary-light p-4">
              <div className="d-flex flex-column align-items-start w-50  ms-auto p-4">
                <h1 className="heading-2 text-primary-light-700 text-weight-regular ">
                  Even more ways to mix and match
                </h1>
                <p className="body-1 text-muted text-weight-regular">
                  Buy 3 Luma tees get a 4th free
                </p>
                <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                  Shop teees <AiOutlineCaretRight className="ms-1" />
                </p>
              </div>
            </div>
            <div className="bg-primary-light p-4">
              <div className="d-flex flex-column align-items-start w-75 ms-auto p-4">
                <h1 className="heading-2 text-primary-light-700 text-weight-regular">
                  Take it from Erin
                </h1>
                <p className="body-1 text-muted text-weight-regular">
                  Luma founder Erin Renny shares her favorites!
                </p>
                <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                  Shop Erin Recommends <AiOutlineCaretRight className="ms-1" />
                </p>
              </div>
            </div>
            <div className="bg-primary-light p-4">
              <div className="d-flex flex-column align-items-start h-100 justify-content-center w-75 ms-auto p-4 bg-primary-light-700">
                <h1 className="heading-2 text-primary-light-700 text-weight-regular">
                  Twice around, twice as nice
                </h1>
                <p className="body-1 text-muted text-weight-regular">
                  Find conscientious, comfy clothing in our eco-friendly
                  collection{" "}
                </p>
                <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                  Shop Eco-Friendly <AiOutlineCaretRight className="ms-1" />
                </p>
              </div>
            </div>
            <div className="bg-primary-light p-4">
              <div className="d-flex flex-column align-items-start w-100 ms-auto p-4 bg-primary-light-700">
                <h1 className="heading-2 text-primary-light-700 text-weight-regular">
                  Science meets performance
                </h1>
                <p className="body-1 text-muted text-weight-regular">
                  Wicking to raingear, Luma covers you
                </p>
                <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                  Shop Performance <AiOutlineCaretRight className="ms-1" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <----------- hotSellers  container------------> */
        /* <------------ hotSellers container------------> */
        /* <------------ hotSellers container------------> */
        /* <------------ hotSellers container------------> */}
        <div className="container-fluid container-xxl">
          {/* Section header  */}
          <header className="d-flex flex-column justify-content-center align-items-center py-4 my-2">
            <h1 className="heading-2 text-primary text-weight-regular">
              Hot Sellers
            </h1>
            <p className="body-2 text-primary-light-800">
              Here is what`s trending on Luma right now
            </p>
          </header>
          <main className="row mx-0 justify-content-center justify-content-sm-between  flex-wrap px-0">
            <div
              className="col-11 col-sm-5  col-md-3  col-xl-2  mx-0 mx-md-2 my-2  mx-xxl-2  px-0"
              style={{ minHeight: "400px" }}
            >
              {/* img */}
              <div className="h-50 bg-primary"></div>
              {/* section for card data */}
              <article className="my-3 px-2">
                <p className="body-2 text-primary-light-700 text-decoration-underline">
                  Fusion Backpack
                </p>
                <price className="text-weight-bold body-2">
                  $69.00 | Stock
                </price>
              </article>
              {/* actions  */}
              <div className="position-relative px-2">
                <div className="stars">
                  <AiOutlineStar />
                </div>
                <p className="mb-2 text-muted text-decoration-underline">
                  Reviews
                </p>
                <button className="btn bg-primary my-0 text-white">
                  Add to cart
                </button>
              </div>
            </div>
            <div
              className="col-11 col-sm-5  col-md-3  col-xl-2  mx-0 mx-md-2 my-2  mx-xxl-2  px-0"
              style={{ minHeight: "400px" }}
            >
              {/* img */}
              <div className="h-50 bg-primary"></div>
              {/* section for card data */}
              <article className="my-3 px-2">
                <p className="body-2 text-primary-light-700 text-decoration-underline">
                  Fusion Backpack
                </p>
                <price className="text-weight-bold body-2">
                  $69.00 | Stock
                </price>
              </article>
              {/* actions  */}
              <div className="position-relative px-2">
                <div className="stars">
                  <AiOutlineStar />
                </div>
                <p className="mb-2 text-muted text-decoration-underline">
                  Reviews
                </p>
                <button className="btn bg-primary text-white">
                  Add to cart
                </button>
              </div>
            </div>
            <div
              className="col-11 col-sm-5  col-md-3  col-xl-2  mx-0 mx-md-2 my-2  mx-xxl-2  px-0"
              style={{ minHeight: "400px" }}
            >
              {/* img */}
              <div className="h-50 bg-primary"></div>
              {/* section for card data */}
              <article className="my-3 px-2">
                <p className="body-2 text-primary-light-700 text-decoration-underline">
                  Fusion Backpack
                </p>
                <price className="text-weight-bold body-2">
                  $69.00 | Stock
                </price>
              </article>
              {/* actions  */}
              <div className="position-relative px-2">
                <div className="stars">
                  <AiOutlineStar />
                </div>
                <p className="mb-2 text-muted text-decoration-underline">
                  Reviews
                </p>
                <button className="btn bg-primary text-white">
                  Add to cart
                </button>
              </div>
            </div>
            <div
              className="col-11 col-sm-5  col-md-3  col-xl-2  mx-0 mx-md-2my-2  mx-xxl-2  px-0"
              style={{ minHeight: "400px" }}
            >
              {/* img */}
              <div className="h-50 bg-primary"></div>
              {/* section for card data */}
              <article className="my-3 px-2">
                <p className="body-2 text-primary-light-700 text-decoration-underline">
                  Fusion Backpack
                </p>
                <price className="text-weight-bold body-2">
                  $69.00 | Stock
                </price>
              </article>
              {/* actions  */}
              <div className="position-relative px-2">
                <div className="stars">
                  <AiOutlineStar />
                </div>
                <p className="mb-2 text-muted text-decoration-underline">
                  Reviews
                </p>
                <button className="btn bg-primary text-white">
                  Add to cart
                </button>
              </div>
            </div>
            <div
              className="col-11 col-sm-5  col-md-3  col-xl-2  mx-0 mx-md-2 my-2  mx-xxl-2  px-0"
              style={{ minHeight: "400px" }}
            >
              {/* img */}
              <div className="h-50 bg-primary"></div>
              {/* section for card data */}
              <article className="my-3 px-2">
                <p className="body-2 text-primary-light-700 text-decoration-underline">
                  Fusion Backpack
                </p>
                <price className="text-weight-bold body-2">
                  $69.00 | Stock
                </price>
              </article>
              {/* actions  */}
              <div className="position-relative px-2">
                <div className="stars">
                  <AiOutlineStar />
                </div>
                <p className="mb-2 text-muted text-decoration-underline">
                  Reviews
                </p>
                <button className="btn bg-primary text-white">
                  Add to cart
                </button>
              </div>
            </div>
            <div
              className="col-11 col-sm-5  col-md-3  col-xl-2  mx-0 mx-md-2 my-2   mx-xxl-2  px-0"
              style={{ minHeight: "400px" }}
            >
              {/* img */}
              <div className="h-50 bg-primary"></div>
              {/* section for card data */}
              <article className="my-3 px-2">
                <p className="body-2 text-primary-light-700 text-decoration-underline">
                  Fusion Backpack
                </p>
                <price className="text-weight-bold body-2">
                  $69.00 | Stock
                </price>
              </article>
              {/* actions  */}
              <div className="position-relative px-2">
                <div className="stars">
                  <AiOutlineStar />
                </div>
                <p className="mb-2 text-muted text-decoration-underline">
                  Reviews
                </p>
                <button className="btn bg-primary text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </main>
        </div>
        {/* <----------- footer   container------------> */
        /* <------------ footer  container------------> */
        /* <------------ footer  container------------> */
        /* <------------ footer  container------------> */}
        <footer className="container-fluid mt-2 bg-primary-light-800 border-top-primary px-0 ">
          <div className="row  flex-column-reverse flex-lg-row container-fluid  container-xxl mx-0 no-gutters  mx-md-auto  px-0 py-lg-4">
            <div className="col-11 p-0 col-lg-3 list-unstyled text-white flex-grow-0">
              <li className="py-3 px-4 border-bottom-primary  py-lg-2 border-lg-none text-primary text-weight-regular ">
                About us{" "}
              </li>
              <li className="py-3 px-4 border-bottom-primary py-lg-2 border-lg-none text-primary text-weight-regular">
                Customer Service{" "}
              </li>
            </div>
            <div className="col-12 p-0 col-lg-auto text-white flex-grow-1 list-unstyled">
              <li className="py-3 px-4 border-bottom-primary py-lg-2 border-lg-none text-primary text-weight-regular">
                Privacy and Cookie Policy{" "}
              </li>
              <li className="py-3 px-4 border-bottom-primary py-lg-2 border-lg-none text-primary text-weight-regular">
                Search Terms{" "}
              </li>
              <li className="py-3 px-4 border-bottom-primary py-lg-2 border-lg-none text-primary text-weight-regular">
                Orders and Returns{" "}
              </li>
              <li className="py-3 px-4 border-bottom-primary py-lg-2 border-lg-none text-primary text-weight-regular">
                Advanced Search{" "}
              </li>
              <li className="py-3 px-4 border-bottom-primary py-lg-2 border-lg-none text-primary text-weight-regular">
                Contact Us{" "}
              </li>
            </div>
            <div className="col-12 px-4 border-bottom-primary  p-0 col-lg-3 text-white flex-grow-0 py-3 py-lg-2  border-lg-none">
              <div class=" input-group  ">
                <input
                  type="text"
                  class="form-control "
                  placeholder="Search"
                  aria-label="Search "
                  aria-describedby="basic-addon2"
                  style={{ borderRight: "none" }}
                />
                <span
                  class="input-group-text bg-white text-primary"
                  id="basic-addon2"
                  style={{ borderLeft: "none" }}
                >
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
          </div>
        </footer>

        {/* <----------- smallFooter  container------------> */
        /* <------------ smallFooter container------------> */
        /* <------------ smallFooter container------------> */
        /* <------------ smallFooter container------------> */}
        <footer className="container-fluid bg-primary d-flex align-items-center justify-content-center text-white body-2 py-2 " style={{minHeight:"42px" }}>
          <div className="text-center" >
          Copyright © 2013-2017 Magento, Inc. All rights reserved.
          </div>
        </footer>
      </section>
    </section>
  );
}

export default Home;
