import React from "react";
import logo from "../../Assets/images/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu
} from "react-icons/ai";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
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
     <Link to={"/"}><img src={logo} alt="logo" /></Link> 
    </div>

    {/* search and cart container */}
    <div className="col p-0  col-xl-4 row flex-row  align-items-center justify-content-end m-0 ">
      {/* search input field  */}
      <div className="d-none input-group d-md-flex col-12 col-md-10 w-75">
        <input
          type="text"
          className="form-control "
          placeholder="Search"
          aria-label="Search "
          aria-describedby="basic-addon2"
          style={{ borderRight: "none" }}
        />
        <span
          className="input-group-text bg-white text-primary"
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
        <Link to={"/cart"}><AiOutlineShoppingCart className="heading-2 " /></Link>
      </div>
    </div>
  </header>
  )
}

export default MainHeader