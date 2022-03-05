import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProccedToCheckout = ({products,getProductsDetails}) => {
  const user = useSelector(store=>store.authReducer)

  console.log(getProductsDetails)

  return (
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
              className="form-select  text-primary body-2 mb-2"
              aria-label="Default select example"
            >
              <option value="1">Islamabad</option>
              <option value="2">Lahore</option>
              <option value="3">Karachi</option>
            </select>
            <label className="text-primary-light-700 text-weight-regular body-2 my-2">
              Fast Delivery
            </label>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label body-2 text-primary-light-700 text-weight-regular body-2 "
               
              >
                Within next two days
              </label>
            </div>
            <label className="text-primary-light-700 text-weight-regular body-2 my-2">
              Regular Delivery
            </label>
            <div className="form-check mb-2  ">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label body-2 text-primary-light-700 text-weight-regular body-2 "
                
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
                  {user.isLogin ? <Link to={"/checkout"} >Procced to Checkout</Link>
                  :<Link to={"/login"} >Login</Link>}
              </button>
        </section>
  )
}

export default ProccedToCheckout