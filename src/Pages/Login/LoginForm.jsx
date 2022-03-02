import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <section className="row mx-auto w-100 h-75 justify-content-center align-items-center flex-wrap">
        <div className="col-10 col-md-6 col-lg-8 col-xxl-6 h-75 ">
          {/* header for login form  */}
          <div className="row mb-4  ">
            <p className="text-primary-light-800 body-1 ">Welcome Back</p>
            <h1 className="text-primary heading-2 text-wrap">
              Login to your account
            </h1>
          </div>
          {/* form starts from here  */}
          <form className="mb-4">
            <div className="form-group mb-4">
              <label className="text-primary-light-700 body2">Email</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-4">
              <label className="text-primary-light-700 body2">Password</label>
              <input
                type="password"
                className="form-control"
                aria-describedby="passwordHelp"
                placeholder="Your Password"
              />
            </div>
            <div className="row m-0 justify-content-space-between mb-4">
              <div className="form-group form-check col">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                  className="body-2 text-primary-light-700"
                >
                  Remember me
                </label>
              </div>
              <div className="col m-0 p-0">
                <label
                  htmlFor="exampleCheck1"
                  className="body-2 text-secondary "
                  style={{ float: "right" }}
                >
                  Forgot your password ?
                </label>
              </div>
            </div>

            <div className="mb-3">
              <button
                type="button"
                className="btn btn-bg-success text-white text-weight-regular body-1 w-100"
              >
                Login now
              </button>
            </div>
            <div className="mb-5">
              <button
                type="button"
                className="btn btn-bg-primary text-white text-weight-regular body-1 w-100 "
              >
                <FcGoogle /> <span className="mx-2">or signin with Google</span>
              </button>
            </div>
          </form>
          {/* fotter here  */}
          <footer className="col-12 col-xxl-12  pb-5 pb-lg-0">
            <p className="text-primary-light-800 body-2 text-center">
              Don't have an account ?{" "}
              <span className="text-secondary-light-800 body-2">
                <Link to={"/signup"}>Signup for free</Link>
              </span>
            </p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
