import React from "react";
import {
  Avatar,
  Badge,
  Col,
  Row,
  Grid,
  Menu,
  Typography,
  Dropdown,
  Empty,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HiLocationMarker } from "react-icons/hi";
import { Header } from "antd/lib/layout/layout";

import fypogo from "./JIMMY LOGO.png"

import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  RiNotification4Fill,
  RiLogoutBoxRFill,
  RiSettings5Fill,
  RiDashboardFill,
} from "react-icons/ri";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/logoutAction";

import StyledButton from "../../Components/Inputs/StyledButton";
import SearchField from "../../Components/Inputs/search-filed";

const { Text } = Typography;

const { useBreakpoint } = Grid;
const MainHeader = () => {
  const cart = useSelector((store) => store.cartReducer);
  const user = useGetAuthenticatedUser();
  const { md } = useBreakpoint();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Header style={{ height: "max-content", padding: 0 }}>
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
          alignItems:"center"
          }}
        >
          <img
            src={fypogo}
            alt=""
            height={"75%"}
            width="100%"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <StyledButton
            Icon={HiLocationMarker}
            type="ghost"
            title="Pakistan"
            subtitle="Deliver to"
            onClick={() => navigate("/supplier-hub/customer-service")}
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
            <Dropdown
              overlay={NotificationMenu}
              placement="bottomRight"
              trigger={"click"}
              className="cursor-pointer"
            >
              <Badge
                count={0}
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
            </Dropdown>
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
            menu={user.isLogin ? menu(user, dispatch) : <></>}
            menuTrigger={["click"]}
          />

          <StyledButton type="ghost" title="& Orders" subtitle="Returns" />
          {!user.isLogin || user.role === "CUSTOMER" ? (
            <StyledButton
              Icon={HiOutlineShoppingCart}
              type="ghost"
              title="Cart"
              subtitle={`- ${cart.length}`}
              iconSize={40}
              onClick={() => {
                navigate("/cart");
              }}
            />
          ) : null}
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

const menu = (user, dispatch) => {
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
        <RiSettings5Fill size={20} className="me-1" />
        <Link
          to={
            getDashboardLinkFromUserDetails[user.role] +
              "/settings/view-profile" ?? ""
          }
        >
          Settings
        </Link>
      </Menu.Item>
      <Menu.Item key={3} onClick={() => dispatch(logoutAction())}>
        <RiLogoutBoxRFill size={20} className="me-1" />
        <Text>Logout</Text>
      </Menu.Item>
    </Menu>
  );
};

const NotificationMenu = () => {
  return <section style={{ width: "300px" ,minHeight:"300px",...styles.parent}}>
  <Empty />
  </section>;
};


const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
  },
};
