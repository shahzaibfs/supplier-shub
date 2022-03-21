import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const SmallHeader = ({ isLogin }) => {
  const authReducer = useSelector((store) => store.authReducer);
  
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch({
            type:"LOGOUT_ACTION",
        })
        navigate('/login')
    }
  return (
    <header className="container-fluid bg-primary d-none d-md-block ">
      <div
        className="text-white body-2 text-weight-regular container-fluid container-xxl d-flex align-items-center justify-content-end w-100  p-0 mx-0 mx-md-auto p-md-2"
        style={{ height: "42px" }}
      >
        Welcome<span className="text-weight-bold mx-md-1 ">{isLogin ? <Link to={authReducer.userDetails.accountType === "CUSTOMER" ? "/dashboard/customer" : "/dashboard/supplier"}> {authReducer.userDetails.name} |</Link> : "~Guest |"}</span>
        <span className="ms-2 text-decoration-underline cursor-pointer">
          {isLogin ? (
            <span onClick={handleLogout} style={{cursor:"pointer"}}>Logout</span>
          ) : (
            <Link to={"/login"}>Signin to create an account ?</Link>
          )}
        </span>
      </div>
    </header>
  );
};

export default SmallHeader;
