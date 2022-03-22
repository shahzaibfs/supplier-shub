import React ,{useEffect, useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { fakeauth } from "../../Application/store/middleWares/AuthMiddleWare/authMiddleWare";
import Popup from "../../Components/Popup/Popup";
// import axios from "axios";


const LoginForm = () => {
  const [loginDetails,setloginDetails] = useState({email:"",password:""});
  const [isPopupShow, setisPopupShow] = useState(false);
  const authState = useSelector(store=>store.authReducer)
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
    // TODO: Url needed to Authenticate : http://localhost:8080/api/v1.0/authenticate
    
    useEffect(() => {
      if(authState.errMessage.length){
     
        setisPopupShow(true)
      }
     let timeout = setTimeout(() => {
        setisPopupShow(false)
      }, 4000);
    
    
      return () => {
        clearTimeout(timeout)
      }
    }, [authState])
    
 
    
  
 


  console.log(authState)
  const handleInputs=(e)=>{
    setloginDetails(oldLoginDetails => ({
      ...oldLoginDetails,
      [e.target.name] : e.target.value
    }))
  }

  const handleLogin = (e)=>{
    dispatch(fakeauth(loginDetails.email,loginDetails.password));
  //   axios.post('api/v1.0/authenticate', {
  //     username: 'shahzaib',
  //     password: '123'
  //   },
  // {"Access-Control-Allow-Origin":"*"}
  //   )
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
    if(authState.isLogin){
      navigate("/",{replace: true });
    }
  }
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
              <label className="text-primary-light-700 body2">Username</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={handleInputs}
              />
            </div>
            <div className="form-group mb-4">
              <label className="text-primary-light-700 body2">Password</label>
              <input
                type="password"
                className="form-control"
                aria-describedby="passwordHelp"
                placeholder="Your Password"
                name="password"
                onChange={handleInputs}
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
                  
                  htmlFor="exampleCheck1"
                  className="body-2 text-primary-light-700 form-check-label"
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
                onClick={handleLogin}
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
        <Popup isShow={isPopupShow} color="warning" message={"failed to login"}/>

      </section>
    </>
  );
};

export default LoginForm;
