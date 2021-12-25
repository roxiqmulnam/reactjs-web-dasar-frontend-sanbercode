import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="site-layout-background" width={200}>
      <h1 style={{display:'inline', margin: '25px' }}>Dashboard</h1>
      <Menu
        mode="inline"
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        
        <SubMenu key="sub1" icon={<UserOutlined />} title="Data Movie">
          <Menu.Item key="1">List Movie</Menu.Item>
          <Menu.Item key="2">Add Movie List</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Data Game">
          <Menu.Item key="5">List Game</Menu.Item>
          <Menu.Item key="6">Add Game List</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
