import React from "react";
import logo from "../../Assets/images/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineMenu,
} from "react-icons/ai";

import "./__home.css";

function Home() {
  return (
    <section
      className="w-100 h-100 overflow-auto position-relative"
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
            className="text-white body-2 text-weight-regular container-fluid container-xxl d-flex align-items-center justify-content-end w-100  p-0 mx-0"
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
            <div
              className="col flex-grow-0 d-md-none bg-primary ms-2 "
              style={{ borderRadius: "5px" }}
            >
              <h1 className="body-1 pt-2">1</h1>
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
          className="container-fluid position-relative container-xxl bg-primary-light mt-2"
          style={{ height: "450px" }}
        >
          <div
            className="banner__info  position-absolute bg-primary-light-700 p-4 d-flex flex-column justify-content-center "
          >
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
        


      </section>
    </section>
  );
}

export default Home;
