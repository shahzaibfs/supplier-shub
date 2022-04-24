import React from "react";
import { Avatar, Badge, Col, Row, Grid, Menu ,Typography} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HiLocationMarker } from "react-icons/hi";
import { Header } from "antd/lib/layout/layout";

import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiNotification4Fill ,RiLogoutBoxRFill,RiSettings5Fill,RiDashboardFill} from "react-icons/ri";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
import { Link, useNavigate } from "react-router-dom";
import {logoutAction} from '../../redux/actions/logoutAction'


import StyledButton from "../../Components/Inputs/StyledButton";
import SearchField from "../../Components/Inputs/search-filed";

const {Text} = Typography

const { useBreakpoint } = Grid;
const MainHeader = () => {
  const cart = useSelector((store) => store.cartReducer);
  const user = useGetAuthenticatedUser();
  const { md } = useBreakpoint();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Header
      style={{ height: "max-content", padding: 0 }}
      
    >
      <Row
        className="container-xxl mx-auto"
        align="middle"
        gutter={16}
        justify="space-between"
      >
        <Col
          style={{
            maxWidth: "max-content",
            height: "70px",
            display: "flex",
          }}
        >
          <img
            src="data:image/png;base64,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"
            alt=""
            height={"100%"}
            width="100%"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <StyledButton
            Icon={HiLocationMarker}
            type="ghost"
            title="Pakistan"
            subtitle="Deliver to"
            onClick={()=> navigate("/supplier-hub/customer-service")}
          />
        </Col>
        <Col xs={3} className={`d-${md && "none"}`}>
          <HiOutlineMenuAlt1 color="white" size={24} />
        </Col>
        <Col
          xs={24}
          className={`mb-${!md && "3"} d-flex`}
          sm={12}
          md={12}
          lg={6}
          xl={9}
          xxl={11}
        >
          <SearchField placeholder="Search thorugh out the website" />
        </Col>
        <Col
          style={{
            maxWidth: "max-content",
            height: "70px",
            display: !md ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {user.isLogin && (
            <Badge
              count={5}
              status={"success"}
              className="me-2"
              color={"gold"}
              offset={[-7, 0]}
            >
              <Avatar
                className="d-flex justify-content-center align-items-center bg-primary-light border-primary"
                shape="square"
                size="large"
                icon={<RiNotification4Fill />}
              />
            </Badge>
          )}

          <StyledButton
            Icon={FaUserCircle}
            type="ghost"
            title={user.isLogin ? "Wanna Logout" : "Account Login"}
            subtitle={`Welcome ~${
              user.isLogin
                ? user.userDetails.userName.substring(0, 5) + ".."
                : "Guest"
            }`}
            onClick={() => handleClickOnLoginOrLogoutBtn(user, navigate)}
            menu={user.isLogin ? menu(user,dispatch) : <></>}
            menuTrigger={["click"]}
          />

          <StyledButton type="ghost" title="& Orders" subtitle="Returns" />
          { !user.isLogin || user.role ==="CUSTOMER" ?
            <StyledButton
              Icon={HiOutlineShoppingCart}
              type="ghost"
              title="Cart"
              subtitle={`- ${cart.length}`}
              iconSize={40}
              onClick={()=>{navigate("/cart")}}
            />
            : null
          }
        </Col>
      </Row>
    </Header>
  );
};

export default MainHeader;

const handleClickOnLoginOrLogoutBtn = (user, navigate) => {
  if (user.isLogin) {
    return;
  } else {
    navigate("/login");
  }
};

const getDashboardLinkFromUserDetails = {
  SUPPLIER: "/dashboard/supplier",
  CUSTOMER: "/dashboard/customer",
};

const menu = (user,dispatch) => {
  console.log("i am here");
  return (
    <Menu>
      <Menu.Item key={1}>
        <RiDashboardFill size={20} className="me-1" />
        <Link
          to={
            getDashboardLinkFromUserDetails[user.role] +
              "/orders/track-orders" ?? ""
          }
        >
          Dashboard
        </Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <RiSettings5Fill size={20} className="me-1"/>
        <Link
          to={
            getDashboardLinkFromUserDetails[user.role] +
              "/settings/view-profile" ?? ""
          }
        >
          Settings
        </Link>
      </Menu.Item>
      <Menu.Item key={3} onClick={()=>dispatch(logoutAction())}>
        <RiLogoutBoxRFill size={20}  className="me-1"/>
        <Text>
          Logout
        </Text>
      </Menu.Item>
    </Menu>
  );
};
