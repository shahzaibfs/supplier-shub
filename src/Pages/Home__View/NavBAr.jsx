import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import categoryMockData from "../../services/productCategoryMockData.json";

const NavBAr = () => {
  const [isDropDown, setisDropDown] = useState(false);

  const get1stHalf = () => {
    let newArr = [];
    for (let i = 0; i < 6; i++) {
      newArr.push(categoryMockData[i]);
    }
    return newArr;
  };
  const getLastHalf = () => {
    let newArr = [];
    for (let i = 6; i < categoryMockData.length - 1; i++) {
      newArr.push(categoryMockData[i]);
    }
    return newArr;
  };

  const getClearLink = (name) => {
    return name.split(" ").join("-");
  };
  return (
    <nav
      className="container-fluid  d-none mx-auto bg-primary-light d-md-block"
      style={{ height: "48px" }}
    >
      <ul className="list-unstyled container-xxl d-flex h-100 align-items-center ">
        {get1stHalf().map((category, id) => (
         <li
         style={{ cursor: "pointer" }}
         className=" text-weight-regular  me-3"
         key={category.categoryId}
       >
         <Link className="text-white body-2" to={"/products/"+getClearLink(category.categoryName)}>
           {category.categoryName}
         </Link>
       </li>
        ))}
        <div
          onMouseEnter={() => {
            setisDropDown(!isDropDown);
          }}
          onMouseLeave={() => setisDropDown(!isDropDown)}
        >
          <AiFillCaretDown color="white"  cursor={"pointer"}/>
          {isDropDown && (
            <ul className="position-absolute bg-primary-light list-unstyled p-2" style={{zIndex:10}}>
              {getLastHalf().map((category) => (
               <li
               style={{ cursor: "pointer" }}
               className="text-white text-weight-regular body-2 me-3 py-2 text-white"
               key={category.categoryId}
             >
               <Link className="text-white" to={"/products/"+getClearLink(category.categoryName)}>
                 {category.categoryName}
               </Link>
             </li>
              ))}
            </ul>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBAr;