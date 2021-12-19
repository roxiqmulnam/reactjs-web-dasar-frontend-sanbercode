import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Header } from '../../components';
import { About, Home, MobileList } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Header>
                <Route path="/about" exact component={About} />
                <Route path="/mobile-list" exact component={MobileList} />
                <Route path="/" exact component={Home} />
                </Header>
            </Switch>
        </Router>
    )
}

export default Routes;
