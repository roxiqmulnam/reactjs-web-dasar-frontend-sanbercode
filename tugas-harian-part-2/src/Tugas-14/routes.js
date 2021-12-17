import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./nav";
import Tugas13 from "../Tugas-13/mahasiswa";
import Tugas12 from "../Tugas-12/tugas12";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas9 from "../Tugas-9/tugas9";
import Tugas14 from "./tugas14";

import DataForm from "./dataForm";
import { ThemeProvider } from "./themeContext";

const Routes = () => {
  return (
    <>
    <Router>
      <ThemeProvider>
        <Nav />
      </ThemeProvider>
        <Switch>
          <Route path="/tugas-9">
            <Tugas9 />
          </Route>
          <Route path="/tugas-10">
            <Tugas10 />
          </Route>
          <Route path="/tugas-11">
            <Tugas11 />
          </Route>
          <Route path="/tugas-12">
            <Tugas12 />            
          </Route>
          <Route path="/tugas-13">
            <Tugas13 />            
          </Route>
          <Route path="/tugas-14">
            <Tugas14 />
          </Route>
          <Route exact path="/create">
            <DataForm />
          </Route>
          

        </Switch>
      </Router>
    </>
  );
}


export default Routes;
