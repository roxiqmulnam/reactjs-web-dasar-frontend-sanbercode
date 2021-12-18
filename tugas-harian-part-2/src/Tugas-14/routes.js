import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./nav";
import Tugas13 from "../Tugas-13/mahasiswa";
import Tugas12 from "../Tugas-12/tugas12";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas9 from "../Tugas-9/tugas9";
import DataForm from "./dataForm";
import { ThemeProvider } from "./themeContext";
import { DataProvider } from "./dataContext";
import DataList from "./DataList";
import DataListNew from "../Tugas-15/DataList";
import { DataProvidernew } from "../Tugas-15/dataContext";
import DataFormNew from "../Tugas-15/dataForm";

const Routes = () => {
  return (
    <>
    <Router>
      
      <DataProvider>
      <ThemeProvider>
        <Nav />
      </ThemeProvider>
        <Switch>
          <Route path="/" exact component={Tugas9} /> 
          <Route path="/tugas-10" exact component={Tugas10} />
          <Route path="/tugas-11" exact component={Tugas11} />
          <Route path="/tugas-12" exact component={Tugas12} />
          <Route path="/tugas-13" exact component={Tugas13} />

          <Route path="/tugas-14" exact >
            <DataList />
          </Route>
          <Route path="/tugas-14/create">
            <DataForm />
          </Route>
          <Route path="/tugas-14/edit/:Value">
            <DataForm />
          </Route>
          <DataProvidernew>
          <Route path="/tugas-15" exact >
            <DataListNew />
          </Route>
          <Route path="/tugas-15/create">
            <DataFormNew />
          </Route>
          <Route path="/tugas-15/edit/:Value">
            <DataFormNew />
          </Route>
          </DataProvidernew>

        </Switch>
        </DataProvider>
      </Router>
      
    </>
  );
}


export default Routes;
