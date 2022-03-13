import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const CustomerDashboard = () => {
  const user = useSelector((store) => store.authReducer);
  const location = useLocation();

  const getBreadCrumbData = (location) => {
    return location.pathname.split("/").filter((name) => name !== "");
  };

  if (!user.isLogin) {
    return <Navigate to="/" />;
  }
  if (user.userDetails.accountType === "CUSTOMER") {
    return (
      <div
        className="d-flex w-100"
        style={{ height: "100vh", marginTop: "10px" }}
      >
        <Layout>
          <Sider theme="dark" width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Settings">
                <Menu.Item key="1"><Link to="settings/view-profile">View Profile</Link></Menu.Item>
                <Menu.Item key="2"><Link to="settings/edit-profile" >Edit Profile Setting</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Orders">
                <Menu.Item key="5"><Link to="orders/track-orders">Track Orders</Link></Menu.Item>
                <Menu.Item key="6"><Link to={"orders/previous-orders"}>Previous Orders</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Reports"
              >
                <Menu.Item key="9"><Link to="reports/view-reports">View Reports</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {getBreadCrumbData(location).map((breadCrumbItem ,idx) => (
                <Breadcrumb.Item key={idx}>{breadCrumbItem}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
             <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default CustomerDashboard;
