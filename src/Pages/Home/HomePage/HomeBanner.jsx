import React from 'react'
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    const backgroundImageUrl ="https://thumbs.dreamstime.com/b/online-shopping-landing-page-people-characters-internet-marketplace-web-banner-order-customer-payment-vector-illustration-213312179.jpg";
  return (
    <div
    className="container-fluid position-relative container-xxl  mt-4"
    style={{ height: "450px" ,backgroundImage:`url(${backgroundImageUrl})` ,backgroundSize:"cover" ,backgroundPosition:"center"}}
  >
    <div className="banner__info  position-absolute bg-primary-light-700 p-4 d-flex flex-column justify-content-center ">
      <p className="body-1 text-muted text-weight-regular">
        Wanna Buy some goods  ?
      </p>
      <h1 className="heading-2 text-primary-light  text-weight-regular">
        SignIn to an account and Buy your favourite Items 
      </h1>
      <Link to="/login">
      <button className="btn bg-primary text-white mt-3 w-50 body-2">
        SignIn
      </button>
        
        </Link>
    </div>
  </div>
  )
}

export default HomeBanner