import React from "react";
import { Layout} from "antd";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";

const {Content, Footer} = Layout;

const LayoutContent = (props) => {
  return (
    <Layout>
      <Navbar />

      <Content style={{ padding: "0 50px", marginTop: 100 }}>
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
