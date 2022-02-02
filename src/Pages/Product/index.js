import React from "react";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";

function Product() {
  return (
    <>
      {/* -----------bread crumbs ------------- */
      /* -----------bread crumbs ------------- */
      /* -----------bread crumbs ------------- */
      /* -----------bread crumbs ------------- */}
      <p>bread crumbs here </p>
      {/* -----------bread crumbs ------------- */
      /* -----------bread crumbs ------------- */
      /* -----------bread crumbs ------------- */
      /* -----------bread crumbs ------------- */}
      <main>
        <section
          className="row flex-wrap justify-content-between mx-0"
          style={{ minHeight: "615px" }}
        >
          {/* section for image showing  */}
          <div
            className="col-12 p-0 col-lg-4 flex-grow-1 h-75  me-2"
            style={{ minHeight: "615px" }}
          >
            <img
              src=""
              alt="something"
              className="bg-primary-light w-100"
              style={{ minHeight: "500px", minWidth: "100%" }}
            />
            <div className="d-flex " style={{ overflowX: "auto" }}>
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item "
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
              <img
                src=""
                alt="something"
                className="bg-primary-light my-2 flex-item mx-1"
                style={{ minHeight: "100px", minWidth: "100px" }}
              />
            </div>
          </div>
          {/* section for actions and title and pay  */}
          <div
            className="col-12 p-0 col-lg-5 flex-grow-0  h-75 bg-primary-light "
            style={{ minHeight: "500px" }}
          >
            {/* heading */}
            <h1 className="heading-2 mt-0 pt-0 text-primary-light-700 text-weight-regular  ">
              Wayfarer Messenger Bag
            </h1>
            {/* rating stuff */}
            <div className="d-flex align-items-center mb-2">
              <AiOutlineStar className="me-1 text-muted" />
              <AiOutlineStar className="me-1 text-muted" />
              <AiOutlineStar className="me-1 text-muted" />
              <AiOutlineStar className="me-1 text-muted" />
              <AiOutlineStar className="me-1 text-muted" />
              <p className="mx-2 text-decoration-underline text-muted body-2 my-0 text-weight-regular">
                3 reviews
              </p>
            </div>
            {/* pricing stuff */}
            <div className="py-2 border-bottom-primary d-flex justify-content-between align-items-center">
              <div className="flex-item">
                <p className="body-2 text-primary-light-700 text-weight-regular mb-0">
                  As low As
                </p>
                <price className="text-primary-light-700 text-weight-bold heading-2">
                  $45.00{" "}
                  <span className="body-2 text-weight-regular">per stock</span>
                </price>
              </div>
              <div className="flex-item mx-2 ">
                <p className="text-primary body-2 text-uppercase mb-1">
                  In stock
                </p>
                <p className=" body-2 text-muted mb-0">SKU#: 24-MB05</p>
              </div>
            </div>
            {/* add to cart */}
            <form>
            <label className="text-primary-light-700 text-weight-regular body-2 my-2">Quantity</label>
            <select class="form-select  text-primary body-2" aria-label="Default select example" style={{width:"max-content"}}>
              <option value="1">1 kilo</option>
              <option value="2">2 kilo</option>
              <option value="3">3 kilo</option>
            </select>
            <label className="text-primary-light-700 text-weight-regular body-2 my-2">Delivery Time</label>
            <select class="form-select w-25 text-primary body-2" aria-label="Default select example">
              <option value="normal">normal</option>
              <option value="2">Fast </option>
            </select>
            <button className="my-4 text-white body-2 btn btn-bg-primary w-50 d-flex align-items-center justify-content-center">Add to cart <AiOutlineShoppingCart  className="mx-2"/></button>
            </form>
          </div>
        </section>
        <section>{/* section for tabs */}</section>
      </main>
    </>
  );
}

export default Product;
