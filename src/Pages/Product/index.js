import React from "react";
import {
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

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
            className="col-12 p-0 px-3 col-lg-5 flex-grow-0  h-75  mt-3 mt-lg-0 "
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
              <label className="text-primary-light-700 text-weight-regular body-2 my-2">
                Quantity
              </label>
              <select
                class="form-select  text-primary body-2"
                aria-label="Default select example"
                style={{ width: "max-content" }}
              >
                <option value="1">1 kilo</option>
                <option value="2">2 kilo</option>
                <option value="3">3 kilo</option>
              </select>
              <label className="text-primary-light-700 text-weight-regular body-2 my-2">
                Delivery Time
              </label>
              <select
                class="form-select w-25 text-primary body-2"
                aria-label="Default select example"
              >
                <option value="normal">normal</option>
                <option value="2">Fast </option>
              </select>
              <button className="my-4 text-white body-2 btn btn-bg-primary w-50 d-flex align-items-center justify-content-center">
                Add to cart <AiOutlineShoppingCart className="mx-2" />
              </button>
            </form>
            {/* bottom actions  */}
            <div className="d-flex  align-items-center my-2">
              <div className="body-1 text-primary-light-700 flex-item ">
                <AiOutlineHeart className="me-1 " />{" "}
                <sapn>Add to wishlist</sapn>
              </div>
              <div className="body-1 text-primary-light-700 flex-item ms-4">
                <AiOutlineMail className="me-1 " /> <sapn>Email</sapn>
              </div>
            </div>
          </div>
        </section>
        <section className="my-3">
          {/* section for tabs */}
          {/* header  */}
          <nav
            className="d-flex list-unstyled border-left-primary"
            style={{ height: "44px", marginBottom: "-1px" }}
          >
            <li className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-4 border-right-primary border-top-primary border-bottom-none  bg-white  ">
              Details
            </li>
            <li className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-4 border-right-primary border-top-primary border-bottom-none    ">
              More Inforrmation
            </li>

            <li className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-4 border-right-primary border-top-primary border-bottom-none    ">
              Reviews (3)
            </li>
          </nav>
          <div
            className="border-primary mb-3 bg-white p-4"
            style={{ borderCollapse: "collapse" }}
          >
            <p className="body-2 text-primary-light-700">
              Perfect for class, work or the gym, the Wayfarer Messenger Bag is
              packed with pockets. The dual-buckle flap closure reveals an
              organizational panel, and the roomy main compartment has spaces
              for your laptop and a change of clothes. An adjustable shoulder
              strap and easy-grip handle promise easy carrying.
            </p>
            <ul>
                <li className="body-2 text-primary-light-700 mb-1">Multiple internal zip pockets.</li>
                <li className="body-2 text-primary-light-700 mb-1">Made of durable nylon.</li>

            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
