import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Login, LoginRoute, DashboardRoute } from "../Login";
import LayoutContent from "../Layout";
import Dashboard from "../Dashboard";
import { ListDetail } from "../ListDetail";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/"} exact>
            <LayoutContent dataContent={<Home />} />
          </Route>
          <Route path={"/detail/:value"} exact>
            <LayoutContent dataContent={<ListDetail />} />
          </Route>
          <LoginRoute path={"/login"} exact>
            <LayoutContent dataContent={<Login />} />
          </LoginRoute>
          <DashboardRoute path={"/dashboard"} exact>
            <LayoutContent name="dashboard" dataContent={<Dashboard />} />
          </DashboardRoute>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
