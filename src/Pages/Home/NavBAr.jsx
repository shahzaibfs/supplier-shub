import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const NavBAr = () => {
  return (
    <nav
    className="container-fluid container-xxl d-none mx-auto bg-primary d-md-block"
    style={{ height: "48px" }}
  >
    <ul className="list-unstyled d-flex h-100 align-items-center ">
      <li style={{cursor:"pointer"}} className="text-white text-weight-regular body-2 me-3">
        What's New
      </li>
      <li style={{cursor:"pointer"}} className="text-white text-weight-regular body-2 me-3">Men</li>
      <li style={{cursor:"pointer"}} className="text-white text-weight-regular body-2 me-3">
        Women
      </li>
      <li style={{cursor:"pointer"}} className="text-white text-weight-regular body-2 me-3">
        Gear{" "}
      </li>
      <li style={{cursor:"pointer"}} className="text-white text-weight-regular body-2 me-3">
        Training{" "}
      </li>

      <li style={{cursor:"pointer"}} className="text-white text-weight-regular body-2 me-3 cursor-pointer">
        <AiFillCaretDown />{" "}
      </li>
    </ul>
  </nav>
  )
}

export default NavBAr