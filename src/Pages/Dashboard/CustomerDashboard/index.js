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

const CustomerDashboard = () => {
  const user = useGetAuthenticatedUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role !== "CUSTOMER") {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const getBreadCrumbData = (location) => {
    return location.pathname.split("/").filter((name) => name !== "");
  };

  return (
    <div
      className="d-flex w-100"
      style={{ marginTop: "10px", backgroundColor: "transparent" }}
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
                <Link to="settings/view-profile">View Profile</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="settings/shipping-info">Shipping Info</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Orders">
              <Menu.Item key="5">
                <Link to="orders/track-orders">Track Orders</Link>
              </Menu.Item>
             
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Reports">
              <Menu.Item key="9">
                <Link to="reports/view-reports">View Reports</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            background: "transparent",
            overflowY: "auto",
            minHeight: "90vh",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            {getBreadCrumbData(location).map((breadCrumbItem, idx) => (
              <Breadcrumb.Item key={idx}>{breadCrumbItem}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
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

export default CustomerDashboard;
