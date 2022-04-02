import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdNotificationsActive } from "react-icons/md";
import { Popover } from "antd";
import { GiConfirmed } from "react-icons/gi";


const content = (data = [...Array(3)]) => (
  <div className="" style={{ minWidth: "300px" }}>
    {data.map((_, idx) => (
      <Link key={idx} to={"/dashboard/supplier/orders/track-orders"}>
        <article className="pt-2 pb-2 d-flex align-items-centers justify-content-between">
          <div className="">
            <img src="" alt="" width="25px" height={"25px"} className="me-2" />
            <span className="body-2">content</span>
          </div>

          <GiConfirmed color="green" />
        </article>{" "}
      </Link>
    ))}
  </div>
);

const SmallHeader = ({ user }) => {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT_ACTION",
    });
    navigate("/login");
  };

  return (
    <header className="container-fluid mx-auto  bg-primary d-none d-md-flex align-items-center ">
      <div
        className="text-white 
        body-1 text-weight-regular
         container-fluid container-xxl d-flex align-items-center justify-content-end 
          p-0 mx-0 mx-md-auto p-md-2"
        style={{ height: "42px" }}
      >
        Welcome
        <span className="text-weight-bold mx-md-1 ">
          {
            isAuthenticated(user.isLogin, user.userDetails)
              .getUsername
          }
        </span>
        <div></div>
        {isAuthenticated(user.isLogin).getNotificationButton}
        <span className="ms-2 text-decoration-underline cursor-pointer">
          {isAuthenticated(user.isLogin).getAuthButton(handleLogout)}
        </span>
      </div>
    </header>
  );
};

export default SmallHeader;

const isAuthenticated = (authenticated = false, userDetails = {}) => ({
  //Todo : getNotificationButton
  getNotificationButton: authenticated && (
    <Popover
      placement="bottomRight"
      title={"Notifications"}
      content={content}
      trigger="click"
    >
      <MdNotificationsActive
        className="heading-3 me-2 ms-2 "
        style={{ cursor: "pointer" }}
      />{" "}
      <b>|</b>
    </Popover>
  ),
  //Todo : getUsername
  getUsername: authenticated ? (
    <Link
      to={
        userDetails.accountType === "CUSTOMER"
          ? "/dashboard/customer"
          : "/dashboard/supplier"
      }
      className="text-white body-1"
    >
      {" "}
      {userDetails.name}
    </Link>
  ) : (
    "~Guest"
  ),
  //Todo :getAuthButton
  getAuthButton: (handleLogout) =>
    authenticated ? (
      <span onClick={handleLogout} style={{ cursor: "pointer" }}>
        Logout
      </span>
    ) : (
      <Link to={"/login"} className="text-white">
        Signin to create an account ?
      </Link>
    ),
});
