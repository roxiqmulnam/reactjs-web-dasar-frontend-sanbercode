import React from "react";
import { Layout, Menu, } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        <Menu.Item key="10"><Link to={'/dashboard'}>Dashboard</Link></Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Data Movie">
          <Menu.Item key="1"><Link to={'/list-movie'}>List Movie</Link></Menu.Item>
          <Menu.Item key="2"><Link to={'/list-movie/create'}>Add Movie List</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Data Game">
          <Menu.Item key="5"><Link to={'/list-game'}>List Game</Link></Menu.Item>
          <Menu.Item key="6"><Link to={'/list-game/create'}>Add Game List</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
