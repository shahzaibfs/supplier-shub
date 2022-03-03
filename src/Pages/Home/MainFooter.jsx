import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const MainFooter = () => {
  return (
   
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
        <div className=" input-group  ">
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
      </div>
    </div>
  </footer>
  )
}

export default MainFooter