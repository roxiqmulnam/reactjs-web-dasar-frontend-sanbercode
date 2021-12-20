import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Footer, Navbar } from '../../components';
import { About, Home, MobileList } from '../../pages';
import CreateData from '../../pages/Create';
import { Provider } from '../Context';

const Routes = () => {
    return (
        <div>
                   
        <Router>
        <Navbar /> 
            <Switch>
                <Provider>
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={Home}/>
                <Route path="/mobile-list" exact >
                    <MobileList />          
                </Route>
                <Route path="/mobile-list/create-mobile-form">
                    <CreateData />
                </Route>

                {/* <Route path="/tugas-14" exact >
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
          </DataProvidernew> */}
                </Provider>
            </Switch>
        <Footer />
        </Router>
        </div>
    )
}

export default Routes;
