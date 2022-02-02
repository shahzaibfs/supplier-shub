import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Cart() {
  return (
    <>
      <h1 className="heading-2 text-primary-light-700 text-weight-regular my-2 py-3">
        Shopping Cart
      </h1>
      {/* for two sec  */}
      <main className="row mx-0 ">
        <section
          className="col px-0 bg-primary-light-700 me-1 "
          style={{ overflowX: "auto" }}
        >
          <table width="100%" className=" h-100 ">
            <thead className="border-bottom-primary" style={{ height: "50px" }}>
              <tr>
                <th width="60%" className="ps-4 body-1 text-primary-light-700">
                  Item
                </th>
                <th className="body-1 text-primary-light-700 px-2">Price</th>
                <th className="body-1 text-primary-light-700 px-2" width="15%">
                  Quantity
                </th>
                <th className="body-1 text-primary-light-700 px-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="position-relative border-bottom-primary">
                <td className="py-3 ps-4">
                  <div className="d-flex">
                    <div>
                      <img
                        src=""
                        width="150px"
                        height="150px"
                        className="bg-primary"
                        alt=""
                      />
                      <p className="text-muted my-2 text-decoration-underline">
                        Add to wishlist
                      </p>
                    </div>

                    <div className="flex-item ms-4">
                      <h1 className="body-1 text-primary-light-700  text-decoration-underline">
                        Wayfarer Messenger Bag
                      </h1>
                      <div>
                        <span className="body-2 text-weight-bold ext-primary-light-700">
                          company
                        </span>
                        <span className="body-2 text-primary-light-700">
                          : cocacola
                        </span>
                      </div>
                      <div>
                        <span className="body-2 text-weight-bold ext-primary-light-700">
                          Email
                        </span>
                        <span className="body-2 text-primary-light-700">
                          : Shahzaibalam231@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 body-1 text-primary-light-700 d-block">
                  $45.00
                </td>
                <td className="px-2 position-relative">
                  {" "}
                  <select
                    class="form-select  text-primary body-2 position-absolute mt-3"
                    aria-label="Default select example"
                    style={{ width: "max-content", top: 0 }}
                  >
                    <option value="1">1 kilo</option>
                    <option value="2">2 kilo</option>
                    <option value="3">3 kilo</option>
                  </select>
                </td>
                <td className="ps-4 position-relative py-3 body-1 d-block text-primary-light-700 h-100">
                  $90.00
                  <td
                    className=" py-1 position-absolute d-block text-primary-light-700 mb-4 ms-3 "
                    style={{ bottom: 0 }}
                  >
                    <AiFillDelete style={{ fontSize: "1.5rem" }} />
                  </td>
                </td>
              </tr>
              <tr className="position-relative">
                <td className="py-3 ps-4">
                  <div className="d-flex">
                    <div>
                      <img
                        src=""
                        width="150px"
                        height="150px"
                        className="bg-primary"
                        alt=""
                      />
                      <p className="text-muted my-2 text-decoration-underline">
                        Add to wishlist
                      </p>
                    </div>

                    <div className="flex-item ms-4">
                      <h1 className="body-1 text-primary-light-700  text-decoration-underline">
                        Wayfarer Messenger Bag
                      </h1>
                      <div>
                        <span className="body-2 text-weight-bold ext-primary-light-700">
                          company
                        </span>
                        <span className="body-2 text-primary-light-700">
                          : cocacola
                        </span>
                      </div>
                      <div>
                        <span className="body-2 text-weight-bold ext-primary-light-700">
                          Email
                        </span>
                        <span className="body-2 text-primary-light-700">
                          : Shahzaibalam231@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 body-1 text-primary-light-700 d-block">
                  $45.00
                </td>
                <td className="px-2 position-relative">
                  {" "}
                  <select
                    class="form-select  text-primary body-2 position-absolute mt-3"
                    aria-label="Default select example"
                    style={{ width: "max-content", top: 0 }}
                  >
                    <option value="1">1 kilo</option>
                    <option value="2">2 kilo</option>
                    <option value="3">3 kilo</option>
                  </select>
                </td>
                <td className="ps-4 position-relative py-3 body-1 d-block text-primary-light-700 h-100">
                  $90.00
                  <td
                    className=" py-1 position-absolute d-block text-primary-light-700 mb-4 ms-3 "
                    style={{ bottom: 0 }}
                  >
                    <AiFillDelete style={{ fontSize: "1.5rem" }} />
                  </td>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="col-lg-3 bg-primary-light-700 flex-grow-0 mt-3 mt-lg-0">
          <header
            className=" d-flex align-items-center body-1 text-primary-light-700 text-weight-bold border-bottom-primary mb-2"
            style={{ height: "50px" }}
          >
            Summary
          </header>
          <p className="body-2  text-primary mb-2">
            Estimate Shipping and Tax{" "}
          </p>
          <form className="border-bottom-primary py-2">
            <label className="text-primary-light-700 text-weight-regular body-2 mb-2">
              State
            </label>
            <select
              class="form-select  text-primary body-2 mb-2"
              aria-label="Default select example"
            >
              <option value="1">Islamabad</option>
              <option value="2">Lahore</option>
              <option value="3">Karachi</option>
            </select>
            <label className="text-primary-light-700 text-weight-regular body-2 my-2">
              Fast Delivery
            </label>
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                class="form-check-label body-2 text-primary-light-700 text-weight-regular body-2 "
                for="flexRadioDefault1"
              >
                Within next two days
              </label>
            </div>
            <label className="text-primary-light-700 text-weight-regular body-2 my-2">
              Regular Delivery
            </label>
            <div class="form-check mb-2  ">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                class="form-check-label body-2 text-primary-light-700 text-weight-regular body-2 "
                for="flexRadioDefault1"
              >
                Within a week
              </label>
            </div>
          </form>
          <div className="py-2 border-bottom-primary">
              <div className="d-flex justify-content-between mb-2">
                <p className="text-primary-light-700 text-weight-regular body-2 mb-0">Subtotal</p>
                <p className="text-primary-light-700 text-weight-regular body-2 mb-0">$90.00</p>

              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-primary-light-700 text-weight-regular body-2 mb-0">tax</p>
                <p className="text-primary-light-700 text-weight-regular body-2 mb-0">$00.00</p>

              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-2">
                <p className="text-primary text-weight-regular body-1 mb-0">Total</p>
                <p className="text-primary text-weight-regular body-1 mb-0">90.00</p>

              </div>
              <button className="btn my-2 btn-bg-primary text-weight-bold text-white w-100">
                  Procced to Checkout
              </button>
        </section>
      </main>
    </>
  );
}

export default Cart;
