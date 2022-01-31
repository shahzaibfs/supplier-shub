import React from "react";
import "./__login.css";
import {FcGoogle} from "react-icons/fc"
import Img1 from "../../Assets/images/auth.png";

const Login = () => {
  return (
    <section className="container-fluid p-0  text-white login__container overflow-auto">
      <div className="row h-100 w-100 mx-auto  overflow-hidden">
        <div className="col-md-6 d-none px-0  d-lg-block overflow-hidden h-100">
          <img src={Img1} alt="bgImg" className="w-100 img-fluid   login__img" />
        </div>
        <div className=" col-md-12 col-lg-6 h-100  p-0 mx-auto overflow-auto pb4">
          <section className="row mx-auto w-100 h-75 justify-content-center align-items-center flex-wrap">
            <div className="col-10 col-md-6 col-lg-8 col-xxl-6 h-75 ">
              <div className="row mb-4  ">
                <p className="text-primary-light-800 body-1 ">Welcome Back</p>
                <h1 className="text-primary heading-2 text-wrap">
                  Login to your account
                </h1>
              </div>
              <form className="mb-4">
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
                <div className="row m-0 justify-content-space-between mb-4" >
                <div class="form-group form-check col">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1" className="body-2 text-primary-light-700">
                   Remember me
                  </label>
                </div>
                <div class="col m-0 p-0">
                 
                  <label  for="exampleCheck1" className="body-2 text-secondary " style={{float:"right"}}>
                   Forgot your password ?
                  </label>
                </div>
                </div>
                
                  <div className="mb-3">
                  <button type="button" class="btn btn-bg-success text-white text-weight-regular body-1 w-100">
         Login now
                  </button>
                  </div>
                  <div className="mb-5">
                  <button type="button" class="btn btn-bg-primary text-white text-weight-regular body-1 w-100 ">
                  <FcGoogle /> <span className="mx-2">or signin with Google</span> 
                    </button>
                  </div>
                
                
            
              
              </form>
            
              <footer className="col-12 col-xxl-12  pb-5 pb-lg-0">
              <p className="text-primary-light-800 body-2 text-center">
                Don't have an account ? <span className="text-secondary-light-800 body-2">
                  Signup for free 
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

export default Login;
