import React from 'react';
import {AiOutlineCaretRight ,AiOutlineStar} from "react-icons/ai"

function Home() {
  return <>
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
                    Shop Erin Recommends{" "}
                    <AiOutlineCaretRight className="ms-1" />
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
  </>;
}

export default Home;
