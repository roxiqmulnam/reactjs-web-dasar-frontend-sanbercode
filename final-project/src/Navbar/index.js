import React from "react";
import { Layout, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const { Header } = Layout;

const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    history.push("/login");
  };
  return (
    <Header
      className="header"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <Link to={"/"}><p className="logo">MovieGame<span><strong>List.</strong></span></p></Link>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to={"/"}>Home</Link>
        </Menu.Item>

        {Cookies.get("token") === undefined ? (
          <>
            <Menu.Item key="2">
              <Link to={"/login"}>Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/register"}>Register</Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="4">
              <Link to={"/dashboard"}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="10" onClick={handleLogout}>
              Logout
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
