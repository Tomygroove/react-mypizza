import React from 'react';

import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';

import Login from '../screens/login'
import Home from '../screens/home'
import Pizzas from '../screens/pizzas'
import Configurator from '../screens/configurator'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/pizzas" component={Pizzas} />
                <Route path="/pizza/{id}" component={Home} />
                <Route path="/configurator" component={Configurator} />
                <Redirect to="/home" ></Redirect>
            </Switch>
        </Router>
    );
};

export default Routes;