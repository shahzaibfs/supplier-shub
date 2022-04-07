import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { useGetAuthenticatedUser } from "../../../hooks/useGetAuthenticatedUser";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const SupplierDashboard = () => {
  const user = useGetAuthenticatedUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(user.role !== "SUPPLIER"){
        navigate("/login")
    }
    // eslint-disable-next-line
  }, []);

  const getBreadCrumbData = (location) => {
    return location.pathname.split("/").filter((name) => name !== "");
  };

  return (
    <div
      className="d-flex w-100"
      style={{
        height: "100vh",
        marginTop: "10px",
        backgroundColor: "transparent",
      }}
    >
      <Layout style={{ backgroundColor: "transparent" }}>
        <Sider theme="dark" width={200} className="">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Settings">
              <Menu.Item key="1">
                <Link to="settings/view-profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="settings/addresses">Addresses</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Orders">
              <Menu.Item key="3">
                <Link to="orders/track-orders">Track Orders</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={"orders/completed-orders"}>Completed Orders</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Products"
            >
              <Menu.Item key="5">
                <Link to="products/all-products">All Products</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="products/add-product">Add Product</Link>
              </Menu.Item>

              <Menu.Item key="7">
                <Link to="products/out-of-stock">Out Of Stock</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<NotificationOutlined />} title="Reports">
              <Menu.Item key="8">
                <Link to="reports/view-reports">All Reports</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            background: "transparent",
            overflowY: "auto",
            minHeight: "100vh",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            {getBreadCrumbData(location).map((breadCrumbItem, idx) => (
              <Breadcrumb.Item key={idx}>{breadCrumbItem}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            className=""
            style={{
              backgroundColor: "transparent",
              margin: 0,
              minHeight: "400px",
            
              
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SupplierDashboard;
