import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";

function Checkout() {
  const checkoutState = useSelector(store => store.checkoutReducer)
  console.log(checkoutState)
  return (
    <>
      {/* @ compp */}
      <header
        className="d-flex my-2 align-items-center justify-content-center justify-content-md-start"
        style={{ height: "70px" }}
      >
        <div
          className="flex-item text-center text-primary body-2 text-weight-bold "
          style={{ minWidth: "150px" }}
        >
          <div className="position-relative d-flex justify-content-center">
            <div
              className="position-absolute bg-primary"
              style={{
                width: "100%",
                height: "5px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 1,
              }}
            ></div>
            <div
              className="rounded-circle  bg-white d-flex justify-content-center align-items-center border-2 border-primary-5 "
              style={{ width: "35px", height: "35px", zIndex: 2 }}
            >
              <AiOutlineCheck className="body-1 text-weight-bold " />
            </div>
          </div>
          Shipping
        </div>
        <div
          className="flex-item text-center text-primary body-2 text-weight-bold "
          style={{ minWidth: "150px" }}
        >
          <div className="position-relative d-flex justify-content-center">
            <div
              className="position-absolute bg-primary-light"
              style={{
                width: "100%",
                height: "5px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 1,
              }}
            ></div>
            <div
              className="rounded-circle  bg-white d-flex justify-content-center align-items-center border-2 border-secondary-5 body-2 "
              style={{ width: "35px", height: "35px", zIndex: 2 }}
            >
              2
            </div>
          </div>
          Review and payments
        </div>
      </header>
      {/* main comp */}
      <main>
        <header className="py-2 heading-2 text-primary-light-700 border-bottom-primary">
          Shipping Address
        </header>
        <section className="row mx-0 justify-content-between align-items-start">
          <div className="col-12 col-md-6 col-xl-7 px-0 flex-grow-1 me-2 ">
            <form className="w-100 w-md-75 w-xl-50 my-2" onSubmit={(e)=>e.preventDefault()}>
              <div className="form-group mt-2 bg-none ">
                <label className="body-2 text-weight-regular text-primary-light-700">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control body-2 text-weight-regular text-primary-light-700"
                  placeholder="your name"
                />
              </div>
              <div className="form-group mt-2 body-2 text-weight-regular text-primary-light-700">
                <label className="body-2 text-weight-regular text-primary-light-700">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control body-2 text-weight-regular text-primary-light-700"
                  placeholder="your sir name"
                />
              </div>
              <div className="form-group mt-2 ">
                <label className="body-2 text-weight-regular text-primary-light-700">
                  Company | Market Name
                </label>
                <input
                  type="text"
                  className="form-control body-2 text-weight-regular text-primary-light-700"
                  placeholder="your company name "
                />
              </div>
              <div className="form-group mt-2 ">
                <label className="body-2 text-weight-regular text-primary-light-700">
                  Shipping Address
                </label>
                <textarea
                  type="text"
                  className="form-control body-2 text-weight-regular text-primary-light-700"
                  placeholder="enter complete shipping address"
                  rows={4}
                />
              </div>
              <div className="form-group mt-2 ">
                <label className="body-2 text-weight-regular text-primary-light-700">
                  Phone No
                </label>
                <input
                  type="tel"
                  className="form-control body-2 text-weight-regular text-primary-light-700"
                  placeholder="cc-xxx-xxxxxxx"
                />
              </div>
              <div className="form-group mt-2 ">
                <label className="text-primary-light-700 text-weight-regular body-2 ">
                  State
                </label>
                <select class="form-select  text-primary-light-700 body-2 ">
                  <option value="1">Islamabad</option>
                  <option value="2">Lahore</option>
                  <option value="3">Karachi</option>
                </select>
              </div>
              <footer
                className="heading-2 text-primary-light-700 text-weight-regular d-flex align-items-center border-bottom-primary"
                style={{ minHeight: "70px" }}
              >
                Shipping methods
              </footer>
              <div className="mt-2">
                <div class="form-check  pb-1 ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="option1"
                  />
                  <label className="form-check-label body-2 text-primary-light">
                    Cash on Delivery
                  </label>
                </div>
                <div class="form-check pb-1 ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="option1"
                  />
                  <label className="form-check-label body-2 text-primary-light">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <button className="btn btn-bg-primary text-white text-weight-regular my-2 ms-auto">
                Confirm order 
              </button>
            </form>
          </div>
          <div
            className="col-12 col-md-5 col-xl-3 px-2 mt-3 flex-grow-0 bg-primary-light overflow-auto rounded py-2">
            {/* @comp */}
            <header
              className="heading-2  text-primary-light-700 text-weight-regular d-flex align-items-center"
              style={{ height: "70px" }}
            >
              Order Summary
            </header>
            <div className="d-flex justify-content-between">
            <p className="text-muted body-1">{checkoutState.products.length} items in cart</p>
              <p className="text-muted body-1">Total : Rs {checkoutState.totalPrice}</p>
            </div>
         {
           checkoutState.products.map((product)=>(
            <article  key={product.productId} className="d-flex justify-content-between border-top-primary py-2 w-100">
            <div className="d-flex">
              <span className="me-2">
                {" "}
                <img
                  src={product.productCoverPictureUrl}
                  alt=""
                  height={70}
                  width={70}
                  style={{objectFit:"cover"}}
                  className="bg-primary"
                />
              </span>
              <span>
                  <h1 className="body-2  text-decoration-underline text-weight-regular">{product.productName}</h1>
                  <p className="body-2   text-weight-regular">
                    Qty : {checkoutState.quantities[product.productId]}
                    </p>
              </span>
            </div>
            <price>
             Rs {product.productPrice}
            </price>

          </article>)
           )
         }
              
          </div>
        </section>
      </main>
    </>
  );
}

export default Checkout;
