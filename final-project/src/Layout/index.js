import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const LayoutContent = (props) => {
  return (
    <Layout>
      <Navbar />

      <Content style={{ padding: "0 50px", marginTop: 65 }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>

        <Layout
          className="site-layout-background"
          style={{ padding: "25px 0" }}
        >
          {props.name === "dashboard" ? (
            <>
              {Cookies.get("token") === undefined ? null : <Sidebar />}
              <Content style={{ padding: "0 24px", minHeight: 200 }}>
                {props.dataContent}
              </Content>
            </>
          ) : (
            <Content style={{ padding: "0 24px", minHeight: 200 }}>
              {props.dataContent}
            </Content>
          )}
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center", bottom: 0 }}>

      </Footer>
    </Layout>
  );
};

export default LayoutContent;
