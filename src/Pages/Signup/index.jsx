import React from "react";
import "./__Signup.css";
import { FcGoogle } from "react-icons/fc";
import Img1 from "../../Assets/images/auth.png";

const Signup = () => {
  return (
    <section className="container-fluid p-0  text-white login__container overflow-auto">
      <div className="row h-100 w-100 mx-auto  overflow-hidden">
        <div className="col-md-6 d-none px-0  d-lg-block overflow-hidden h-100">
          <img
            src={Img1}
            alt="bgImg"
            className="w-100 img-fluid   login__img"
          />
        </div>
        <div className=" col-md-12 col-lg-6 h-100  p-0 mx-auto overflow-auto pb4">
          <section className="row mx-auto w-100 h-75 justify-content-center align-items-center flex-wrap">
            <div className="col-10 col-md-6 col-lg-8 col-xxl-6 h-75 ">
              <div className="row mb-4  ">
                <p className="text-primary-light-800 body-1 ">Welcome Guest</p>
                <h1 className="text-primary heading-2 text-wrap">
                  Signup to your account
                </h1>
              </div>
              <form className="mb-4">
                <div class="form-group mb-4">
                  <label className="text-primary-light-700 body2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-primary-light-700 body2">
                    Full Name
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="CC-XX-XXXXXXX"
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-primary-light-700 body2">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-primary-light-700 body2">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    aria-describedby="passwordHelp"
                    placeholder="Your Password"
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-primary-light-700 body2">
                    Account type
                  </label>
                  <select class="form-control">
                    <option>Supplier</option>
                    <option>Customer</option>
                  </select>
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    class="btn btn-bg-success text-white text-weight-regular body-1 w-100"
                  >
                    Signup
                  </button>
                </div>
                <div className="mb-5">
                  <button
                    type="button"
                    class="btn btn-bg-primary text-white text-weight-regular body-1 w-100 "
                  >
                    <FcGoogle />{" "}
                    <span className="mx-2">or signin with Google</span>
                  </button>
                </div>
              </form>

              <footer className="col-12 col-xxl-12  pb-5 pb-lg-2">
                <p className="text-primary-light-800 body-2 text-center">
                  Have an account ?{" "}
                  <span className="text-secondary-light-800 body-2">
                    Login Now!
                  </span>
                </p>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Signup;
