import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Login, LoginRoute, DashboardRoute } from "../Login";
import LayoutContent from "../Layout";
import Dashboard from "../Dashboard";
import { ListDetail } from "../ListDetail";
import { ListMovie } from "../ListMovie";
import { ListGame } from "../ListGame";
import Register from "../Register";
import { FormMovie } from "../FormMovie";
import { FormGame } from "../FormGame";

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
          <LoginRoute path={"/register"} exact>
            <LayoutContent dataContent={<Register />} />
          </LoginRoute>
          <DashboardRoute path={"/dashboard"} exact>
            <LayoutContent name="dashboard" dataContent={<Dashboard />} />
          </DashboardRoute>
          <DashboardRoute path={"/list-movie"} exact>
            <LayoutContent name="dashboard" dataContent={<ListMovie />} />
          </DashboardRoute>
          <DashboardRoute path={"/list-movie/create"} exact>
            <LayoutContent name="dashboard" dataContent={<FormMovie />} />
          </DashboardRoute>
          <DashboardRoute path={"/list-movie/edit/:value"} exact>
            <LayoutContent name="dashboard" dataContent={<FormMovie />} />
          </DashboardRoute>
          <DashboardRoute path={"/list-game"} exact>
            <LayoutContent name="dashboard" dataContent={<ListGame />} />
          </DashboardRoute>
          <DashboardRoute path={"/list-game/create"} exact>
            <LayoutContent name="dashboard" dataContent={<FormGame />} />
          </DashboardRoute>
          <DashboardRoute path={"/list-game/edit/:value"} exact>
            <LayoutContent name="dashboard" dataContent={<FormGame />} />
          </DashboardRoute>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
