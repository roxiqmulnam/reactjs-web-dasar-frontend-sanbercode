import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Footer, Navbar } from '../../components';
import { About, Home, MobileList } from '../../pages';
import CreateData from '../../pages/Create';
import { Provider } from '../Context';

const Routes = () => {
    return (
                   
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
                <Route path="/mobile-list/edit/:Value">
                    <CreateData />
                </Route>
                </Provider>
            </Switch>
        <Footer />
        </Router>
    )
}

export default Routes;
