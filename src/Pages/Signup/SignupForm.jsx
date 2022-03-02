import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <>
      <section className="row mx-auto w-100 h-75 justify-content-center align-items-center flex-wrap">
        <div className="col-10 col-md-6 col-lg-8 col-xxl-6 h-75 ">
          {/* header signup page  */}
          <div className="row mb-4  ">
            <p className="text-primary-light-800 body-1 ">Welcome Guest</p>
            <h1 className="text-primary heading-2 text-wrap">
              Signup to your account
            </h1>
          </div>

          {/* main form signup  */}
          <form className="mb-4">
            <div className="fullName form-group mb-4">
              <label className="text-primary-light-700 body2">Full Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="PhNo form-group mb-4">
              <label className="text-primary-light-700 body2">Phone number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="CC-XX-XXXXXXX"
              />
            </div>
            <div className="Email form-group mb-4">
              <label className="text-primary-light-700 body2">Email</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="Password form-group mb-4">
              <label className="text-primary-light-700 body2">Password</label>
              <input
                type="password"
                className="form-control"
                aria-describedby="passwordHelp"
                placeholder="Your Password"
              />
            </div>
            <div className="AccountType form-group mb-4">
              <label className="text-primary-light-700 body2">
                Account type
              </label>
              <select className="form-control">
                <option>Supplier</option>
                <option>Customer</option>
              </select>
            </div>

            <div className="SignupButton  mb-3">
              <button
                type="button"
                className="btn btn-bg-success text-white text-weight-regular body-1 w-100"
              >
                Signup
              </button>
            </div>
            <div className="OrSignupWithGoogle mb-5">
              <button
                type="button"
                className="btn btn-bg-primary text-white text-weight-regular body-1 w-100 "
              >
                <FcGoogle /> <span className="mx-2">or signin with Google</span>
              </button>
            </div>
          </form>
          {/* footer for signup  */}
          <footer className="col-12 col-xxl-12  pb-5 pb-lg-2">
            <p className="text-primary-light-800 body-2 text-center">
              Have an account ?{" "}
              <span className="text-secondary-light-800 body-2">
               <Link to={"/login"}>Login Now!</Link> 
              </span>
            </p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
