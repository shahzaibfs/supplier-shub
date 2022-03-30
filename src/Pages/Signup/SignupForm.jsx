import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { Button } from "antd";

const userDataInterface = {
  username: "",
  email: "",
  password: "",
  role: null,
};

const SignupForm = () => {
  const [roles, setRoles] = useState([]);
  const [userData, setuserData] = useState(userDataInterface);
  const [error, seterror] = useState({})
  const roleUrl = "api/v1.0/roles";
  const [isCreating, setisCreating] = useState(false);
  const createUserUrl = "api/v1.0/user/create";

  useEffect(() => {
    axios
      .get(roleUrl)
      .then((response) => {
        response.status === 200 && setRoles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    setuserData((old) => ({
      ...old,
      [e.target.name]:
        e.target.name === "role"
          ? roles.filter((role) => role.roleId === parseInt(e.target.value))[0]
          : e.target.value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    

    setisCreating(true);
    axios
      .post(createUserUrl, userData)
      .then(function (response) {
        setisCreating(false);
        console.log(response)
      })
      .catch(function (error) {
        setisCreating(false);
        if (error.response){
          console.log(error.response)
          seterror(error.response.data)
          }
      });
    
  };

  return (
    <section className="row mx-auto w-100 h-75 justify-content-center align-items-center flex-wrap">
      <div className="col-10 col-md-6 col-lg-8 col-xxl-6 h-75 ">
        <div className="row mb-4  ">
          <p className="text-primary-light-800 body-1 ">Welcome Guest</p>
          <h1 className="text-primary heading-2 text-wrap">
            Signup to your account
          </h1>
        </div>

        <form className="mb-4 position-relative" autoComplete="off">
          
            
          
            
              <div className="username form-group mb-4">
                <label className="text-primary-light-700 body2">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={userData.username}
                  required
                />
              </div>
              <div className="Email form-group mb-4">
                <label className="text-primary-light-700 body2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="Password form-group mb-4">
                <label className="text-primary-light-700 body2">Password</label>
                <input
                  type="password"
                  className="form-control"
                  aria-describedby="passwordHelp"
                  placeholder="Your Password"
                  name="password"
                  onChange={handleChange}
                  value={userData.password}
                  autoComplete="off"
                  required
                />
              </div>
              <div className={"AccountType form-group mb-4 position-relative"} style={{minHeight:"50px"}}>
                <label className="text-primary-light-700 body2">
                  Account type
                </label>
                {roles.length ? (
                  <select
                    className="form-control"
                    name="role"
                    onChange={handleChange}
                    value={1}
                    required
                  >
                    {roles.map((role) => (
                      <option key={role.roleId} value={role.roleId}>
                        {role.roleName}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Loader />
                )}
              </div>
              <div className="SignupButton  mb-3">
                <Button
                  type="button"
                  className="btn-bg-success  w-100"
                  typeof="submit"
                  onClick={handleSignUp}
                  loading={isCreating}
                  size="large"
                  
                >
                  Signup
                </Button>
                {error && <p className="pt-2 text-primary">{error.error}</p> }
              </div>
              <div className="OrSignupWithGoogle mb-5">
                <button
                  type="button"
                  className="btn btn-bg-primary text-white text-weight-regular body-1 w-100 "
                >
                  <FcGoogle />{" "}
                  <span className="mx-2">or signin with Google</span>
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
  );
};

export default SignupForm;
