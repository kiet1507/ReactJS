import { Link, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Profile from "./profile";
import Landing from './landingPage';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;





const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            items={[
              {
                key: "1",
                icon: (
                  <Link to={"/dashboard/profile"}>
                    <UserOutlined />
                  </Link>
                ),
                label: "Profile",
              },
              {
                key: "2",
                icon: (<Link to={'/dashboard/landing'}><VideoCameraOutlined /></Link>),
                label: "Landing Page",
              },
              {
                key: "3",
                icon: <Link to={'/dashboard/gallery'}> <UploadOutlined /> </Link>,
                label: "Gallery",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/landing" element={<Landing/>} />
              
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default Dashboard;
