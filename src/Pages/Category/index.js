import React from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlineDown,
  AiOutlineMinusSquare,
  
  AiOutlinePlusSquare,
  AiOutlineRight,
  AiOutlineStar,
} from "react-icons/ai";

function Catalog() {
  const { productCategory } = useParams();
  console.log(productCategory);
  return (
    <>
      {/* first  bread cumbs -> comp */}
      <p className="my-2 text-primary text-weight-bold body-2 d-none d-md-block">
        Home <AiOutlineRight />{" "}
        <span className="text-muted text-weight-regular body-2">
          {productCategory}
        </span>
      </p>

      {/* then page header  */}
      <h1 className="text-weight-regular text-primary-light-700 heading-2 py-2">
        {productCategory}
      </h1>
      <main className="my-3 row mx-0 min-vh-100">
        {/* side bar   */}
        <div className="col-2 d-none d-lg-block me-2 p-0 ">
          <h1 className="body-2 text-primary text-center my-0  py-4 border-bottom-primary">
            Shopping Options
          </h1>
          <nav className="">
            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <AiOutlineDown className="body-2" />
              </li>
              <article className=" text-primary py-2 list-unstyled d-none">
                {/* actions here */}
                <li className="body-2 text-primary">Something</li>
                <li className="body-2 text-primary">Something</li>
              </article>
            </div>
            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <AiOutlineDown className="body-2" />
              </li>
              <article className=" text-primary py-2 list-unstyled d-none">
                {/* actions here */}
                <li className="body-2 text-primary">Something</li>
                <li className="body-2 text-primary">Something</li>
              </article>
            </div>
            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <AiOutlineDown className="body-2" />
              </li>
              <article className=" text-primary py-2 list-unstyled d-none">
                {/* actions here */}
                <li className="body-2 text-primary">Something</li>
                <li className="body-2 text-primary">Something</li>
              </article>
            </div>
          </nav>
          <div className="my-3">
            <h1 className="py-2 body-2 text-primary text-center">Wish list</h1>
            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <div>
                  <AiOutlinePlusSquare className="body-1 me-2" />
                  <AiOutlineMinusSquare className="body-1" />
                </div>
              </li>
            </div>
          </div>
        </div>
        {/* content */}
        <section className="col ">
          {/* content header */}
          <header className="py-3 px-1 d-flex justify-content-between my-2">
            <p className="text-muted body-2">Items 1-9 of 32</p>
            <div>
              sort by
              <select class="p-1 ms-2 body-2">
                <option>Price</option>
                <option>Company Name</option>
                <option>Reviews</option>
              </select>
            </div>
          </header>
          {/* content  */}
            <div className="row flex-wrap justify-content-evenly ">
                <div className="col my-2 mx-2 p-0 " style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px" }}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$400 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>
                <div className="col my-2 mx-2 p-0" style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px"}}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$400 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>
                <div className="col my-2 mx-2 p-0" style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px"}}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$400 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>
                <div className="col my-2 mx-2 p-0" style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px"}}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$400 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>
                <div className="col my-2 mx-2 p-0" style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px"}}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$400 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>
                <div className="col my-2 mx-2 p-0" style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px"}}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$400 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>
                <div className="col my-2 mx-2 p-0" style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px"}}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$400 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>
                <div className="col my-2 mx-2 p-0" style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px"}}>
                    {/* img */}
                    <div className="h-75 w-100 p-0 bg-primary-light mx-0">

                    </div>
                    {/* info */}
                    <div className="px-2">
                        <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">Cocacola</h1>
                        {/* reviews */}
                        <div><AiOutlineStar className="body-2" /></div>
                        {/* price */}
                        <price className="text-primary text-weight-bold body-2">$500 | <span className="body-2 bd-highlight">Stock</span></price>
                    </div>
                </div>

            </div>
        </section>
      </main>
    </>
  );
}

export default Catalog;
