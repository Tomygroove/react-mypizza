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
import Cart from '../screens/cart'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/pizzas" component={Pizzas} />
                <Route path="/configurator" component={Configurator} />
                <Route path="/cart" component={Cart} />
                <Redirect to="/home" ></Redirect>
            </Switch>
        </Router>
    );
};

export default Routes;