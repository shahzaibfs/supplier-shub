import React from "react";
import logo from "../../Assets/images/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineMenu
} from "react-icons/ai";

import "./__home.css";
import { Outlet } from "react-router-dom";

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


        {/* render on route condition  */}
        <section className="container-xxl" style={{minHeight:"100vh"}}>
          <Outlet />
        </section>

        {/* <----------- footer   container------------> */
        /* <------------ footer  container------------> */
        /* <------------ footer  container------------> */
        /* <------------ footer  container------------> */}
        <footer className="container-fluid mt-2 bg-primary-light-800 border-top-primary px-0 ">
          <div className="row  flex-column-reverse flex-lg-row container-fluid  container-xxl mx-0 no-gutters  mx-md-auto  px-0 py-lg-4">
            <div className="col-12 p-0 col-lg-3 list-unstyled text-white flex-grow-0">
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
        <footer
          className="container-fluid bg-primary d-flex align-items-center justify-content-center text-white body-2  "
          style={{ minHeight: "42px" }}
        >
          <div className="text-center py-2 text-weight-regular">
            Copyright © 2013-2017 Magento, Inc. All rights reserved.
          </div>
        </footer>
      </section>
    </section>
  );
}

export default Home;
